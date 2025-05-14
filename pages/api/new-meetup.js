import { MongoClient } from 'mongodb'

export default async function handler(req, res) {

    if(req.method === 'POST') {
        const data = req.body;

        const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://nithinskariah:lRKXIqyO7qZDv1WW@cluster0.n36ilgt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();

        const collection = db.collection('meetups');

        const result = await collection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({message: 'Inserted successfully'})
    }

}