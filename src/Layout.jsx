import {useEffect, useRef, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Layout() {
    const [isOpened, setIsOpened] = useState(false);
    const toggleMenu = () => setIsOpened(!isOpened);
    const navRef = useRef(null);

    useEffect(() => {
        if (!isOpened) return;
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpened(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpened]);

    return (
        <>
            <div className="main">
                {/* Header inside main */}
                <div className="header">
                    <nav className="burger-dropdown" ref={navRef}>
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
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                                <Link to="/habitat" onClick={toggleMenu}>Wohnort</Link>
                                <Link to="/lifestyle" onClick={toggleMenu}>Lebensstil</Link>
                                <Link to="/importance" onClick={toggleMenu}>Fakten</Link>
                                <Link to="/contact" onClick={toggleMenu}>Kontakt</Link>
                            </div>
                        )}
                    </nav>
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
