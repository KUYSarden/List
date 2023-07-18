import React, {useState} from 'react';
import './App.css';

function App() {


const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);


function addItem() {

  if (!newItem) {
    alert("Enter an Item")
    return;
  }




  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  };

  setItems(oldList => [...oldList, item]);

  setNewItem("");



  console.log(item)

}

function deleteItem(id) {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}


  return (
    <div className="App">
       <div className='glass'>
       <h1>To DO List</h1>

<input type='text'
placeholder='Add an item...'
value={newItem}
onChange={e => setNewItem(e.target.value)}></input>

<button onClick={() => addItem()}>Add</button>


<ul>
 {items.map(item => {
  return (
    <li key={item.id}>
      {item.value}
      <button onClick={() => deleteItem(item.id)}>x</button>

    </li>
  )
 })}
</ul>
       </div>
    </div>
  );
}

export default App;
