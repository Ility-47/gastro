import { useParams } from "react-router-dom"
import { blog } from '../../state.js'
import s from './blog.module.scss'
import { EllipseBig, EllipseLg, EllipseSmP, Chat } from "../other/other"
import { BlogItem } from "./blog.jsx"
export const BackBtn = () => {
    const BackBtnClick = () => {
        window.history.back()
    }
    return (
        <button className={s.back__btn} onClick={BackBtnClick}><i className="fa-solid fa-angle-left"></i></button>
    )
}

const BlogPage = () => {
    const id = useParams()
    const item = blog[id.id]
    return (
        <div style={{ height: 100 + '%', position: 'relative' }}>
            <EllipseBig />
            <EllipseLg customClassName={s.blog__ellipse__lg}/>
            <EllipseSmP />
            <Chat />
            <div className="container" >

                <main>
                    <img src={item.images[0]} alt="" />
                    <div className={s.main__wrapper}>
                        <div className={s.main__title}>
                            <BackBtn />
                            <div>
                                <h3>{item.title}</h3>
                                <h5 className={s.main__title__date}>{item.date}</h5>
                            </div>
                        </div>
                        <div className={s.main__links}>
                            Поделиться:
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <article>
                        <p className={s.custom__p}>
                            Привычка — это неосознанное, то, что мы делаем на автомате. Например, это такие обыденные вещи, как чистка зубов утром или пристегнуться, садясь в автомобиль.
                        </p>
                        <p className={s.custom__p}>
                            Большинству из этих привычек мы не отдаем отчета. Именно этот бессознательный фактор и является той сложностью, которая не позволяет вам легко и просто изменить эту самую привычку в итоге.
                        </p>
                        <p className={s.custom__p}>
                            В такой момент ваш мозг не думает, а стоит ли ему это делать. Он просто берет и делает. Пищевые привычки действуют так же.
                        </p>
                        <img src={item.images[1]} alt="" />
                        <p className={s.custom__p}>
                            Их нужно перевести на автомат. И если вы считаете, что для этого нужна невероятная сила воли или сверхстрогий самоконтроль, то вовсе нет. У меня для вас есть несколько простых постепенных шагов, которые помогут вам сделать ваши пищевые привычки осознанными и подконтрольными.
                        </p>
                        <p className={s.custom__p}>
                            Первое, с чего стоит начать  — это прекратите покупать вредные продукты. Запомните: то, чего нет, того и не съешь. В свою очередь, ставим на стол на самое видное место тарелочку с ломтиками моркови, сухофруктами и орешками.
                        </p>
                        <p className={s.custom__p}>
                            Второе  — это создаем себе препятствия на пути к вредностям — ходите домой другой дорогой, проходите мимо отдела сладостей или офисной кухни, если ощущаете манящий запах выпечки — просто понюхайте запястье, на которое утром нанесли духи.
                        </p>
                        <p className={s.custom__p}>
                            Третье и очень важное правило — полезные продукты в вашей квартире и на работе должны стать доступнее и заметнее. Например, яблоко или морковь вместо печенья и конфет на столе, сделайте заготовку из нарезанных листьев салатов в холодильнике, заранее очистите овощей и нарежьте ломтиками.
                        </p>
                        <img src={item.images[2]} alt="" />
                        <p className={s.custom__p}>
                            Четвертое — используйте посуду для еды меньшего размера. Да-да, придется отказаться от любимых блюдец на пол-стола, но оно того стоит. Также не берите добавки. Ведь многие исследования доказывают, что мы делаем выводы о своем насыщении, основываясь не на своих чувствах сытости, а видя, что тарелка уже пуста.
                        </p>
                        <p className={s.custom__p}>
                            Пятое — всегда начинайте еду с овощей.
                        </p>
                        <p className={s.custom__p}>
                            Очень рекомендую менять привычки не только с себя, а сразу с семьей. Поддержка близких очень важна будет для вас.
                        </p>
                        <p className={s.custom__p}>
                            И, конечно же, для смены пищевых привычек очень рекомендуем попробовать рационы здорового питания GastroChef.
                        </p>
                    </article>
                    <div className={s.main__wrapper + ' ' + s.main__wrapper__bottom}>
                        <div className={s.main__wrapper__back__btn}>
                            <BackBtn />
                            Назад
                        </div>
                        <button className="universal__btn">Программы питания</button>
                        <div className={s.main__links}>
                            Поделиться:
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </main>
                <section className={s.maybe}>
                    <h4 className={s.maybe__title}>Может заинтересовать</h4>
                    <div className={s.maybe__wrapper}>
                        {blog.map((element, key) => {
                            if(element.id < 3) {
                                return <BlogItem item={element} key={key} />
                                
                            }
                        })}
                    </div>
                </section>
            </div>
        </div>

    )
}

export default BlogPage