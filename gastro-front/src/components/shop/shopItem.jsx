import s from './shop.module.scss'
import { DarkSectionLanch_Shop, PriceCounter, SectionSlider } from "../lanch/lanch"
import { BackBtn } from "../blog/blogSpec"
import { Chat } from '../other/other'
import { shopItem } from '../../state'

const ShopCard = ({item}) =>{
    return(
        <div className={s.card}>
            <img src={item.image} alt="" />
            <div className={s.card__wrapper}>        
                <h4 className={s.card__title}>{item.title}</h4>
                <div className={s.card__compound}>{item.compound}</div>
                <div className={s.card__bju}>
                    <div className={s.card__bju__protein}>Белки - {item.protein}</div>
                    <div className={s.card__bju__fats}>Жиры - {item.fats}</div>
                    <div className={s.card__bju__carbh}>Углеводы - {item.carbh}</div>
                    <div className={s.card__bju__ccal}>Ккал - {item.ccal}</div>
                </div>
                <PriceCounter price={item.price}/>
            </div>
        </div>
    )
}

 const ShopItem = () =>{
    return(
        <div>
            <DarkSectionLanch_Shop title={`Полезные конфеты`}/>
            <Chat customClassName={s.shopItem__chat}/>
            <div className="container">
                <div className={s.shopItem__wrapper}>
                    <div className={s.shopItem__wrapper__back__btn}>
                        <BackBtn />
                        Назад
                    </div>
                    <button className="universal__btn">
                        Сделать заказ
                    </button>
                </div>
                <div className={s.shopItem__cards}>
                    {shopItem.map((item, key) => (
                        <ShopCard item={item} />
                    ))}
                </div>
            </div>
            <SectionSlider />
        </div>
    )
}

export default ShopItem