import s from './lanch.module.scss'
import { EllipseBig, ZakazBtn, Chat } from '../other/other'
import { shop } from '../../state.js'
import { useState } from 'react'

export const DarkSectionLanch_Shop = ({ title }) => {
    return (
        <div className={s.containerImage}>
            <Chat customClassName={s.lanch__chat} />
            <div className={s.lanch__wrapper}>
                <h2 className={s.lanch__title}>{title}</h2>
                <div className={s.lanch__text}>
                    <p className={s.lanch__text__p}>
                        Представляем сладкую коллекцию полезных конфет. Созданы с любовью и изготовлены
                        из натуральных продуктов без добавления сахара - с заботой о вас и ваших близких!
                    </p>
                    <p className={s.lanch__text__p}>
                        Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
                        Предварительный заказ предполагает доставку на следующий день с 6:00-10:00.
                        Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
                    </p>
                    <p className={s.lanch__text__p}>
                        Заказы "на завтра" принимаются до 11-00 текущего дня.
                    </p>
                    <p className={s.lanch__text__p}>
                        Конфеты доставляются в прозрачных пакетах со стикером. Вы можете заказать
                        подарочный бокс с лентой стоимостью 20 грн
                    </p>
                </div>
            </div>
        </div>
    )
}

export const SectionSlider = () => {
    return (
        <div className={s.containerSlider}>
            <h4 className={s.containerSlider__title}>
                Фото блюд
            </h4>
            <div className={s.slider}>
                <div className={s.slider__item}>
                    <img src="./slider0.png" alt="" />
                </div>
                <div className={s.slider__item}>
                    <img src="./slider1.png" alt="" />
                </div>
                <div className={s.slider__item}>
                    <img src="./slider2.png" alt="" />
                </div>
                <div className={s.slider__item}>
                    <img src="./slider3.png" alt="" />
                </div>
                <div className={s.slider__item}>
                    <img src="./slider4.png" alt="" />
                </div>
                <div className={s.slider__item}>
                    <img src="./slider5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export const PriceCounter = ({price}) => {
    const [counter, setCounter] = useState(1)
    const [isActive, setActive] = useState(true)
    const [portion, setPortion] = useState('порция')

    const handlePortion = (counterCurrent) => {

        if (counterCurrent == 1) {
            setPortion('порция')
        }
        if (counterCurrent > 1 && counterCurrent < 5) {
            setPortion('порции')
        }
        if (counterCurrent == 0 || counterCurrent >= 5) {
            setPortion('порций')
        }
    }

    const counterPluse = () => {
        setCounter(counter + 1)
        handlePortion(counter + 1)
        setActive(true)
    }
    const counterMinuse = () => {

        if (counter == 1) {
            setActive(false)
        } if (counter > 0) {
            setCounter(counter - 1)
            handlePortion(counter - 1)
        }
    }
 
    return (
        <div className={s.card__added}>
            <div className={s.card__btns}>
                <button className={isActive ? s.card__btn : s.card__btn + ' ' + s.card__btn__active} onClick={counterMinuse}>-</button>
                <div className={s.card__counter}>{counter}</div>
                <button className={s.card__btn} onClick={counterPluse}>+</button>
            </div>
            <div className={s.card__added__info}>
                {counter} {portion} \ {price * counter} руб
            </div>
        </div>
    )
}

const LanchCard = ({ card }) => {  
    return (
        <div className={s.card}>
            <img src={card.image} alt="" />
            <div className={s.card__wrapper}>
                <div className={s.card__info}>
                    <div className={s.card__info__wrapper}>
                        <h3 className={s.card__info__title}>{card.title}</h3>
                        <h5 className={s.card__info__wrapper__text}>{card.weight}г</h5>
                        <h5 className={s.card__info__wrapper__text}>{card.ccal}ккал</h5>
                    </div>
                    <div className={s.card__info__compound}>{card.compound.map((item, key) => (
                        <p key={key}>{item}</p>
                    ))}</div>
                </div>
                <PriceCounter price={card.price}/>
            </div>
        </div>
    )
}

const Lanch = () => {
    return (
        <>
            <EllipseBig />
            <DarkSectionLanch_Shop title={`Бизнес-ланчи`} />
            <div className={s.containerCards}>
                <ZakazBtn text={"Заказать онлайн"} />
                <div className={s.cards__wrapper}>
                    {shop.map((item, key) => (
                        <LanchCard card={item} key={key} />
                    ))}
                </div>
            </div>
            <SectionSlider />        
        </>
    )
}

export default Lanch