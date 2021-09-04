import { User } from "../models/User.js";
import shortId from "shortid";
import jwt from "jsonwebtoken";
import expressJWT from "express-jwt";

export const Register = (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
    .exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: "Email is taken"
            });
        }

        const { name, email, password } = req.body;
        let username = shortId.generate();
        // let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        let newUser = new User({ name, email, password, username });
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({ error: err });
            };
            res.json({ msg: "Register Sucess!" })
        })
    });
};

export const Index = (req, res) => {
    res.json({ api: "MERN" });
};





