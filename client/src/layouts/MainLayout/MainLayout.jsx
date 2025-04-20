import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import styles from './MainLayout.module.css'

function MainLayout() {
	const currentUrl = window.location.href;
	console.log(currentUrl)
	let colorsArr = []
	for(let i = 0; i<8; i++){
		colorsArr.push(`#${[Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)].map(x => x.toString(16).padStart(2, '0')).join('')}`)
	}
	return (
		<div className={styles['wrapper']}>
			<div className={styles["RedirMenu"]}>
			<span>Навигация:</span>
			<NavLink to={'/'} className={'MainLink'}>Главная</NavLink>
			<NavLink to={'/toDoList'} className={'toDoLink'}>Список дел</NavLink>
			<NavLink to={'/color'} className={'ChColLink'}>Выбор цвета</NavLink>
			</div>
			<Outlet context={{colorsArr}}/>
		</div>
	)
}

export default MainLayout
