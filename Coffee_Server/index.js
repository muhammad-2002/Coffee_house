const express = require('express')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors())
app.use(express.json())

//database connection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.iwngqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db("CoffeeDB");
    const coffeeCollection = database.collection("coffeeCollection");
    const userCollection = database.collection("userCollection");
//data get mongodb
app.get('/coffees',async(req,res)=>{
  const cursor = coffeeCollection.find();
  const result = await cursor.toArray()
  res.send(result)

})
//one data get from mongodb
app.get('/coffees/:id',async(req,res)=>{
  const id = req.params.id
  const query = { _id:new ObjectId(id)};
  const result =await coffeeCollection.findOne(query)
  res.send(result)
})
//delete data mongodb
app.delete('/coffees/:id',async(req,res)=>{
  const id =req.params.id
  const query = { _id: new ObjectId(id)};
  const result = await coffeeCollection.deleteOne(query);
  res.send(result)
   
})
//put data 
app.put('/coffees/:id',async(req,res)=>{
  const id = req.params.id
const updateCoffee = req.body
  const filter =  { _id: new ObjectId(id)};
  const options = { upsert: true };
  const updateDoc = {
      $set: {
       
          name:updateCoffee.name,
          photoURL:updateCoffee.photoURL,
          chef:updateCoffee.chef,
          taste:updateCoffee.taste,
          category:updateCoffee.category,
          details:updateCoffee.details,
          supplie:updateCoffee.supplie
       
      },
      
    };
    const result = await coffeeCollection.updateOne(filter, updateDoc, options);
    res.send(result)
})
//data post mongodb
    app.post('/coffees',async(req,res)=>{
      const coffee = req.body
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result)
    })

//user collections

app.post('/user',async(req,res)=>{
  const user = req.body
  const result =await userCollection.insertOne(user)
  res.send(result)
})

app.get('/user',async(req,res)=>{
  const cursor = userCollection.find()
  const result = await cursor.toArray()
  res.send(result)
})
// app.get('/user/:id',async(req,res)=>{
//   const email = req.email
//   const query = {email:email}
//   const result =await userCollection.findOne(query)
//   res.send(result)
// })
app.patch('/user',async(req,res)=>{
  const user = req.body
  const query = {email :user.email}
  const updateDoc = {
  
    $set:{
      lastLoginAt:user.lastLoginAt
    }
  }
  const result = await userCollection.updateOne(query, updateDoc);
  res.send(result)

})
app.delete('/user/:id',async(req,res)=>{
  const id = req.params.id
  const query = {_id:new ObjectId(id)}
  const result =await userCollection.deleteOne(query)
  res.send(result)
})

//data get mongodb

    // Connect the client to the server	(optional starting in v4.7)
  
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);




//listen app
app.listen(port,()=>{
    console.log(`listening prot : ${port}`)
})