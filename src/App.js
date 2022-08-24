import logo from './logo.svg';
import './App.css';
import ApiCall from './Component/ApiCall';
import PokemonApiCall from './PokemonApiCall';
import Ss from './Component/Ss';

function App() {
  return (
    <div className="App">
     {/* <ApiCall></ApiCall> */}
     <PokemonApiCall></PokemonApiCall>
     {/* <Ss></Ss> */}
    </div>
  );
}

export default App;
