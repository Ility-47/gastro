import s from './shop.module.css'
import Chat from '../other/other'

const EllipseBig = () =>{
  return(
    <div className="ellipse-big"></div>
  )
}

const EllipseLg = () =>{
  return(
    <div className='ellipse-lg-container'>
      <div className="ellipse-border ellipse-lg"></div>
    </div>
  )
}

const EllipseSm = () =>{
  return(
    <div className='ellipse-sm-container'>
      <div className="ellipse-border ellipse-sm"></div>
    </div>
  )
}

const ShopItem = ({name, picture}) =>{
  return(
      <div className={s.item}>
        <img src={picture} alt="" />
        <div className={s.item__info}>
          <h3 className={s.item__info__title}>{name}</h3>
          <a href="">Ассортимент<i className="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
  )
}


const Shop = () =>{
  let picture1 = "./sweet.webp",
      picture2 = "./granala.webp"
    return(
        <div className={s.wrapper}>
            <EllipseBig/>
            <EllipseLg/>
            <EllipseSm/> 
            <Chat />
            <ShopItem name={"Полезные конфеты"} picture={picture1}/>
            <ShopItem name={"Гранала"} picture={picture1}/>
        </div>
    )
}

export default Shop