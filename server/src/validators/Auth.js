import { check } from "express-validator";

export const RegisterVal = [
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is required"),
    check("email")
        .isEmail()
        .withMessage("Must be a valid email address"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
];

export const LoginVal = [
    check("email")
        .isEmail()
        .withMessage("Must be a valid email address"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
];






