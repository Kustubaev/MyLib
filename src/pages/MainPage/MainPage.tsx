import React from "react"
import { Banner } from "../../components/Banner/Banner"
import { Events } from "../../components/Events/Events"
import PageSlider from "../../components/PageSlider/PageSlider"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import cls from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={cls.MainPage}>
      <PageTitle title="Главная страница"/>
      <PageSlider />
      <Banner />
      <PageSlider />
      <Events />
    </div>
  )
}
