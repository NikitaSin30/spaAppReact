import './App.css';
// import "./Componets/CardComponent/CardBlock.css";
import Header from './Componets/Header/Header';
import CardBlock from "./Componets/CardComponent/CardBlock"
import Filter from './Componets/Filter/Filter';

function App() {
  return (
    <div className="App">
        <Header></Header>
        
        <Filter></Filter>
        
      <div className='_container'>
         
        <CardBlock></CardBlock>
     
      </div>
      
    </div>
  );
}

export default App;
