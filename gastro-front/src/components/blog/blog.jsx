import s from './blog.module.scss'
import blog from '../../state'
import { EllipseBig } from '../other/other'

const BlogItem = ({item}) =>{
  return(
    <div className={s.item}>
      <img src={item.image} alt="" />      
      <h4 className={s.item__title}>
        {item.title}
      </h4>
      <div className={s.item__info}>
        <div className={s.item__info__date}>{item.date}</div>
        <button className={s.item__info__btn}>Подробее <i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  )
}

const BlogPagination = () =>{
  return(
    <div className={s.pagination}>
      <button className={s.pagination__prev}><i className="fa-solid fa-angle-left"></i></button>
      {blog.map( (item) => (
        <div className={s.pagination__item}>{item.id + 1}</div>
      ))}      
      <button className={s.pagination__next}><i className="fa-solid fa-angle-right"></i></button>
    </div>
  )
}

const Blog = () =>{
    return(
      <>
        <EllipseBig />
        <div className="container">
          <BlogPagination />
          <div className={s.blog__wrapper}>
            {blog.map((item, key) =>(
              <BlogItem item={item} key={key}/>
            ))}
          </div>
        </div>
      </>
    )
}

export default Blog