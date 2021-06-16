const express = require('express');

const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config');


//import Routes
const postsRoute = require('./routes/posts');
// const imagesRoute = require('./routes/images');
const authRoute = require('./routes/auth');


app.use(bodyParser.json());
// app.use('/images', imagesRoute);
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('CRUD OPERATION'); 

});


app.get('/posts', (req, res) => {
    res.send('CRUD OPERATIONzz'); 

});

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
 ()=>{console.log('connected to DB')
});

//middleware
app.use(express.json());
app.use('/api/posts', postsRoute);


//Route Middlewares
app.use('/api/user' , authRoute);


//How do we start listening to the server
app.listen(4000, () => console.log('server up and running'));