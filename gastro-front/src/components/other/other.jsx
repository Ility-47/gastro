import { useState } from 'react'
import s from './other.module.css'

const Chat = () => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className={s.chat__container}>
            <div className={s.chat__wrapper}>
                <div className={s.chat__message}>
                   <span className={s.text__green}>Мы онлайн!</span> Консультация
                    и -30% в чате. <span className={s.text__green}>Без звонка!</span>
                </div>
                <div className={s.chat__btn}>
                    <div className={s.chat__btn__counter}>{counter}</div>
                    <button onClick={handleCounter}><i className="fa-solid fa-comment-dots"></i></button>
                </div>
                <a href='#' className={s.chat__wu}>
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href='#' className={s.chat__tg}>
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div>
        </div>
    )
}

export default Chat