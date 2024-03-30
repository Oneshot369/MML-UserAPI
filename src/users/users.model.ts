import { Movie } from "./movies.model";

export interface User{
    ID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Username: string;
    Password: string;
    List?: Movie[];
}