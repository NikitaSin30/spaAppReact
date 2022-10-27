import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Componets/Header/Header';
import CardBlock from "./Componets/CardComponent/CardBlock"
import Filter from './Componets/Filter/Filter';
import store from './Redux/store'
import {connect} from "react-redux"

function App() {
 
  return (
    <div className="App">
        <Header></Header>
        <Filter></Filter>
        <CardBlock store={store}></CardBlock> 
      </div>
  );
}

export default App;
