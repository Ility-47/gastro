import s from './footer.module.css'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className={s.footer__wrapper}>
            <div className={s.footer__menu}>
                <Link to="/Program">Программы питания</Link>
                <Link to="/Lanch">Бизнес-ланчи</Link>
                <Link to="/Shop">Gastro shop</Link>
                <Link to="/About">О нас</Link>
                <Link to="/Blog">Блог</Link>
            </div>
            <div className={s.footer__logo}>
                <img src="./logo.webp" alt="" />
                сервис здорового питания
            </div>
            <div className={s.footer__contacts}>
                <h5>Условия<br/> сотрудничества</h5>
                <h5>FAQ</h5>
                <div className={s.footer__contacts__links}>
                    <div className={s.footer__contacts__links__item}>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className={s.footer__contacts__links__item}>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className={s.footer__contacts__links__item}>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className={s.footer__contacts__links__item}>
                        <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className={s.footer__contacts__phone}>
                    +7 952(812)14-88
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer