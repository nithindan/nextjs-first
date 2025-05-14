import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {

    const router = useRouter();

    async function meetupHandler(data) {
        const respose = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(respose.ok) {
            router.push('/');
        }
    }
    
    return <>
    <NewMeetupForm onAddMeetup={meetupHandler}></NewMeetupForm>
    </>
}