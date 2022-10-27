import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Portfolio from './portfolio/portfolio';
import { useEffect, useState } from 'react';
import ListBox from './list_box/list_box';
import MainPage from './pages/main_page';
import EditPage from './pages/edit_page';
import { Context } from './context';

const App=()=> {
  const[info,setinfo]=useState("")
  const[iden,setiden]=useState(0)
  return (
    <div className="App">

      <Context.Provider value={{
        info,
        setinfo,
        iden,
        setiden
      }}>

        <BrowserRouter>
          <Routes>
            <Route path="/"
            element={<MainPage/>}
            />
            <Route path="/edit"
            element={<EditPage/>}
            />
          

          </Routes>
        </BrowserRouter>
      </Context.Provider>
      
      

    </div>
  );
}

export default App;
