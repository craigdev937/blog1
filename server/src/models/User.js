import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, trim: true, required: true, max: 32, 
        unique: true, index: true, lowercase: true
    },
    name: { type: String, trim: true, required: true, max: 32 },
    email: { 
        type: String, trim: true, required: true, 
        unique: true, lowercase: true
    },
    // profile: { type: String, required: true },
    hashed_password: { type: String, required: true },
    salt: String,
    about: { type: String },
    role: { type: Number, default: 0 },
    photo: { data: Buffer, contentType: String },
    resetPasswordLink: { data: String, default: "" },
}, { timestamps: true });

UserSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptedPassword(password);
    })
    .get(function() {
        return this._password;
    });

UserSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptedPassword(plainText) === this.hashed_password;
    },

    encryptedPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (error) {
            return "";
        }
    },

    makeSalt: function() {
        return Math.round(
            new Date().valueOf() * Math.random()
        ) + "";
    }
};

export const User = mongoose.model("User", UserSchema);



