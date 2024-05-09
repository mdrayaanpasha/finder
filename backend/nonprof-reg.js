import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Prof-App", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const regProfSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required:true
    }
});

const regNonProfModel = mongoose.model("Reg-NonProf", regProfSchema);

export default regNonProfModel
