import { useState } from 'react'
import s from './other.module.css'

export const EllipseVeryBig = () =>{
  return(
    <div className="ellipse-verybig"></div>
  )
}


export const EllipseBig = () =>{
    return(
      <div className="ellipse-big"></div>
    )
  }
  
export const EllipseLg = ({customClassName}) =>{
    return(
      <div className={customClassName ? customClassName : 'ellipse-lg-container'}>
        <div className="ellipse-border ellipse-lg"></div>
      </div>
    )
  }
  
export const EllipseSm = () =>{
    return(
      <div className='ellipse-sm-container'>
        <div className="ellipse-border ellipse-sm"></div>
      </div>
    )
}

export const EllipseSmP = () =>{
  return(
    <div className='ellipse-sm-container-p'>
      <div className="ellipse-sm-p"></div>
    </div>
  )
}
export const Chat = ({customClassName}) => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className={customClassName ? customClassName : s.chat__container}>
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

export const ZakazBtn = () =>{
  return(
    <button className={s.zakazBtn}>Оформить заказ</button>
  )
}
