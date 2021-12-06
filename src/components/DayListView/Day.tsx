import { useState } from 'react';
import Event from './Event';
import './Day.css';

interface Props {
  day: string;
  events: Array<{
    startTime: number;
    endTime: number | null;
    title: string;
    description: string | null;
  }>;
}

export default function Day({day, events}: Props) {

  return (
    <div className="Day">
      <h1>{day}</h1>
      { events.map((value, index) => {
        return (
          <Event event={value}/>
        );
      })}
    </div>
  )
}
