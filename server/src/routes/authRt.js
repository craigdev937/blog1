import express from "express";
import { RunVal } from "../validators/RunVal.js";
import { RegisterVal, LoginVal } from "../validators/Auth.js";
import { Index, Register } from "../controllers/authCon.js";

export const authRt = express.Router();
    authRt.post("/register", RunVal, RegisterVal, Register);
    authRt.get("/", Index);





