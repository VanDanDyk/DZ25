//import styles from './Test.module.css'
import { useState } from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router'
import styles from './ToDoList.module.css'

const useCustomOutletContext = () => {
	return useOutletContext(); // можно типизировать, если используешь TypeScript
  };

function ToDoList() {
	const {setColLink} = useCustomOutletContext();
    setColLink('ToDo')
	const [ ToDos, setToDoS ] = useState([])

	const AddToDo= () => {
		ToDos.push(`Задача №${ToDos.length+1}`)
		setToDoS([...ToDos])
	}
	const DelToDo = (el) => {
		if(`${el.target}` == '[object HTMLLIElement]'){
		el.target.remove()
		}
	}

	return <div className={styles['container']}>
		<h1 className={styles['title']}>Список дел:</h1>
		<ul className={styles['ToDoList']}>
		{ToDos.map((el,i) => {return <li onClick={DelToDo.bind(this)} className={styles['ToDo']}><input type='checkbox'/><label>{el}</label></li>})}
		</ul>
		<input onClick={AddToDo} className={styles['AddButton']} type='button' value='+Добавить новую задачу'/>
		</div>
}

export default ToDoList
