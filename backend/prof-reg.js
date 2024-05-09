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
    phoneNo: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    from: {
        type: String, // Assuming you want to store time as string
        required: true
    },
    to: {
        type: String, // Assuming you want to store time as string
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    workExp: {
        type: Number,
        required: true
    },
    category : {
        type:String,
        required:true
    },
    pertime: {
        type:Number,
        required:true
    }
});

const RegProfModel = mongoose.model("RegProf", regProfSchema);

export default RegProfModel;
