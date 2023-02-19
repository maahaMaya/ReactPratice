import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import Counter from './Review/Counter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <br/>
      <HookCounterThree/>
      <br/>
      <HookCounterFour/> */}
      <Counter/>
    </div>
  );
}

export default App;
