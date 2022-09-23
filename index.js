require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5003;
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter=require('./router/userRouter');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/uploads",express.static("./uploads"));

app.use(userRouter);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
     console.log("Database is connected");
     app.listen(PORT, () => {
          console.log(`http://localhost:${PORT}`)
     });
}).catch((err) => {
     console.log(err.message);
});
