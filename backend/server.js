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

const uri = process.env.ATLAS_URI;
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
const { dirname } = require('path');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/bookapp',appointmentRouter);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('build'));
  app.get('*',(req,res)=>{res.sendFile(path.join(-dirname,'build','index,html'));});
}





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


