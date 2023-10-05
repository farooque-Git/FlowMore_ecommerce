import mongoose from "mongoose";

// Schema = all your user toys will have the same structure, making it easy to play with
//  and manage them! Now you can create as many user toys as you want, all
// following the same magical blueprint
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // trim:true   //unique - because one user have only one account
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, //zero means false and 1 means true
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
