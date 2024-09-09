const User=require('../Models/user')

///controller for signup user //
const registerUser= async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;

        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }

        const user=await User.create({name,email,password,role});
        if (user) {
            return res.status(201).json({
                message: "User registered successfully",
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

///controller for login user //
const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check if the password matches
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check if the role matches
        if (user.role !== role) {
            return res.status(403).json({ message: "Access denied. Incorrect role." });
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);

        // // Set the JWT token in cookies for further requests
        // res.cookie('token', token, { httpOnly: true });

        // Redirect the user based on their role
        if (role === 'admin') {
            res.json({ message: "Login successful", redirectUrl: "/dashboard" });
        } else if (role === 'manager') {
            res.json({ message: "Login successful", redirectUrl: "/dashboard" });
        } else if (role === 'member') {
            res.json({ message: "Login successful", redirectUrl: "/dashboard/user" });
        } else {
            res.status(403).json({ message: "Invalid role" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { registerUser, loginUser };
