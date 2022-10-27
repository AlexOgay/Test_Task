import '../App.css';
import axios from "axios";

import { useEffect, useState } from 'react';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import ListBox from '../list_box/list_box';
import Portfolio from '../portfolio/portfolio';


const MainPage=()=> {
  return (
    <div className="App">

      
        <Portfolio/>
        <ListBox/>
      

    </div>
  );
}

export default MainPage;
