import SearchBar from "../SearchBar/SearchBar";
import {Link , NavLink} from 'react-router-dom';
import style from './Nav.module.css'


const Nav = ({onSearch}) => {
    return (

        <nav className={style.container}>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button >
                <Link to='/home'>HOME</Link>
            </button>
           
            <NavLink className={style.logOut} to='/home'>LOGOUT</NavLink>
            <NavLink className={style.logOut} to='/favorite'>FAVORITE</NavLink>
        </nav>
    )
}
export default Nav;