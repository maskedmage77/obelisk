import './App.css';
import CommandBar from './components/CommandBar';
import CreateEvent from './components/DayListView/CreateEvent';
import Day from './components/DayListView/Day';

function App() {

  let exampleDate = new Date('December 3, 2021 08:50:00');
  console.log(exampleDate.getTime());
  const exampleEvents = [
    {
      startTime: 1638536400000,
      endTime: null,
      title: 'Wakeup',
      description: 'This a generic description of an event.',
      repeat: {
        daily: false,
        weekly: false,
        biWeekly: false,
        monthly: false,
        yearly: false
      }
    },
    {
      startTime: 1638536400000,
      endTime: 1638538200000,
      title: 'Get Ready',
      description: 'This a generic description of an event. This will be a multiline description. This a generic description of an event. This will be a multiline description.',
      repeat: {
        daily: false,
        weekly: false,
        biWeekly: false,
        monthly: false,
        yearly: false
      }   
    },
    {
      startTime: 1638539400000,
      endTime: null,
      title: 'Drive to work',
      description: null,
      repeat: {
        daily: false,
        weekly: false,
        biWeekly: false,
        monthly: false,
        yearly: false
      }
    },
  ]

  

  return (
    <div className="App">
      <div className="ContentWrapper">
        <CommandBar />
        <CreateEvent />
        <Day day={'Today'} events={exampleEvents}/>
      </div>
    </div>
  );
}

export default App;
