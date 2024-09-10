const  express = require("express");
const app=express()
const  cors =require("cors") ;
const  dotenv =require ("dotenv");
const cookieParser = require('cookie-parser');
const {errorHandler,routeNotFound} =require('./middlewares/errorMiddleware') 
const userRoutes =require('./Routes/userRoutes') 
const dashboardRoutes=require('./Routes/dashboardRoutes');
const { authenticateJWT } = require('./middlewares/authMiddleware');
const roleMiddleware = require('./middlewares/roleMiddleware');
require("./Connection/conn");
const task=require('./Routes/task')



dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello from the backend");
});

// app.get('/dashboard', (req, res) => {
//   res.json({ message: 'Welcome to the dashboard!' });
// });
app.use('/auth',userRoutes)
app.use('/api', dashboardRoutes);
app.use('/api', task);


app.use(routeNotFound)
app.use(errorHandler)
const PORT = 1000;


app.listen(PORT, () => {
  console.log("Server is running on port 1000");
});
