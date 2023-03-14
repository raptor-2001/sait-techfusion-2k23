import React from 'react'
import eventCard from '../js/data'
import EventCard from './EventCard'

const Event = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {eventCard.map(event => (
        <EventCard key={event.id} img={event.image} title={event.title} description={event.description} link={event.link}/>
      ))}
    </div>
  )
}

export default Event