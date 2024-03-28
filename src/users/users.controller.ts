import { Request, RequestHandler, Response } from 'express';
import { User } from './users.model';
import * as UserDAO from './users.dao';


export const readUsers: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //read all the users
        let users = await UserDAO.readAllUsers();

        //also get the cart of the user
        await getList(users, res);

        //send the results back
        res.status(200).json(
            users
        );
    }
    //catch error if something happens
    catch(error){
        console.error("users.controller|readUsers|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading all the Users'
        });
    }
}
export const addUser: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //read all the users
        let users = await UserDAO.addUser(req.body.FirstName, req.body.LastName, req.body.Email, req.body.Username ,req.body.Password);

        //send the results back
        res.status(200).json(
            users
        );
    }
    //catch error if something happens
    catch(error){
        console.error("users.controller|readUsers|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading all the Users'
        });
    }
}

async function getList(users: User[], res: Response<any, Record<string, any>>) 
{
    for (let i = 0; i < users.length; i++){
        try{
            console.log(users);
            const products = await UserDAO.getMovies(users[i].ID.toString());
            users[i].List = products;

        } catch (error){
            console.error('users.controller|getCart|ERROR', error);
            res.status(500).json({
                message: 'There was an error when fetching cart'
            });
        }
    }
} 

export const addToList: RequestHandler =async (req:Request, res: Response) => 
{
    //TODO
}

export const removeFromList: RequestHandler =async (req:Request, res: Response) => 
{
    //TODO
}


