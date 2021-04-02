import logo from './logo.svg';
import './App.css';
import Counter from '../src/components/Counter';
import Todolist from './components/Todolist';
import PhoneBook from './components/PhoneBook';
import PhoneBookCustomHook from './components/PhoneBookCustomHook';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todolist /> */}
      {/* <PhoneBook /> */}
      <PhoneBookCustomHook />
    </div>
  );
}

export default App;
