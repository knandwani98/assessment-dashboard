import React from "react";
import "../styles/card.scss";

const Card = ({ title, user }) => {
  let colorList = ["purple", "secondary", "pink", "red", "green"];

  return (
    <div className="card">
      <header className="header flex">
        <div className="grid left">
          <span className="icon f-center">
            <img src="../assets/svg/bag.svg" alt="bag-icon" />
          </span>

          <div className="title grid">
            <h3 className="heading">{title}</h3>
            <div className="description f-left">
              <p className="post">Job</p>
              <span className="divider"></span>
              <div className="calender f-left">
                <span>
                  <img src="../assets/svg/calender.svg" alt="calender-icon" />
                </span>
                <span className="date">20 April 2023</span>
              </div>
            </div>
          </div>
        </div>
        <span className="right">
          <img src="../assets/svg/three_dot.svg" alt="three dot icon" />
        </span>
      </header>
      <hr />

      <footer className="footer flex">
        <div className="left flex">
          <div>
            <p className="numbers duration">00</p>
            <span className="label">Duration</span>
          </div>
          <div>
            <p className="numbers questions">00</p>
            <span className="label">Questions</span>
          </div>
        </div>

        <div className="right flex">
          <button className="btn-pill flex">
            <span className="icon">
              {/* <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00033 2.10614L5.64331 4.46316L6.82182 5.64168L9.17885 3.28465C10.1511 2.31238 11.7421 2.31238 12.7144 3.28465C13.6867 4.25692 13.6867 5.84792 12.7144 6.82019L10.3574 9.17721L11.5359 10.3557L13.8929 7.9987C15.5192 6.37235 15.5192 3.73249 13.8929 2.10614C12.2665 0.479796 9.62668 0.479796 8.00033 2.10614ZM9.17885 10.3557L6.82182 12.7127C5.84955 13.685 4.25856 13.685 3.28629 12.7127C2.31402 11.7405 2.31402 10.1495 3.28629 9.17721L5.64331 6.82019L4.4648 5.64168L2.10778 7.9987C0.481432 9.62504 0.481432 12.2649 2.10778 13.8913C3.73412 15.5176 6.37399 15.5176 8.00033 13.8913L10.3574 11.5342L9.17885 10.3557ZM5.05406 9.76647L9.7681 5.05242L10.9466 6.23093L6.23257 10.945L5.05406 9.76647Z"
                  fill="#1C4980"
                />
              </svg> */}
              <img src="../assets/svg/share.svg" alt="share-icon" />
            </span>
            Share
          </button>

          <div className="users flex">
            {user.map((userAvatar, i) => {
              return (
                <div
                  key={i}
                  className="user flex"
                  style={{ backgroundColor: `var(--${colorList[i]})` }}
                >
                  {userAvatar}
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Card;
