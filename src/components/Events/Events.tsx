import React from 'react'
import cls from './Events.module.scss'

export const Events = () => {
  return (
    <div className={cls.Event}>
        <img className={cls.Event__img} src="src/img/EventExample1.webp" alt="" />
        <div className={cls.Event__text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore eos possimus suscipit dolore neque eligendi, ut s
            imilique totam, dolorum, facere expedita porro? Inventore corporis corrupti consequuntur error architecto incidunt.
        </div>
    </div>
  )
}
