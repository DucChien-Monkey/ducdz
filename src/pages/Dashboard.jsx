import React from "react";
import StatusCard from "../components/status-card/StatusCard";
import statusCards from "../assets/JsonData/status-card-data.json";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

import { Link } from "react-router-dom";

const topCustomers = {
  head: ["Tên", "Tổng Đơn", "Tổng Trả"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "15,870 VND",
    },
    {
      username: "frank iva",
      order: "250",
      price: "12,251 VND",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "10,840 VND",
    },
    {
      username: "frank iva",
      order: "110",
      price: "9,251 VND",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "8,840 VND",
    },
  ],
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["Đơn Hàng id", "Tên", "Tổng Tiền", "Ngày", "Trạng Thái"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "900 VND",
      status: "Ship",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "400 VND",
      status: "Done",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "200 VND",
      status: "Chờ",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "400 VND",
      status: "Done",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "200 VND",
      status: "Trả",
    },
  ],
};

const orderStatus = {
  Ship: "primary",
  Chờ: "warning",
  Done: "success",
  Trả: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Shop AThanh</h2>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {statusCards.map((item, index) => (
              // status card here
              <div className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
       
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top khách hàng</h3>
            </div>
            <div className="card__body">
              {/* table */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Xem tất cả</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Đơn gần nhất</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Xem tất cả</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
