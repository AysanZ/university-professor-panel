import React from "react";
import Chart1 from "../Charts/Chart1";
import { BsFillCircleFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import css from "./Overview.module.css";
import Chart2 from "../Charts/Chart2";

const Overview = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>Overview</span>
          <div>
            <BsFillCircleFill size={10} style={{ color: "var(--blue)" }} />
            <span>Teacher</span>
            <BsFillCircleFill size={10} style={{ color: "yellow" }} />
            <span>Student</span>
          </div>
        </div>
        <Chart1 />
      </div>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>Upcoming Lesson</span>
        </div>
        <div className={css.items}>
          <div className={css.item}>
            <div>
              <span className={css.title2}>Lessons 30</span>
              <span>
                <span>3.1 Ipsuum dolor</span>
                <span>
                  <BsFillCalendarDateFill /> Sep 5, 2022 |
                  <BiTime /> 09:00 - 10:00 am
                </span>
              </span>
            </div>
            <BiCheck size={25} style={{ color: "#1CD150" }} />
          </div>
          <div className={css.item}>
            <div>
              <span className={css.title2}>Lessons 30</span>
              <span>
                <span>3.1 Ipsuum dolor</span>
                <span>
                  <BsFillCalendarDateFill /> Sep 5, 2022 |
                  <BiTime /> 09:00 - 10:00 am
                </span>
              </span>
            </div>
            <BiCheck size={25} style={{ color: "#1CD150" }} />
          </div>
          <div className={css.item}>
            <div>
              <span className={css.title2}>Lessons 30</span>
              <span>
                <span>3.1 Ipsuum dolor</span>
                <span>
                  <BsFillCalendarDateFill /> Sep 5, 2022 |
                  <BiTime /> 09:00 - 10:00 am
                </span>
              </span>
            </div>
            <BiCheck size={25} style={{ color: "#1CD150" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
