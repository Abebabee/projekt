
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([])
  useEffect(() => {
    fetchData();
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  const fetchData=async()=>{
    const response=await Axios('https://fakestoreapi.com/products');
    setData(response.data)    
  }


  return (
    <div className="App">
      {
        data && data.map(data=>{
          return(
            <div key={data.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <img src = {data.image} alt = 'Hej'></img>
            <p>{data.email}</p>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;