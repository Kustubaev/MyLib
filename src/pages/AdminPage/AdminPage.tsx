import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import cls from './AdminPage.module.scss'
import { PageTitle } from '../../components/PageTitle/PageTitle'

export const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.Admin }>
      <div className={cls.Admin__title}>
       <PageTitle title="Страница для работы библиотекаря"/>
       <div className={cls.Admin__title__text}>
        На данной странице представлен функционал для работы с резервированием книг, добавлением книг и так далее по списку.
       </div>
      </div>

      <div className={cls.Admin__linksBlock}>
        <div className={cls.Admin__linksBlock__block}>

          <div className={cls.Admin__linksBlock__block__info}>
            <h1 className={cls.Admin__linksBlock__block__info__title}>Оформление резервирование книги</h1>
            <div className={cls.Admin__linksBlock__block__info__text}>
              <div className="">На данной странице вы можете оформить выдачу книгию</div> 
              <ol>
                <li>1. Выбрать книгу из списка</li>
                <li>2. Выбрать читателя из списка. В случае если читатель еще не зарегестрирован в сети, необходимо предоставить ему бланк для заполнения личной информациию и зарегестрировать его в системе нажав на соответствующую кнопку</li>
                <li>3. Провести визуальный осмотр книги. Заполнить поле состояние при выдаче</li>
                <li>4. Оставить комментарий(При необходимости)</li>
              </ol>
            </div>
          </div>
          
          <button
          className={cls.Admin__linksBlock__block__btn}
          onClick={() => {
            navigate("/admin/books/reserve")
          }}
          >
            <span>Зарезервировать книгу</span>
          </button>
        </div>

        <div className={cls.Admin__linksBlock__block}>

          <div className={cls.Admin__linksBlock__block__info}>
            <h1 className={cls.Admin__linksBlock__block__info__title}>Оформление возврата книги</h1>
            <div className={cls.Admin__linksBlock__block__info__text}>
              <div className="">На данной странице вы можете оформить возврат книги</div> 
              <ol>
                <li>1. Выбрать читателя из списка</li>
                <li>2. Выбрать книгу, которую пользователь хочет вернуть</li>
                <li>3. Провести визуальный осмотр книги. Заполнить поле состояние при возврате</li>
                <li>4. Оставить комментарий(При необходимости)</li>
              </ol>
            </div>
          </div>

          <button
          className={cls.Admin__linksBlock__block__btn}
          onClick={() => {
            navigate("/admin/books/return")
          }}
          >
            <span>Оформить возврат книги</span>
          </button>
        </div>

        <div className={cls.Admin__linksBlock__block}>

          <div className={cls.Admin__linksBlock__block__info}>
            <h1 className={cls.Admin__linksBlock__block__info__title}>Добавление книги</h1>
            <div className={cls.Admin__linksBlock__block__info__text}>
              <div className="">Данная страница предоставляет возможность добавления книги в базу</div> 
              <ol>
                <li>1. Ввести все данные из спецификации тиража в соответствующие поля</li>
                <li>2. Добавить обложку книги. Найти ее можно в письме на карпоративной почте по id спецификации тиража</li>
                <li>3. В случае если в списках с авторами и жанрами нет соответствующих данных, необходимо нажать на соответствующие кнопки и добавить их вручную. Данные для добавления необходимой информации находится в спецификации тиража</li>
                <li>4. Добавить книгу, предврательно перепроверив данные.</li>
              </ol>
            </div>
          </div>

          <button
          className={cls.Admin__linksBlock__block__btn}
          onClick={() => {
            navigate("/admin/books/add")
          }}
          >
          <span>Добавить книгу</span>
          </button>
        </div>
      </div>
    </div>
  )
}
