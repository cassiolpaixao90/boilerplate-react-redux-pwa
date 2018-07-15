'use strict';

import {Router}                           from "express";
import controller                         from "../controllers/user-controller";
import userService                        from "../services/user-service";

const userRouter =  Router();

userRouter.post('/register', controller.register);
userRouter.post('/authenticate', controller.authenticate);
userRouter.post('/refresh-token', userService.authorize, controller.refreshToken);

export default userRouter;
