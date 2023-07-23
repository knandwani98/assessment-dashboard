import React from "react";
import "../styles/side-bar.scss";

const Sidebar = () => {
  return (
    <aside className="side-bar">
      <div className="container flex">
        <nav className="side-nav-top">
          <ul className="nav">
            <li>
              <button className="dashboard link flex" type="">
                <i className="icon">
                  <img src="./assets/svg/dashboard.svg" alt="dashboard icon" />
                </i>
                <span className="label">Dashboard</span>
              </button>
            </li>

            {/*  */}
            <li>
              <button className="assessment link flex active" type="">
                <i className="icon">
                  <img src="./assets/svg/note_alt.svg" alt="assessment icon" />
                </i>
                <span className="label">Assessment</span>
              </button>
            </li>

            {/*  */}
            <li>
              <button className="libraby link flex " type="">
                <i className="icon">
                  <img src="./assets/svg/quiz.svg" alt="my library icon" />
                </i>
                <span className="label">My Library</span>
              </button>
            </li>
          </ul>
        </nav>

        <nav className="side-nav-bottom">
          <ul className="nav">
            <div className="link dash flex ">
              <li className="admin link flex ">
                <button className="btn-pill">Admin</button>
                <i className="icon">
                  <img
                    src="./assets/svg/admin_meds.svg"
                    alt="round status icon"
                  />
                </i>
                <span className="label">
                  Round <br /> Status
                </span>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
