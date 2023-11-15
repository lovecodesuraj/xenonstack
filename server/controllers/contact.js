import { Contact } from "../models/contact.js";

export const saveContact = async (req, res) => {
    const { name, email,message } = req.body;
    try {
         await Contact.create({
            name,email,message
         });
         res.status(200).json({message:"Contact saved"});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}