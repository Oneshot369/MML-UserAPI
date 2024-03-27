import express, { Request, Response } from 'express';

import usersRoute from './users/users.routes';

import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//enable all CORS request
// needs to be installed:
//npm install cors
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse ORL-encoded bodies
app.use(express.urlencoded({extended: true}));

//adding set of security middleware
//needs to be installed:
//npm install helmet
app.use(helmet());

//this is middleware
app.use('/', [usersRoute]);

app.listen(port, () => {
    //this is just logging the port to the console
    console.log(`Example app listening at http://localhost:${port}`)
});
