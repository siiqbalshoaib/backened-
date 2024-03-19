import dotenv from "dotenv";
import connectDB from "./db/db.js";

// is code ko aese hi likhte hai ye .env ka configuration hai
dotenv.config({
  path: "./env",
});

connectDB()
  // we have used async await in database connection so wo promise return krta hai uske liye ham .then .cath use kr rhe hai
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("connection to MongoDb failed !!", error);
  });
