class UserRequests {
	static async getUsers(url) {
		const getData = async url => {
			const res = await fetch(url)
			const json = await res.json()
			return json
		}

		try {
			const data = await getData(url)
			return data
		} catch (error) {
			console.log(`Произошла ошибка при получении всех пользователей, ${error.message}`)
		}
	}

	static async getUser(url) {
		const getData = async url => {
			const res = await fetch(url)
			const json = await res.json()
			return json
		}

		try {
			const data = await getData(url)
			return data
		} catch (error) {
			console.log(`Произошла ошибка при получении пользователя по id, ${error.message}`)
		}
	}

	static async addUser(url, obj) {
		const postData = async (url, obj) => {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(obj),
				headers: { 'Content-type': 'application/json; charset=UTF-8' }
			})
			const json = await res.json()
			return json
		}

		try {
			const data = await postData(url, obj)
			return data
		} catch (error) {
			console.log(`Произошла ошибка в postData, ${error.message}`)
		}
	}
}

export default UserRequests
