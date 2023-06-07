const { default: mongoose } = require("mongoose")

const dbConnect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017'|| process.env.DB_CONNECTION_URL);
        console.log("db connected successfully");
    } catch (e){
        console.log(e.message);
    }    
}
module.exports = dbConnect;