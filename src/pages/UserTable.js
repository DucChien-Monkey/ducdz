import React from "react";
import "../components/table/table.css";

const UserTable = (props) => (
  <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>Tên</th>
          <th>NickName</th>
          <th>Tùy Chọn</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn btn-outline-dark me-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="btn btn-outline-dark"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Hết Khách</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default UserTable;
