import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import styles from './MainLayout.module.css'

function MainLayout() {
	const [ColorLink , setColLink] = useState()
	let LinksColors = [((ColorLink == 'Main') ? ('#A5D8FF') : ('white')),((ColorLink == 'ToDo') ? ('#A5D8FF') : ('white')),((ColorLink == 'ChCol') ? ('#A5D8FF') : ('white'))]
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
			<NavLink to={'/'} className={'MainLink'} style={{background: (LinksColors[0])}}>Главная</NavLink>
			<NavLink to={'/toDoList'} className={'toDoLink'} style={{background: (LinksColors[1])}}>Список дел</NavLink>
			<NavLink to={'/color'} className={'ChColLink'} style={{background: (LinksColors[2])}}>Выбор цвета</NavLink>
			</div>
			<Outlet context={{setColLink,colorsArr}}/>
		</div>
	)
}

export default MainLayout
