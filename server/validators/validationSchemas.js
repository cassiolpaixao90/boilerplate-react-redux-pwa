"use strict";

export const registrationSchema = {
    "email": {
        notEmpty: true,
        isEmail: {
            errorMessage: "E-mail inválido"
        }
    },
    "password": {
        notEmpty: true,
        isLength: {
            options: [{min: 6}],
            errorMessage: "Deve ter pelo menos 6 caracteres."
        },
        matches: {
            options: ["(?=.*[a-zA-Z])(?=.*[0-9]+).*", "g"],
            errorMessage: "A senha deve ser alfanumérica."
        },
        errorMessage: "Senha password"
    },
    "name": {
        notEmpty: false,
        isLength: {
            options: [{max: 200}],
            errorMessage: "O nome deve ter menos de 200 caracteres"
        },
        matches: {
            options: ["^[a-z ,.'-]+$", "i"],
            errorMessage: "A primeira letra do nome só pode conter letras e os caracteres (,.'-)"
        }
    }
};

export const loginSchema = {
    "email": {
        notEmpty: true,
        isEmail: {
            errorMessage: "E-mail inválido"
        }
    }
};

export const countrySchema = {
    "nome": {
        notEmpty: false,
        isLength: {
            options: [{max: 200}],
            errorMessage: "O nome deve ter menos de 200 caracteres"
        }
    }
};


