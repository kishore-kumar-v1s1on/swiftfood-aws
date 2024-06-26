import express from  "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.use(express.static(path.join(__dirname, '../capstone-fend/dist')));
app.get('/', (req, res) =>{
	res.sendFile(path.resolve(__dirname, '../capstone-fend/dist/index.html'));
});


app.listen(port,()=>{
 console.log(`Server Started on http://localhost:${port}`) 
})


 
