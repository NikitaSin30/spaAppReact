import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from "./Componets/CardComponent/CardBlock"
import Filter from './Componets/Filter/Filter';




function App() {
  return (
    <div className="App">
        <Header></Header>
        <Filter ></Filter>
        <CardBlock ></CardBlock> 
      </div>
  );
}

export default App;
