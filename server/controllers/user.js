import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { randomUUID } from 'crypto';
dotenv.config();
export const signup = async (req, res) => {
    const { firstName, lastName, email, password,confirmPassword } = req.body;
    try {
        const exist = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 12);
        if (exist) {
            console.log("user exist already")
            res.status(409).json({message :"User exists already."})
        }
        else if (password != confirmPassword) {
            console.log("password didnt match")
            res.status(410).json({message:"Password didnt match."});
        }
        else {

            const result = await User.create({
                name: `${firstName} ${lastName}`,
                createdAt: new Date().toISOString(),
                email,
                password: hashedPassword,
                _id: randomUUID(),
            });
            console.log(result);
            const user = { name: result.name, email: result.email, _id: result._id }
            res.status(200).json({ user });
        }
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found." });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(401).json({ message: "Incorrect password." });
        res.status(200).json({ user});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


