import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import cors from 'cors'
import mongoose from 'mongoose'
import { errorHandler } from './middlewares/errorHandler.js'
import dotenv from 'dotenv'

dotenv.config();

// Initialise the app
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // for Cookie-based flow
}));

app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Connect the Mongoose connection
mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log('\n Database initialising...')
    console.log(" Database connected!\n")
}).catch (err => {
    console.log(err)
})


// Route connection will be here
app.get('/', (req, res) => {
    res.send("<h2>hellow</h2>")
    console.log("hellow")
})

// Global error handler
app.use(errorHandler);

// Run ther server 
app.listen(process.env.PORT || 9000, (() => {
    console.log(`\n Server loading...`)
    console.log(` Server running on http://localhost:${process.env.PORT}`)
}))
