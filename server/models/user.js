'use strict';

import mongoose         from "mongoose";
import Promise          from "bluebird";
import CustomError      from '../exception/exception';
import moment           from "moment";
const bcrypt = Promise.promisifyAll(require("bcrypt"));

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        maxLength: 200,
        required: true
    },
    email: {
        unique: true,
        type: String,
        require: true,
        index: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    update_at: {
        type: Date,
        required: false
    },
    password: {
        type: String,
        required: true,
        match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
        minlength: 6
    }
});

UserSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next();
    }

    try {
        const hash = await bcrypt.hashAsync(this.password, 16.5);
        this.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});

UserSchema.methods.passwordIsValid = function (password) {
    try {
        return bcrypt.compareAsync(password, this.password);
    }
    catch (err) {
        throw new CustomError(err, "404");
    }
};

export { UserSchema as UserSchema };

const LoginSchema = new Schema({
    identityKey:{
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    failedAttempts:{
        type: Number,
        required : true,
        default: 0
    },
    timeout :{
        type: Date,
        required: true,
        default: new Date()
    },
    inProgress:{
        type: Boolean
    }
});

LoginSchema.static("canAthenticate", async function(key){
    const login = await this.findOne({identityKey: key});

    if(!login || login.failedAttempts < 5){
        return true;
    }

    const newTimeout = moment(login.timeout).add(1, 'm').toDate();
    const timeout = (new Date() - newTimeout);
    if( timeout >= 0 ){
        await login.remove();
        return true;
    }
    return false;
});


LoginSchema.static("failedLoginAttempt", async function(key){
    const query = {identityKey: key};
    const update = {$inc: {failedAttempts: 1}, timeout: new Date(), inProgress: false};
    const options = {setDefaultsOnInsert: true, upsert: true};
    return await this.findOneAndUpdate(query, update, options).exec();
});

LoginSchema.static("successfulLoginAttempt", async function(key){
   const login = await this.findOne({identityKey: key});
   if(login){
       return  await login.remove();
   }
});

LoginSchema.static("inProgress", async function(key){
    const login = await this.findOne({identityKey: key});
    const query = {identityKey: key};
    const update = {inProgress : true};
    const options = {setDefaultsOnInsert: true, upsert: true};
    await this.findOneAndUpdate(query, update, options).exec();
    return (login && login.inProgress);
});

export { LoginSchema as LoginSchema };
