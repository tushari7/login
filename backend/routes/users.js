// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const express = require("express");
const router = express.Router();
const { User } = require("../schema/user"); 
const bcrypt = require("bcrypt");
// const {getUserById , verifyToken} = require('../utilies/utilies')
const jwt = require('jsonwebtoken');

router.post("/create", async (req, res) => {
    const {  name, phone, email, password } = req.body;
    if (  !name ||!phone ||  !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const users = await User.findOne({ email: email });
    if (users) {
      res.status(500).json({ message: "Email Already Exist!!!!!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
      name,
      phone,
      password: hashedPassword,
      email 
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  
  router.get('/getById/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        
      
        const user = await getUserById(userId);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});







// router.get('/getById/:id', async (req, res) => {
//   try {
//       const userId = req.params.id;
 
//       const users = await User.aggregate([
//           {
//               $match: { is_deleted: false } 
//           }
//       ]);
 
//       const user = await getUserById(userId);

//       if (user) {
//           res.status(200).json({ user, users }); 
//       } else {
//           res.status(404).json({ message: 'User not found' });
//       }
//   } catch (error) {
//       console.error('Error fetching user by ID:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });


router.get('/all', async (req, res) => {
  try {
    const users = await User.find({ is_deleted: false });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.delete("/delete-user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const deleteduser = await User.findByIdAndUpdate(userId);

    if (!deleteduser) {
      return res.status(404).json({ message: "user not found" });
    }

    deleteduser.is_deleted = true;
    await deleteduser.save();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  console.log("rewbody>>>",req.body)
  const { email, password } = req.body;
 
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    } 
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' }); 
    user.token = token;
    await user.save();
    res.status(200).json({ message: 'Login successful', token,user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;
