import React from "react";

const Overview = ({ showStats }) => {
  return (
    <section className={`overview ${showStats ? "" : "hide"}`}>
      <h1 className="heading hide">Assessments Overview</h1>
      <div className="stats grid">
        {/* Total assessments */}
        <div className="card total-assessments grid">
          <h3 className="heading">Total Assessment</h3>
          <div className="f-left">
            <span className="icon f-center">
              <img src="../assets/svg/stack.svg" alt="stack icon" />
            </span>

            <div className="context grid">
              <h2 className="text">34</h2>
            </div>
          </div>
        </div>

        {/* Candidates */}
        <div className="card candidates grid">
          <h3 className="heading">Candidates</h3>
          <div className="f-left">
            <span className="icon f-center">
              <img src="../assets/svg/group.svg" alt="group icon" />
            </span>

            <div className="context grid">
              <h2 className="text">
                11,145 <span className="extra">+89</span>
              </h2>
              <p>Total Candidates</p>
            </div>

            <span className="divider"></span>

            <div className="context grid">
              <h2 className="text">
                1,14 <span className="extra">+89</span>
              </h2>
              <p>Who Attempted</p>
            </div>
          </div>
        </div>

        {/* Candidates Source */}
        <div className="card candidates-source grid">
          <h3 className="heading">Candidates Source</h3>
          <div className="f-left">
            <span className="icon f-center">
              <img
                src="../assets/svg/captive_portal.svg"
                alt="worldwide web icon"
              />
            </span>

            <div className="context grid">
              <h2 className="text">
                11,000 <span className="extra">+89</span>
              </h2>
              <p>Email</p>
            </div>

            <span className="divider"></span>

            <div className="context grid">
              <h2 className="text">
                145 <span className="extra">+89</span>
              </h2>
              <p>Social Share</p>
            </div>

            <span className="divider"></span>

            <div className="context grid">
              <h2 className="text">
                145 <span className="extra">+89</span>
              </h2>
              <p>Unique Link</p>
            </div>
          </div>
        </div>

        {/* Total Purpose */}
        <div className="card purpose grid">
          <h3 className="heading">Total Purpose</h3>
          <div className="f-left">
            <span className="icon f-center">
              <img src="../assets/svg/link.svg" alt="link icon" />
            </span>

            <div className="context grid">
              <h2 className="text">11</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
