const router = require('express').Router(); 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');


router.post('/register', async (req,res) => {

  //lets validate the data before we a user
    const {error} = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

   //checking if the user is already in db
   const emailExist = await User.findOne({email: req.body.email});
if(emailExist) return res.status(400).send('Email already exists');
   
//hash the passwords
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);


   //create a new user
   const user = new User({
       name: req.body.name,
       email: req.body.email,
       password: hashPassword
   });

   try{
    const saveduser = await user.save();
    res.send({user: user._id});
 }catch(err){
      res.status(400).send(err);

 }
});
 

//login
router.post('/login', async (req,res) => {
     const {error} = loginValidation(req.body);
     if(error) return res.status(402).send(error.details[0].message);  

      //checking if the email exists
   const user = await User.findOne({email: req.body.email});
   if(!user) return res.status(400).send('Email is not found');
  //password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(401).send('Invalid password')

//create and assign a tocken
const tocken = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
res.status(202).header('auth-tocken', tocken).send(tocken);



 
});


module.exports = router;
