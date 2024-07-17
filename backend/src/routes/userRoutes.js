import { Router } from "express";
import { createUser,login } from "../methods/createUser.js";
import { auth } from "../methods/auth/auth.js";
import { createThought,getThought} from "../methods/createThought.js";
import { deleteUser } from "../methods/deleteUser.js";
import { deleteThought } from "../methods/deleteThought.js";
const router = Router()
router.post('/create/user',createUser)
router.post('/login/user',login)
router.post('/create/thought',auth,createThought)
router.get('/get/thought',getThought)
router.get('/delete/user:username',auth,deleteUser)
router.get('/delete/thought:thoughtId',auth,deleteThought)
export default router