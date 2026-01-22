const express = require("express")  


require("./database/db")
const book = require("./model/books")
const app = express()

app.use(express.json())

app.get("/books", async (req, res)=>{
    const books = await book.find()
    return res.status(200).json(book)
})

app.get("/boos/:id",async (req, res)=>{
    const book = await book.findById(req.params.id)
    if (!book) return 
})


app.post("/books", (req,res)=>{
    try{
        const body = req.body
        const book = new book(book)
        await book.save 
        res.status(201).json(book)
    }  catch (err) {
        console.log(err)
        res.status(500).json({
            success:"false",
            message:"book not found"
        })
    }
})

app.


app.listen(5000,()=>{
    console.log("server started at port 5000")
})