import '../App.css';
import axios from "axios";
import { useContext, useState } from 'react';
import { Context } from '../context';
import { Link } from "react-router-dom";

const EditPage=()=> {
  const {info,setinfo,iden}=useContext(Context)
  async function Fetch4(iden){
    await axios.put(`http://localhost:5000/text/${iden}`,{text:info})

  }
  return (
      
    <section className='sec'>
            <div className="list_box">
                <div className="inputbox">
                    <input 
                    value={info}
                    type="text" 
                    placeholder='Enter the text...'
                    onChange={e=>setinfo(e.target.value)}
                    />
                    <Link to="/"><button onClick={()=>Fetch4(iden)}>Change</button></Link>
                </div>

            </div>
            
    </section>
  );
}

export default EditPage;
