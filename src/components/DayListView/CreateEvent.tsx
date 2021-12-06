import './CreateEvent.css';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from '../../hooks';


export default function CreateEvent() {

  const ui = useAppSelector(state => state.ui);

  console.log(ui)

  return (
    <CSSTransition in={ui.display_create} timeout={200} classNames="FadeIn" unmountOnExit>
      <div className="CreateEvent">
        
      </div>
    </CSSTransition>
  )
}
