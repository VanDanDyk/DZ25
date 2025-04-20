import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import styles from './MainPage.module.css'

function Main() {

	return <div className={styles['container']}>
				<h1 className={styles['title']}>Главная:</h1>
                <div className={styles["LinksBlock"]}>
                    <NavLink to='/toDoList'>
                        <span>Список дел</span>
                        <div className={styles["listIcon"]}>V</div>
                    </NavLink>
                    <NavLink to='/color'>
                        <span>Выбор цвета</span>
                        <div className={styles["colorIcon"]}></div>
                    </NavLink>
                </div>
			</div>
}

export default Main
