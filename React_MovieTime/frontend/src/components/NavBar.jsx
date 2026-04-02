import '../css/NavBar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Movie App</h1>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Favorite</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
