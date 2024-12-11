import { EllipseVeryBig } from '../other/other'
import { SectionSlider } from "../lanch/lanch"
import s from './about.module.scss'

const About = () =>{
    return(
      <>
      <section className={s.owner}>
        <EllipseVeryBig />
        <div className={s.owner__text}>
          <h3 className={s.owner__text__title}>
            Здравствуйте! Меня зовут <span style={{color : `var(--color-g)`}}> Кобылинский Кирилл </span>, и я являюсь <span style={{color : `var(--color-g)`}}>основателем GastroChef.</span> 
          </h3>
          <div className={s.owner__text__subtitle}>
            <p>
              Я Мастер Спорта по тяжёлой атлетике, а так же состоял в составе сборной. 
            </p>
            <p>
            У меня высшее образование национального университета физического воспитания 
            и спорта (НФВС), а так же в 
            прошлом я профессиональный фитнес тренер! 
            </p>
            И я хочу Вам рассказать побольше о GastroChef.
          </div>
        </div>
        <div className={s.image}></div>
      </section>
      <section className={s.story}>
        <img src="./paket.png" alt="" />
        <div className={s.story__wrapper}>
          <h3 className={s.owner__text__title}>
            История GastroChef началась более 6-ти лет назад... 
          </h3>
          <div className={s.owner__text__subtitle}>
            <p>
              Долгое время я наблюдал как людям не хватает времени 
              для правильного и здорового питания, какое правильного, просто питания регулярного. 
            </p>
            <p>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, 
              а вечером в силу голода наесться, что плохо сказывалось на их обмене 
              веществ и естественно здоровье. 
            </p>
            <p>
              Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя 
              и я решил открыть доставку еды правильного питания. 
            </p>
            <p>
              Я со своим 17-и летним опытом в спорте 
              и проф. образованием, вместе с диетологом разработали рационы правильного питания 
              с подсчетом калорий (КБЖУ).
            </p>
            Знакомтесь! Команда GastroChef!
          </div>
        </div>
      </section>
      <section className={s.team}></section>
      <section className={s.easy}>
        <div className={s.easy__wrapper}>
          <h3 className={s.owner__text__title}>«GastroChef - легко для занятых»</h3>
          <div className={s.owner__text__subtitle}>
            <p>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, 
              освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность 
              чувствовать себя легко и полным энергии, сил, для новых свершений и побед.
            </p>
            <p>
              Все продукты для приготовления правильного питания закупаются только с сертификатами, 
              а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!
            </p>
              Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или 
              написать мне лично в Инстаграм или Фейсбук.
          </div>
          <h3 className={s.owner__text__title + " " + s.easy__title}>
            С уважением, Кобылинский Кирилл.
          </h3>
          <div className={s.easy__wrapper__links}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            - Я в социальных сетях
          </div>
        </div>
        <img src="./about__food.png" alt="" />
      </section>
      <SectionSlider />
      </>
    )
}

export default About