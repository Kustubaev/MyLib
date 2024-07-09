import React from 'react'
import cls from './Banner.module.scss'
 
export const Banner = () => {
  return (
    <div className={cls.Banner}>
        <img src="src/img/BannerExample.png" alt="" className={cls.Banner__img}/>
    </div>
  )
}
