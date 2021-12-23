import './App.css';
import './components/InputField/InputField'
import { InputField } from './components/InputField/InputField';
import { SelectField } from './components/SelectField/SelectField';
import { InputNumberField } from './components/InputNumberField/InputNumberField';

function App() {
  return (
    <div className="App">
      <h1>
        HOC
      </h1>
      <div>
        <InputField />
        <InputNumberField />
        <SelectField />
      </div>
    </div>
  );
}

export default App;
