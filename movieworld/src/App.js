import logo from './logo.svg';
import './App.css';

function App() {
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
            <li><a href="#">Start</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <section className="content">
        <article className="item-movie">
            <h3 className="title"> Web Desing</h3>
            <p className="description">German</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>

        </article>
        <article className="item-movie">
            <h3 className="title"> Web Desing</h3>
            <p className="description">German</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>

        </article>
        <article className="item-movie">
            <h3 className="title"> Web Desing</h3>
            <p className="description">German</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>

        </article>
        <article className="item-movie">
            <h3 className="title"> Web Desing</h3>
            <p className="description">German</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
        
        </article>
    </section>
    <aside className="side">
        <div className="search">
            <h3 className="title">Search</h3>
            <form>
                <input type="text"/>
                <button>Search</button>
            </form>
        </div>
        <div className="add">
            <h3 className="title">Add Movie</h3>
            <form>
                <input type="text" placeholder="Title"/> 
                <textarea placeholder="Description"></textarea>
                <input type="submit" value="Save"/>
            </form>
        </div>
    </aside>
    <footer className="footer">
        &copy; German Rangel
    </footer>
</div>
  );
}

export default App;
