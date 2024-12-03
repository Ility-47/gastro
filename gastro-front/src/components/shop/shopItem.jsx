import s from './shop.module.scss'
import { DarkSectionLanch_Shop, SectionSlider } from "../lanch/lanch"
import { BackBtn } from "../blog/blogSpec"
import { Chat } from '../other/other'

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
                    {}
                </div>
            </div>
            <SectionSlider />
        </div>
    )
}

export default ShopItem