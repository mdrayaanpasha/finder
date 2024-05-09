import express from "express";
import cors from 'cors';
import RegProfModel from "./prof-reg.js";
import regNonProfModel from "./nonprof-reg.js";
import appointmentModel from "./appointment.js";



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/reg-prof", async (req, res) => {
    // The goal here is to check if a prof exists with a certain email. If so, don't authenticate; else, authenticate.
    
    console.log(req.body)
    try {
        const data = await RegProfModel.find({ email: req.body.email });

        if (data.length > 0) {
            res.send({message:"hain"})
        } else {
            await RegProfModel.create(req.body);
            res.send({message:"banga"})
        }
           } catch (error) {
        console.error(error);
        res.send({message:"error"})
    }
});


app.post("/prof-log", async (req, res) => {
    try {
      const thing = await RegProfModel.find({ email: req.body.email });
      if (thing.length > 0) {
        if (req.body.password !== thing[0].password) {
          res.send({ message: "fail" });
        } else {
          res.send({ message: "pass" }); // More informative message
        }
      } else {
        res.send({ message: "!exist" });
      }
    } catch (error) {
      console.error("Error during login:", error); // Log the error for debugging
      res.status(500).send({ message: "An error occurred. Please try again later." }); // Generic error response
    }
  });

app.post("/nonreg",async(req,res)=>{

    //first check is user with that email exist if so dont reg, else reg!
    try {
        const exist = await regNonProfModel.find({email:req.body.email});
        if(exist.length > 0){
            res.send({message:"exist"})
        }else{
            await regNonProfModel.create(req.body)
            res.send({message:"registered"})
        }
    } catch (error) {
        res.send({message:"error"})   
    }
})


app.post("/nonproglog",async(req,res)=>{

    //first check is user with that email exist if so dont reg, else reg!
    try {
        const exist = await regNonProfModel.find({email:req.body.email});
        if(exist.length > 0){
            exist.map(ele=>{
                if(ele.password===req.body.password){
                    res.send({message:"pass"})
                }else{
                    res.send({message:"fail"})
                }
            })
            
        }else{
            res.send({message:"!exist"})
        }
    } catch (error) {
        res.send({message:"error"})
    }
})

app.post("/doccat",async (req,res)=>{
    const cat = req.body.category
    try {
        const D = await RegProfModel.find({category:cat});
        res.send({d:D})
    } catch (error) {
        console.log("THERE IS AN ERROR: ",error)
    }
})


app.post("/profinder",async (req,res)=>{
    try {
        const D = await RegProfModel.find({_id:req.body.Id});
        res.send(D);
    } catch (error) {
        console.log("THERE IS AN ERROR IN THE INDEX.JS EXPRESS IN /profinder: ",error)
    }
})


app.post("/bookappoint",async (req,res)=>{

    const data =  req.body;
    console.log(data);
    data.duration=parseInt(data.duration);
    const str2time = (t)=>{
        const splitted = t.split(":")

        const timeObj = new Date();

        timeObj.setHours(parseInt(splitted[0],10));
        timeObj.setMinutes(parseInt(splitted[1],10));
        return timeObj;
    }
    data.time = str2time(data.time);
    data.startT = str2time(data.startT);
    data.endT = str2time(data.endT);
    

    const getTimes = (present,start,end)=>{
        const temp = new Date(present)
        while(temp < end){
            console.log(temp);
            if(temp.getMinutes()+data.duration*2 > temp.getMinutes()+data.duration){
                temp.setMinutes(temp.getMinutes()+data.duration);
            }else{
                temp.setHours(temp.getHours()+1);
            }
        }
    }
    getTimes(data.time,data.startT,data.endT)

    

    

    // try {
    //     const intialcheck = await appointmentModel({time: data.time});
    //     if(intialcheck > 0){

    //         c
    //     }else{
    //         await appointmentModel.create(data);
    //         res.send({message:"success"})
    //     }
    // } catch (error) {
        
    // }


})


app.post("/lawCat",async(req,res)=>{
    console.log(req.body)
})


// Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
