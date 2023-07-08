// Styles
import './App.css';
import CountdownTimer from './components/countdown-timer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer startingMinutes={5} />
    </div>
  );
}

export default App;
