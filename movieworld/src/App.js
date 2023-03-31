import { useState } from 'react';
import './App.css';
import { CreateMov } from './components/CreateMov';
import { ListMov } from './components/ListMov';
import { Search } from './components/Search';

function App() { 
  const [listState, setlistState] = useState([]);

  return (
    <div className="layout">
   
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Movie World</h1>
    </header>
    
    <nav className="nav">
        <ul>
            <li><a href="/#">Start</a></li>
            <li><a href="/#">Movies</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contact</a></li>
        </ul>
    </nav>
    <section className="content">
       <ListMov listState={listState} setlistState={setlistState}/>
    </section>
    <aside className="side">
        <Search listState={listState} setlistState={setlistState}/>
        <CreateMov setlistState={setlistState}/>
    </aside>
    <footer className="footer">
        &copy; German Rangel
    </footer>
</div>
  );
}

export default App;
