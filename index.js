const connectToMongo = require('./databas');
const express = require('express')
var cors = require('cors') 
const path=require("path")
// require("dotenv").config();

connectToMongo();
// const corsOptions = {
//   origin: "https://http://localhost:3000" // frontend URI (ReactJS)
// }
const app = express()
const port =5000
// const port = process.env.PORT || 5000

// app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/data', require('./Routes/data'))
app.use('/api/auth', require('./Routes/Authdata'))
app.use('/api/mt', require('./Routes/Tripdata'))
app.use('/product', require('./Routes/ProductRouter'))

app.get('/',(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"client","build")));
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})


//https://tasktally.onrender.com