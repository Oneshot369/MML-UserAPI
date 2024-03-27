import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from './users.queries';

export const readAllUsers = async () => {
    return execute<User[]>(userQueries.readAllUsers, []);
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
