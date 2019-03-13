import React from 'react';
import RecordedEventCard from './RecordedEventCard';

export class RecordedEventList extends React.Component {

    constructor(props) {
        super(props);
    }

    getEvents() {
        const eventModel = [
            {
                "title": "How to Deal with Difficult People",
                "date": "October 18, 2018 7:45 p.m.",
                "location": "Livonia Library, NY, USA",
                "tags": "Conflict, Behavior, Empower",
                "author": "Jay Johnson",
                "image": "https://i2.wp.com/adrdaily.com/wp-content/uploads/2018/01/dealing-with-difficult-people.jpg?fit=800%2C420&ssl=1"
            }
        ];

        return eventModel;
    }
    render() {
        const events = this.getEvents();

        return (
            <>
                {events.map((event, index) =>
                    <RecordedEventCard key={index}
                                   title={event.title}
                                   date={event.date}
                                   location={event.location}
                                   tags={event.tags}
                                   author={event.author}
                                   image={event.image}
                    />
                )}
            </>
        );
    }
}