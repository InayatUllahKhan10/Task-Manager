const express = require('express');
const router = express.Router();
const User = require("../Models/user");
const {signupUser,loginUser}=require('../controllers/userController')



router.get('/signup',(req,res)=>{
  res.send('this is signup form')
})
router.get('/login',(req,res)=>{
  res.send('this is login form')
})
router.get('/logout',(req,res)=>{
  res.send('this is logout form')
})

router.post('/get-all-users', async (req, res) => {
  try {
      const users = await User.find({ role: 'user' }).select('name email'); // Exclude pass field for security
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
  }
});

// signup API
router.post('/signup', signupUser);

//login API
router.post('/login', loginUser);
module.exports = router;