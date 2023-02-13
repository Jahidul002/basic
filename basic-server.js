const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()
app.use(cors());
app.use(express.json());

// console.log(process.env.ACCESS_TOKEN_SECRET);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d02hkdv.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
function run() {
    try {
        const dataCollection = client.db('').collection('')
    }
    finally {

    }
}
run()


app.get('/', (req, res) => {
    res.send('testing server is running')
})

app.listen(port, () => {
    console.log(`testing server running on ${port}`);
})