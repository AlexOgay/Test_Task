import './style.css';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { Context } from '../context';

const ListItem=({text, id, Fetchdel})=> {

    const {setinfo,setiden}=useContext(Context)
    const Set=(text,id)=>{
      setinfo(text)
      setiden(id)
    }
  return (
    <div className="box">
        <p>{text}</p>
        <div className="button_box">
            <Link to="/edit"><button onClick={()=>Set(text,id)}>Change</button></Link>
            <button onClick={()=>Fetchdel(id)}>Delete</button>
        </div>
    </div>
  );
}

export default ListItem;
