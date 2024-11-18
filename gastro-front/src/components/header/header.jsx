import s from './header.module.css'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

const Header = () =>{
    return(
        <header className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.header__logo}>
                    <img src="./logo.webp" alt="" />
                    healthy ration
                </div>
                <div className={s.header__menu}>
                    <div className={s.header__menu__item}>
                       <Link to="/Program">Программы питания</Link>
                    </div>
                    <div className={s.header__menu__item}>
                       <Link to="/Lanch">Бизнес-ланчи</Link>
                    </div>
                    <div className={s.header__menu__item}>
                       <Link to="/Shop">Gastro shop</Link>
                    </div>
                    <div className={s.header__menu__item}>
                       <Link to="/About">О нас</Link>
                    </div>
                    <div className={s.header__menu__item}>
                       <Link to="/Blog">Блог</Link>
                    </div>
                </div>
            </div>
            <div className={s.header__phone}>+7 952(812)14-88</div>
        </header>
    )
}

export default Header;