import { useEffect, useState } from 'react'
import { NavLink, Outlet, useOutletContext } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import styles from './Color.module.css'

const useCustomOutletContext = () => {
	return useOutletContext(); // можно типизировать, если используешь TypeScript
  };


function Color() {
	const {setColLink} = useCustomOutletContext();
	setColLink('ChCol')
	const {colorsArr} = useCustomOutletContext();
	const [color, setColor] = useState('white')
	const ChangeColor = (el) => {
		setColor(el.target.style.background)
	}

	return <div className={styles['container']}>
	<h1 className={styles['title']}>Выбор цвета:</h1>
	<div className={styles["ColorsBlock"]}>
		{colorsArr.map(el => <div onClick={ChangeColor.bind(this)} className={styles['ColorBlock']} style={{background: el}}></div>)}
	</div>
	<span className={styles['CurCol']} style={{color: color}}>Текущий цвет: {color}</span>
	</div>
}

export default Color

