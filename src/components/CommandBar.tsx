import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks';
import './CommandBar.css';
import { uiActions } from '../store/index'

export default function CommandBar() {

  const dispatch = useDispatch();

  const toggleCreate = () => {
    dispatch(uiActions.toggleCreate())
  };

  return (
    <div className="CommandBar">
      <div className="CommandButton" onClick={toggleCreate}><div><img src='plus.svg' className="Chevron"/></div></div>
      <div className="CommandButton"><div><img src='plus.svg' className="Chevron"/></div></div>
    </div>
  )
}
