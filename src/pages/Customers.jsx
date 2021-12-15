import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";
// import customersList from "../assets/JsonData/customers-list.json";
import '../components/table/table.css'

const Customers = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="row">
      <h2 className="page-header">Khách Hàng</h2>
      <div className="flex-row ">
        <div className="flex-large row">
          {editing ? (
            <>
              <h2 className="col-4">Sửa Khách Hàng</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2  className="col-4">Thêm Khách Hàng</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>Danh Sách</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
