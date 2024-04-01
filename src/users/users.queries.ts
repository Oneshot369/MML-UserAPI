export const userQueries ={
    readAllUsers:
        `SELECT * FROM users.users`,
    addUser:
        `insert into users.users (FirstName, LastName, Email, Username, Password) values (?,?,?,?,?)`,
    getCart:
        `select MovieID, rating, watched from users.movie 
        join users On movie.UserID = users.ID
        where users.users.ID = ?`,
        //todo
    addToCart:
        'insert into users.movie (UserID, MovieID, rating, watched) values (?,?,?,?)',
    removeFromCart:
        ""
}