import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'
import Main from './pages/MainPage.jsx'
import ToDos from './pages/ToDoList.jsx'
import Color from './pages/Color.jsx'
import './style.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to='main' />
			}, 
			{
				path: '/main',
				element: <Main/>
			},
			{
				path: '/toDoList',
				element: <ToDos/>
			},
			{
				path: '/color',
				element: <Color/>
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
