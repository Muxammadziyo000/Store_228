
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const[users, SetUsers] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  .then((data)=> SetUsers(data))
 
  })
 
  return (
    <div className="App">
        <div className="work">
      {users.map((item)=>(
        <div className="cart">
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
     </div>
    </div>
  );
}

export default App;
