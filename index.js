const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const DB_URL = process.env.DB_URL;

mongoose.set('strictQuery', false);

async function Main() {
    await mongoose.connect(DB_URL).then(() => {
        console.log('Connected to DB');
    }).catch((err) => console.log(err));
}

Main()


