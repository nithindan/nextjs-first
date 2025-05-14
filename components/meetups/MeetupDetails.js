
import classes from './MeetupDetails.module.css'

export default function MeetupDetailsUi(props) {
    return <section className={classes.section}>
        <img src={props.image} alt="meetup image"/>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
}