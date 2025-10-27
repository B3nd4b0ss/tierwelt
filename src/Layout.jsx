import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Layout() {
    const [isOpened, setIsOpened] = useState(false);
    const toggleMenu = () => setIsOpened(!isOpened);

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(!isClicked);

    return (
        <>
            <div className="main">
                {/* Header inside main */}
                <div className="header">
                    <nav className="burger-dropdown">
                        <button
                            onClick={toggleMenu}
                            className={`burgerbtn ${isOpened ? "open" : ""}`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {isOpened && (
                            <div className="burger-menu">
                                <Link to="/">Home</Link>
                                <Link to="/habitat">Habitat</Link>
                                <Link to="/lifestyle">Lifestyle</Link>
                                <Link to="/importance">Importance</Link>
                                <Link to="/contact">Kontakt</Link>
                            </div>
                        )}
                    </nav>
                    <div>Animal</div>
                    <div>
                        {isClicked && <input type="text" placeholder="Search"/>}
                        <SearchIcon className="searchicon" onClick={handleClick}/>
                    </div>
                </div>

                {/* Outlet 1 */}
                <div className="outlet1">
                    <Outlet context={{type: 'outlet1'}}/>
                </div>
            </div>

            <div className="outlet2">
                <Outlet context={{type: 'outlet2'}}/>
            </div>
        </>
    );
}

export default Layout;
