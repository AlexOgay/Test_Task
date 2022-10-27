import './style.css';
import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import ListItem from '../list_item/list_item';
import { Context } from '../context';



const ListBox=()=> {
    const [texts,settexts]=useState([])
    const [data,setdata]=useState("")
    const [url,seturl]=useState([])
    async function Fetch3(id){
      await axios.delete(`http://localhost:5000/text/${id}`)
      seturl(texts)
  
    }
    async function Fetch2(e){
      e.preventDefault()
        axios.post('http://localhost:5000/text',{text:data})
        seturl(texts)
      }
      async function Fetch(){
        const response = await axios.get('http://localhost:5000/text') 
        settexts(response.data)
        console.log(texts)
        console.log(url)
      }
      useEffect(()=>{
        Fetch()
      },[url])
  return (
    <section className='sec'>
        <div className="list_box">
            <div className="inputbox">
                <input 
                value={data}
                type="text" 
                placeholder='Enter the text...'
                onChange={e=>setdata(e.target.value)}
                />
                <button onClick={Fetch2}>Create</button>
            </div>
            <div className="list">

            {texts.map((top)=>
            
            <ListItem text={top.text} id={top._id} Fetchdel={Fetch3} key={top._id}/>
            
            )}
            </div>
        </div>
    </section>
  );
}

export default ListBox;
