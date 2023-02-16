import './App.css';
import ButtonList from './components/ButtonList/ButtonList';
import Checkbox from './components/Checkbox/Checkbox';
import FormReview from './components/FormReview/FormReview';
import HideAndSeek from './components/HideAndSeek/HideAndSeek';
import Increment from './components/Increment/Increment';
import IncrementAndDecrement from './components/IncrementAndDecrement/IncrementAndDecrement';
import DataList from './components/ReactDataMassaging/DataList';

const colors = ["blue", "red", "yellow"];

function App() {
  return (
    <div className="App">
      <span>task 6.1 increment</span>
      <br />
      <Increment />
      <hr />
      <span>task 6.2 hide and seek</span>
      <br />
      <HideAndSeek />
      <hr />
      <span>task 6.3 increment and decrement</span>
      <br />
      <IncrementAndDecrement />
      <hr />
      <span>task 7.1 child to father colors</span>
      <br />
      <ButtonList colorsList={colors} />
      <hr />
      <span>task 7.2 checkbox</span>
      <br />
      <Checkbox />
      <hr />
      <span>task 7.3 form review</span>
      <br />
      <FormReview />
      <hr />
      <span>task 7.1 react data massaging</span>
      <br />
      <DataList />
    </div>
  );
}

export default App;
