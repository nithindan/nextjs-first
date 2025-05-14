import { MongoClient, ObjectId } from "mongodb";
import MeetupDetailsUi from "../../components/meetups/MeetupDetails";

export default function MeetupDetails({meetup}) {

    
    return <>
    <MeetupDetailsUi 
          {...meetup}

    />
    </>
}
export async function getStaticPaths() {

        const client = await MongoClient.connect('mongodb+srv://nithinskariah:lRKXIqyO7qZDv1WW@cluster0.n36ilgt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();
    
        const collection = db.collection('meetups');
    
        const result = await collection.find({}, {_id: 1}).toArray()
        client.close();
        const data = result.map((data) => {
            return {
                    params: {
                        meetupId: data._id.toString()
                    }
                }
            })
        console.log(data)
        return {
            fallback: true,
            paths: data
        }
}
export async function getStaticProps(context) {
    const meetupId = await context.params.meetupId;
   
    const client = await MongoClient.connect('mongodb+srv://nithinskariah:lRKXIqyO7qZDv1WW@cluster0.n36ilgt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const collection = db.collection('meetups');

    const result = await collection.findOne({_id: new ObjectId(meetupId)})
  
    client.close();

    return {
        props: {
            meetup: {
                id : result._id.toString(),
                image : result.image,
                title : result.title,
                address : result.address
            }
        }
    }
}