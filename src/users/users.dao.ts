import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from './users.queries';
import { Movie } from "./movies.model";

export const readAllUsers = async () => {
    return execute<User[]>(userQueries.readAllUsers, []);
};
export const addUser = async (FirstName: string,LastName: string,Email: string,Username: string,Password: string) => {
    return execute<User[]>(userQueries.addUser, [FirstName, LastName, Email, Username, Password]);
};


export const getMovies =async (userID: string) => {
    return execute<Movie[]>(userQueries.getCart, [
        userID 
    ]);
}

export function addToUserList(userID: any, movieID: any, watchlist: any, rating: any) {
    return execute<Movie[]>(userQueries.addToCart, [
        userID,
        movieID,
        watchlist,
        rating 
    ]);
}
