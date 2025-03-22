export const renderAllUsers = (users, renderTo) => {
	renderTo.innerHTML = ''
	users.forEach(user => {
		renderTo.insertAdjacentHTML(`beforeend`, `<li>${user.name}</li>`)
	})
}

export const renderUser = (user, renderTo) => {
	renderTo.insertAdjacentHTML(`beforeend`, `<p>${user.name}</p>`)
}
