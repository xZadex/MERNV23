import './App.css';
import {Routes,Route} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import Main from './views/Main';
import AddPirate from './views/AddPirate';
import EditPirate from './views/EditPirate';
import ViewPirate from './views/ViewPirate';

function App() {
  const [pirates, setPirates] = useState([])
  const removePirate = id => {
    setPirates(pirates.filter(pirate => pirate._id !== id));
}

  const deleteItem = (id) => {
      axios.delete(`http://localhost:8000/api/pirate/delete/${id}`)
          .then(res => {
              removePirate(id)
          })
          .catch(err => console.error(err));
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/pirates' element={<Main pirates={pirates} setPirates={setPirates} deletePirate={deleteItem}/>}/>
        <Route path='/pirate/new' element={<AddPirate pirates={pirates} setPirates={setPirates}/>}/>
        <Route path='/pirate/:id' element={<ViewPirate pirates={pirates} setPirates={setPirates}/>}/>
        <Route path='/pirate/edit/:id' element={<EditPirate pirates={pirates} setPirates={setPirates}/>}/>
      </Routes>
    </div>
  );
}

export default App;
