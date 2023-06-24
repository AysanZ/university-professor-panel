import React from "react";
import Overview from "../../components/Overview/Overview";
import Report from "../../components/Report/Report";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.statistics}>
        <div className={css.static}>
          <div>
            <span>Total Classes
</span>
            <span>04/06
</span>
          </div>
          <img src="./dash-icon-02.svg" alt="" />
        </div>
        <div className={css.static}>
          <div>
            <span>Total Students
</span>
            <span>40/60
</span>
          </div>
          <img src="./dash-icon-01.svg" alt="" />
        </div>
        <div className={css.static}>
          <div>
            <span>Total Lessons
</span>
            <span>30/50
</span>
          </div>
          <img src="./dash-icon-03.svg" alt="" />
        </div>
        <div className={css.static}>
          <div>
            <span>Total Hours
</span>
            <span>15/20
</span>
          </div>
          <img src="./dash-icon-04.svg" alt="" />
        </div>
      </div>

      <Overview />

      <Report />

    </div>
  );
};

export default Dashboard;
