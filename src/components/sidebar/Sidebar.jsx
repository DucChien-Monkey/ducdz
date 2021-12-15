import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

// import logo from "../../assets/images/logo.png";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  //get active item === route
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="https://scalebranding.com/wp-content/uploads/2021/04/127.-Chick-Chef-logo.jpg" alt="company logo"
        />
      </div>
      {
        //render sidebar item and link to each item route
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem //props to SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem} //gan props active === index
            />
          </Link>
        ))
      }
    </div>
  );
};

export default Sidebar;
