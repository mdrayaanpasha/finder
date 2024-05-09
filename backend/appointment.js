
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Prof-App", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const Sch = mongoose.Schema({
    name:String,
    date:Date,
    time:String,
    problem:String,
    by:String,
    to:String
})


const appointmentModel = mongoose.model("appointments",Sch);


export default appointmentModel

