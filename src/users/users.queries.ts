export const userQueries ={
    readAllUsers:
        `SELECT * FROM users.users`,
    getCart:
        `select MovieID from users.movie 
        join users On movie.UserID = users.ID
        where users.users.ID = ?`,
        //todo
    addToCart:
        "",
    removeFromCart:
        ""
}