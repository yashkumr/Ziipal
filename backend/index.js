import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js"

export const app  = express();

dotenv.config();
connectDB();
  
   //middleware

   app.use(cors());
   app.use(express.json());
   app.use(morgan("dev"));
   app.use(bodyParser.urlencoded({extended:false}));

   //routing
   app.use("/api/v1/auth", authRoutes);


app.use("/", (req, res)=>{
    res.send("welcome");
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`.bgCyan.white);
})