import { Request, Response, Router } from 'express';
import * as UserController from "./users.controller";

const router = Router();
//get all users
router
    .route('/users')
    .get(UserController.readUsers);

router
    .route('/addUser')
    .post(UserController.addUser);

export default router;