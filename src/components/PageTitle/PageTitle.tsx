import React from 'react'
import cls from './PageTitle.module.scss'


export const PageTitle = ({ title }) => {
  return (
    <div className={cls.title}>{title}</div>
  )
}