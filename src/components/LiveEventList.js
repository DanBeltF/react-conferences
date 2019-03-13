import React from 'react';
import LiveEventCard from './LiveEventCard';

export class LiveEventList extends React.Component {

    constructor(props) {
        super(props);
    }

    getEvents() {
        const eventModel = [
            {
                "title": "Customer Service and Public Relations Masterclass",
                "date": "March 13, 2019 4:30 p.m.",
                "location": "Kuala Lumpur, Malaysia",
                "tags": "Customer, Service, Management",
                "author": "Ryan Scheffeld"
            },
            {
                "title": "Legislative Tools",
                "date": "March 13, 2019 4:00 p.m.",
                "location": "Washington DC, USA",
                "tags": "Law, Politics, Rights",
                "author": "Scott Rivers"
            }
        ];

        return eventModel;
    }
    render() {
        const events = this.getEvents();

        return (
            <>
                {events.map((event, index) =>
                    <LiveEventCard key={index}
                          title={event.title}
                          date={event.date}
                          location={event.location}
                          tags={event.tags}
                          author={event.author}
                    />
                )}
            </>
        );
    }
}