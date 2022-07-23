import express from 'express';
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from '../controllers/user.js';
import {
    verifyUser,
    verifyAdmin
} from '../utils/verifyToken.js';

const router = express.Router();

// create
router.post("/", createUser);

// router.post("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in.")
// })

// router.post("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete this account.")
// })

// router.post("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are logged in and you can delete any account.")
// })

// update
router.put("/:id", verifyUser, updateUser);

// delete
router.delete("/:id", verifyUser, deleteUser);

// get
router.get("/:id", verifyUser, getUser);

// get all
router.get("/", verifyAdmin, getUsers);
export default router