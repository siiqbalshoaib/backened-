import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true


}))

const app = express();



export {app}