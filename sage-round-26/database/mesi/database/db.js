const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mesi:mesisrael@cluster0.8pc1ywo.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB connected!!"))
.catch((err)=>console.log(err))
