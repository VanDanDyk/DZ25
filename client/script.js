import { SERVER_URL } from './api.js'
import { renderAllUsers, renderUser } from './utils/renderData.js'
import UserRequests from './utils/userRequests.js'

const getAllBtn = document.querySelector('.c1-button')
const getUserByIdBtn = document.querySelector('.c2-button')
const c1Container = document.querySelector('.c1-container')
const inputUserId = document.querySelector('#inputUserId')
const c2Container = document.querySelector('.c2-container')

getAllBtn.addEventListener('click', async () => {
	const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	renderAllUsers(users, c1Container)
})

getUserByIdBtn.addEventListener('click', async () => {
	const id = inputUserId.value
	const user = await UserRequests.getUser(`${SERVER_URL}/api/getUser/${id}`)
	renderUser(user, c2Container)
})
