import s from './shop.module.scss'
import { Chat, EllipseLg, EllipseBig, EllipseSm  } from '../other/other'
import { Link } from 'react-router-dom'
const ShopItem = ({name, picture}) =>{
  return(
      <div className={s.item}>
        <img src={picture} alt="" />
        <div className={s.item__info}>
          <h3 className={s.item__info__title}>{name}</h3>
          
          <Link to={`/ShopItem`}>Ассортимент<i className="fa-solid fa-angle-right"></i></Link>
        </div>
      </div>
  )
}


const Shop = () =>{
  let picture1 = "./sweet.webp",
      picture2 = "./granala.webp"
    return(
        <div className='container'>
          <div className={s.wrapper}>
              <EllipseBig/>
              <EllipseLg/>
              <EllipseSm/> 
              <Chat />
              <ShopItem name={"Полезные конфеты"} picture={picture1}/>
              <ShopItem name={"Гранала"} picture={picture1}/>
          </div>
        </div>
    )
}

export default Shop