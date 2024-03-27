import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import style from './Header.module.css';

export function Header(){
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/basketball'>Basketball</Link>
                <Link to='/vegetables'>Vegetables</Link>

                {/* <a href="/">Home</a>
                <a href="/basketball">Basketball</a> */}
            </nav>
        </header>
    );
}

