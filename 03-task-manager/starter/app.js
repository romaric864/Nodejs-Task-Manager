const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//MIDDLEWARE
app.use(express.json());

//HOMEPAGE
app.get('/', (req,res) => {
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks);

//SETUP PORT
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server listening on port ${port}...`)
        });        
    } catch (error) {
        console.log(error); 
    }
}

start()


