import React,{useState, useEffect } from 'react';
import './App.css';
import {getdata} from "./fetch.js"
function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [data,setdata]=useState('');
 const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
 console.log('Selected date:', selectedDate);
  useEffect (()=>{
    // getdata(selectedDate).then((post)=>console.log(post))
    getdata(selectedDate).then((dataon)=>setdata(dataon))
  },[selectedDate]);
  // console.log(data)
  return (
    <div className="App" style={{padding:'20px'}}>
      Select a Date:
      <input type='date' value={selectedDate}
        onChange={handleDateChange}></input>
      
         <div style={{padding:'10px' }}>{data.title}</div>
         <div style={{padding:'10px' }}>{data.copyright}</div>
         <div style={{padding:'10px' }}>{data.date}</div>
         <img src={data.url} alt="Image" style={{ width: '300px', height: '300px' }} />
        
    </div>
  );
}

export default App;
