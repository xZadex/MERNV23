import './App.css';
import AllAuthors from './views/AllAuthors';
import Main from './views/Main';
import SingleAuthor from './views/SingleAuthor';
import Nav from './components/Nav';
import EditAuthor from './views/EditAuthor';
import Home from './views/Home';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/authors/new" element={<Main/>}/>
          <Route path="/authors" element={<AllAuthors/>}/>
          <Route path="/authors/:id" element={<SingleAuthor/>}/>
          <Route path="/authors/:id/edit" element={<EditAuthor/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
