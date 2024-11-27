import { useParams } from "react-router-dom"
import { blog } from '../../state.js'
import s from './blog.module.scss'
import { EllipseBig } from "../other/other"

const BackBtn = () =>{
    const BackBtnClick = () =>{
        window.history.back()
    }
    return(
        <button className={s.back__btn} onClick={BackBtnClick}><i className="fa-solid fa-angle-left"></i></button>
    )
}

const BlogPage = () =>{
    const id = useParams()
    const item = blog[id.id]
    return(
        <div className="container">
            <EllipseBig />
            <main>
                <img src={item.image} alt="" />
                <div className={s.main__wrapper}>
                    <div className={s.main__title}>
                        <BackBtn />
                        <h3>{item.title}</h3>
                    </div>
                    <div className={s.main__links}>
                        Поделиться:
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + item.image + ')'}}>
                  
                </div>
            </main>
        </div>
    )
}

export default BlogPage