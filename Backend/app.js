const  express = require("express");
const app=express()
const  cors =require("cors") ;
const  dotenv =require ("dotenv");
const cookieParser = require('cookie-parser');
const {errorHandler,routeNotFound} =require('./middlewares/errorMiddleware') 
const userRoutes =require('./Routes/userRoutes') 
const dashboardRoutes=require('./Routes/dashboardRoutes');
require("./Connection/conn");



dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("hello from the backend");
});

app.use('/auth',userRoutes)
app.use('/dashboard',dashboardRoutes)
// const UserAPI = require("./Routes/user");
// const TaskAPI = require("./Routes/task");

// app.use("/api/v1", UserAPI);
// app.use("/api/v2", TaskAPI);


app.use(routeNotFound)
app.use(errorHandler)
const PORT = 1000;
app.listen(PORT, () => {
  console.log("Server is running on port 1000");
});
