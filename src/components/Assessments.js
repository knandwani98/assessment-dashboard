import React from "react";
import Card from "./Card";
import "../styles/assessments.scss";

const Assessments = ({
  setAddAssessmentWindow,
  activeWindow,
  showStats,
  setShowStats,
}) => {
  return (
    <>
      <section className={`my-assessment grid`}>
        <div className="flex">
          <h2 className="heading">
            {activeWindow === "my" && "My Assessment"}
            {activeWindow === "unstop" && "Unstop Assessments"}
          </h2>

          <div className="filter-nav flex full-hide">
            <button className="link icon">
              <img src="../assets/svg/search.svg" alt="search" />
            </button>
            <button className="link icon">
              <img src="../assets/svg/filter.svg" alt="filter" />
            </button>
            <button
              onClick={() => setShowStats(!showStats)}
              className={`link icon ${showStats ? "active" : ""}`}
            >
              <img
                src={`../assets/svg/chart${showStats ? "-active" : ""}.svg`}
                alt="chart"
              />
            </button>
          </div>
        </div>

        <div className="all-assessment grid">
          {/* ADD assessment */}
          <div className="card add-card f-center">
            <div className="plus flex">
              <button
                onClick={() => setAddAssessmentWindow(true)}
                className="icon f-center"
              >
                <img src="../assets/svg/plus.svg" alt="add icon" />
              </button>
              <h3 className="heading">New Assessment</h3>
            </div>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>

          <Card
            title={"Math Assessment"}
            date={`20 April 2023`}
            duration={"00"}
            questions={"00"}
            user={["LP"]}
          />

          <Card
            title={"Math Assessment"}
            date={`20 April 2023`}
            duration={"00"}
            questions={"00"}
            user={["LP", "LP", "LP"]}
          />
        </div>
      </section>
    </>
  );
};

export default Assessments;
