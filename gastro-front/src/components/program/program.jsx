import s from './program.module.scss'
import { EllipseVeryBig, ZakazBtn } from '../other/other'
import { slides, advantages, plans, listEat } from '../../state'
import { useState } from 'react'
import { SectionSlider } from '../lanch/lanch'
import { AccordeonForm } from '../about/about'



const Slide = ({ props, currentSlide }) => {
    return (
        <div
            className={s.slide}
            style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
            }}
        >
            <div className={s.slide__info}>
                <h2 className={s.slide__info__title}>{props.title}</h2>
                <p className={s.slide__info__subtitle}>{props.subtitle}</p>
                <div className={s.slide__info__wrapper}>
                    <ZakazBtn text={`Заказать`} customClass={s.slide__info__wrapper__btn} />
                    <div className={s.slide__info__wrapper__text}>
                        {props.text} <br />
                        <span>{props.textG}</span>
                    </div>
                </div>
            </div>
            <div className={s.slide__image}>
                <img src={props.image} alt="" className={s.slide__img} />
            </div>
        </div>
    )
}

const Calculate = () => {

    let plan = plans[0]

    return (
        <section className={s.calculate}>
            <div className={s.calculate__wrapper + ' ' + s.calculate__btns}>
                <button className={s.greenBtn}>
                    Программы питания
                </button>
                <button className={s.greyBtn}>
                    Специальные программы
                </button>
            </div>
            <div className={s.calculate__wrapper}>
                {
                    plans.map((item, key) => (
                        <Plan props={item} key={key} />
                    ))
                }
            </div>
            <div className={s.calculate__wrapper}>
                <div className={s.calculate__order}>
                    <div className={s.calculate__order__description}>
                        <div className={s.calculate__order__description__wrapper}>
                            <h5>{plan.name}</h5>
                            <h6>{plan.ccal} ккал</h6>
                        </div>
                        {plan.description}
                    </div>
                    <div className={s.calculate__order__prices}>
                        {
                            plan.prices.map((item, key) => (
                                <Price plan={item} key={key}/>
                            ))
                        }
                    </div>
                    <ZakazBtn text={`Заказать`}  customClass={s.calculate__order__btn}/>
                </div>
                <div className={s.calculate__calendar}>
                    <div className={s.calculate__calendar__btns}>
                        <button>пн</button>
                        <button>вт</button>
                        <button>ср</button>
                        <button>чт</button>
                        <button>пт</button>
                        <button>сб</button>
                        <button>вс</button>
                    </div>
                    <div className={s.calculate__calendar__list}>
                        {
                            listEat.map((item, key) =>(
                                <ListItem props={item} key={key} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

function Plan({ props }) {
    return (
        <div className={s.plan}>
            <h5>{props.name}</h5>
            <div className={s.plan__ccal}>
                {props.ccal} ккал
            </div>
        </div>
    )
}
function Price({ plan }) {
    return (
        <div className={s.calculate__order__price}>
            <span className={s.calculate__order__price__day}>{plan[0]}</span>
            <span className={s.calculate__order__price__sale}>{plan[1]}</span>
            <span className={s.calculate__order__price__count}>{plan[2]}</span>
        </div>
    )
}

function ListItem({props}){
    return(
        <div className={s.calculate__calendar__list__item}>
            <div className={s.item__time}>
                <h5>{props.name}</h5>
                <h6>{props.time}</h6>
            </div>
            <div className={s.item__compound}>
                {props.compound.map((item,key) =>(
                    <><span key={key}>{item}</span><br /></>
                ))}
            </div>
            <div className={s.item__weight}>
            {props.weight.map((item,key) =>(
                    <><span key={key}>{item}</span><br/></>
                ))}
            </div>
        </div>
    )
}

const Advantage = ({ props }) => {
    return (
        <div className={s.advantage}>
            <img src={props.image} alt="" />
            <div>{props.text}</div>
        </div>
    )
}

const Program = () => {
    const [currentSlide, setCurrentSlide] = useState(0)


    const slidePrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1)
    }

    const slideNext = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1)
        console.log(currentSlide)
    }

    return (
        <div>
            <section className={s.slider}>
                <EllipseVeryBig />
                {slides.map((item, key) => (
                    <Slide
                        props={item}
                        key={key}
                        currentSlide={currentSlide}

                    />
                ))}
            </section>
            <div className={s.controls}>
                <button className={s.controls__prev} onClick={slidePrev}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className={s.controls__next} onClick={slideNext}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <section className={s.advantages}>
                {advantages.map((item, key) => (
                    <Advantage props={item} key={key} />
                ))}
            </section>
            <Calculate />
            <SectionSlider />
            <AccordeonForm />
        </div>
    )
}

export default Program