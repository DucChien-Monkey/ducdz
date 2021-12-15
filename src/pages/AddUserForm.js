import React, { useState } from 'react'
import '../components/table/table.css'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Tên</label>
			<input type="text" name="name" className='form-control w-25' value={user.name} onChange={handleInputChange} />
			<label>NickName</label>
			<input type="text" name="username" className='form-control w-25' value={user.username} onChange={handleInputChange} />
			<button className='btn btn-outline-success mt-3'>Thêm</button>
		</form>
	)
}

export default AddUserForm