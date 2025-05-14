import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const DummyMeetups = [
    {
        id: '1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg',
        title: 'First Meetup',
        address: 'Fortkochi, Kochi',

    },
    {
        id: '2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg',
        title: 'Second Meetup',
        address: 'Fortkochi, Kochi',

    }
]
export default function Home(props) {

    return <>
    <Head>
        <title>React meetup</title>
    </Head>
    <MeetupList meetups={props.meetups}/>
    </>
}

// export async function getServerSideProps(context) {
//     console.log('here')
//     return {
//      props: { 
//         meetups: DummyMeetups
//      }
//     }
// }
export async function getStaticProps() {
    // console.log('here')

    const client = await MongoClient.connect('mongodb+srv://nithinskariah:lRKXIqyO7qZDv1WW@cluster0.n36ilgt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const collection = db.collection('meetups');

    const result = await collection.find().toArray();

    const data = result.map((data) => {
        return {
            title: data.title,
            image: data.image,
            address: data.address,
            id: data._id.toString()
        }
    })
    client.close();
    return {
     props: { 
        meetups: data
     },
     revalidate: 1
    }
}