import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from './users.queries';

export const readAllUsers = async () => {
    return execute<User[]>(userQueries.readAllUsers, []);
};
export const addUser = async (FirstName: string,LastName: string,Email: string,Username: string,Password: string) => {
    return execute<User[]>(userQueries.addUser, [FirstName, LastName, Email, Username, Password]);
};


export const getMovies =async (userID: string) => {
    return execute<number[]>(userQueries.getCart, [
        userID 
    ]);
}

export const addToList =async (userID: number, movieID: number) => {
    return execute<OkPacket>(userQueries.addToCart, [
       userID,
       movieID
    ]);
}

export const removeFromList =async (userID: number, movieID: number) => {
    return execute<OkPacket>(userQueries.removeFromCart, [
        movieID,
        userID
    ]);
}
