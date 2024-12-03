import s from './blog.module.scss'
import { Chat, EllipseBig, EllipseLg, EllipseSmP } from '../other/other'
import { blog } from '../../state.js'
import { Link } from 'react-router-dom'

export const BlogItem = ({item}) =>{
  return(
    <div className={s.item}>
      <img src={item.image} alt="" />      
      <div className={s.item__wrapper}>
        <h4 className={s.item__title}>
          {item.title}
        </h4>
        <div className={s.item__info}>
          <div className={s.item__info__date}>{item.date}</div>
          <Link to={`/BlogPage/${item.id}`} className={s.item__info__btn}>Подробее <i className="fa-solid fa-angle-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

const BlogPagination = () =>{
  return(
    <div className={s.pagination}>
      <button className={s.pagination__prev}><i className="fa-solid fa-angle-left"></i></button>
        <div className={s.pagination__item}>1</div>       
      <button className={s.pagination__next}><i className="fa-solid fa-angle-right"></i></button>
    </div>
  )
}

const Blog = () =>{
    return(
      //для корректного отображения кругов 
      <div style={{height:100 + '%', position: 'relative'}}> 
        <EllipseSmP />
        <EllipseLg />
        <EllipseBig />
        <Chat />
        <div className="container blog__container">
            <BlogPagination />
            <div className={s.blog__wrapper}>
              {blog.map((item, key) =>(
                <BlogItem item={item} key={key}/>
              ))}
            </div>
            <BlogPagination />
        </div>
      </div>
    )
}

export default Blog