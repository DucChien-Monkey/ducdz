import React, { useState, useEffect } from 'react'
import '../components/table/table.css'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Tên</label>
      <input type="text" name="name" className='form-control w-25' value={user.name} onChange={handleInputChange} />
      <label>NickName</label>
      <input type="text" name="username" className='form-control w-25' value={user.username} onChange={handleInputChange} />
      <button className='btn btn-outline-success mt-3 me-1'>Chỉnh Sửa</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-outline-danger mt-3">
        Hủy Bỏ
      </button>
    </form>
  )
}

export default EditUserForm