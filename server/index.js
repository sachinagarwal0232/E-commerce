require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/userRoutes");
const cookieParser = require("cookie-parser");
const prouter = require("./routers/productRoutes");


// Middlewares
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(cookieParser());

app.use('/api/users', router);
app.use('/api', prouter);


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DataBase Is Running')
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => { console.log(err) })