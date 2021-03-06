const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path=require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//const uri1=process.env.MONGODB_URI;
const uri =' process.env.ATLAS_URI';
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
). then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));



const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const appointmentRouter = require('./routes/bookapp');
// Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/bookapp',appointmentRouter);
app.get('/', (req, res) => { res.send('Hello from Express!')});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


