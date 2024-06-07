import mongoose from "mongoose";

export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://swiftfood:rcn12345@cluster0.7bjsvav.mongodb.net/fooddeli').then(()=>console.log("DB Connected")).catch(err => {
          console.log(err);
      });
}