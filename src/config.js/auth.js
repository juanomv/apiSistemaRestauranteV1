require('dotenv').config()

module.exports={
    secret:"podsfsdlicuadkfdsf" || process.env.AUTH_SECRET,
    expires:"365d" || process.env.AUTH_EXPIRES,
    rounds:10 ||process.env.Auth_ROUNDS
}