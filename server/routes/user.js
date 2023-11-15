import express from "express";
const router=express.Router();



import {signup,signin} from "../controllers/user.js";
import { saveContact } from "../controllers/contact.js";


router.post("/signup",signup);
router.post("/signin",signin);

//contact
router.post("/contact",saveContact);

export default router;