import React from "react";
import { MdSpaceDashboard , MdGrade} from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { BsFillCalendarEventFill,BsFillPersonFill } from "react-icons/bs";
import { HiAcademicCap,HiViewBoards } from "react-icons/hi";
import { FaChalkboardTeacher, FaBookReader, FaBuilding } from "react-icons/fa";
import {FiLogOut} from 'react-icons/fi'
import "./Sidebar.css";

const Side = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="./Logo.png" alt="" />
      </div>
      <Sidebar className="side">
        <Menu className="menu">
          <MenuItem
            className="item"
            icon={<MdSpaceDashboard size={25} />}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            className="item"
            icon={<HiAcademicCap size={25} />}
            component={<Link to="/students" />}
          >
            Student
          </MenuItem>

          <MenuItem
            className="item"
            icon={<MdGrade size={25} />}
            component={<Link to="/teachers" />}
          >
            Transcript
          </MenuItem>

          <MenuItem
            className="item"
            icon={<BsFillPersonFill size={25} />}
            component={<Link to="/view" />}
          >
            Profile
          </MenuItem>


          

          <MenuItem
            className="item"
            icon={<BsFillCalendarEventFill size={23} />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Calendar
          </MenuItem>

          <MenuItem
            className="item"
            icon={<HiViewBoards size={25} />}
            component={<Link to="/kanban" />}
          >
            Kanban
          </MenuItem>


          <MenuItem
            className="item logOut"
            icon={<FiLogOut size={25} />}
            component={<Link to="/" />}
          >
            {" "}
            Log Out
          </MenuItem>

        </Menu>
      </Sidebar>
    </div>
  );
};

export default Side;
