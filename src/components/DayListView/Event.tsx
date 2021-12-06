import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Event.css';

interface Event {
  event: {
    startTime: number;
    endTime: number | null;
    title: string;
    description: string | null;
  };
}

export default function Event({event}: Event) {
  
  const [displayDescription,setDisplayDescription] = useState(false);

  const handleChevron = () => {
    setDisplayDescription(!displayDescription);
  }

  return (
    <CSSTransition in={displayDescription} timeout={200} classNames="EventHeight">
    <div className="Event">
      <div className="EventHead">
        <span className="Time">
          {new Date(event.startTime).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}
        </span>
        { event.endTime !== null ? 
          <span className="Time">
            - {new Date(event.endTime).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}
          </span>
        : null }
        <span>{event.title}</span>
        { event.description !== null ?
          <div className="ChevronContainer">
            <CSSTransition in={displayDescription} timeout={200} classNames="Rotate180">
              <img src='chevron.svg' className="Chevron" onClick={() => {handleChevron()}}/>
            </CSSTransition>
          </div>
        : null }
      </div>
      { event.description !== null ?
        <CSSTransition in={displayDescription} timeout={200} classNames="DetailsOpacity" unmountOnExit>
          <span className="Description">{event.description}</span>
        </CSSTransition>
      : null }
      

    </div>
    </CSSTransition>
  )
}
