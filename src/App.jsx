
import { useState } from 'react'
import './App.css'
import { FaTrash } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";



//18.20.00 - time
// function user(){
// return "Sivapraveen",25,true
// }

// console.log(user());

//multi values does not work in jsx
// class is for html will be className in jsx
//for is for html will be htmlFor in jsx
//In jsx we can use js variable using {}
//inline css in jsx using {{}}
//comments in jsx using {/* */}
//events in jsx using onClick, onChange etc
//in jsx we can define style using object
let heading = {
  color: 'red',
  backgroundColor: 'white'
}

//we can style value in object like key:value

// style={{color:'red',backgroundColor:'white'}}

//conditional rendering in jsx using ternary operator
//using condition we can use curly braces {}

let islogged=true
let author ="Sivapraveen"

function App() {

  let[items,setItem]=useState([
    {id:1,name:"HTML & CSS",checked:true},
    {id:2,name:"javascript",checked:false},
    {id:3,name:"react",checked:false}
  ]);

  let [newItem,setNewItem]=useState("");

  let handleChecked =(id)=>{
    let newListItems = items.map((item) =>{
      return item.id ===id ? {...item,checked: !item.checked } :item;
    }
  );
  setItem(newListItems); 
    }
  
  
return (
  <>
    <div className="add-box">
      <input type="text" value={newItem} placeholder='Add New Item' onChange={ (e)=>{setNewItem(e.target.value)} } />
      <IoMdAddCircle role='button' tabIndex={0}/>

    </div>

    <ul className="list">
      {items.map(item => (
        <li key={item.id} className="item">
                <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />

          <label>{item.name}</label>

          <FaTrash role="button" tabIndex={0} className="trash" />
        </li>
      ))}
    </ul>
  </>
);

}

export default App
