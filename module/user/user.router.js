import { Router } from 'express';
import { getLessThan, getGrThan, getUserAge, getUserName, getUser, deleteUser, updateUser, addUser, getAllUsers } from './controller/user.controller.js';

import { nameAge, findByEmail, getUser, } from '../new.js'
const router = Router();


router.get("/userAge", getUserAge)

router.get("/greatThan", getGrThan)

router.get("/lessThan", getLessThan)


router.get("/nameAge", nameAge)

router.get('/findByEmail', findByEmail)

router.get("/getUser/:id", getUser)
export default router