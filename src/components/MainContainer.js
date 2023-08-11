import React, { useState } from "react";
import Header from "./Header";
import Overview from "./Overview";
import "../styles/overview.scss";
import Assessments from "./Assessments";
import AddAssessment from "./AddAssessment";

let initialassessments = [
  {
    title: "Math Assessment",
    date: `20 April 2023`,
    duration: "00",
    questions: "00",
    user: ["LP"],
  },
  {
    title: "Math Assessment",
    date: `20 April 2023`,
    duration: "00",
    questions: "00",
    user: ["LP", "LP", "LP"],
  },
];

const MainContainer = () => {
  const [assessments, setassessments] = useState(initialassessments);
  const [showStats, setShowStats] = useState(false);
  const [activeWindow, setActiveWindow] = useState("my");
  const [addAssessmentWindow, setAddAssessmentWindow] = useState(false);

  return (
    <section className="main-container">
      <Header />

      {addAssessmentWindow && (
        <AddAssessment setAddAssessmentWindow={setAddAssessmentWindow} />
      )}

      <main className="main grid">
        <nav className="assessment-nav full-hide">
          <ul className="flex">
            <li className={activeWindow === "my" ? "active" : ""}>
              <button
                onClick={() => {
                  setActiveWindow("my");
                  setShowStats(false);
                }}
                className="link"
              >
                My Assessments
              </button>
            </li>
            <li className={activeWindow === "unstop" ? "active" : ""}>
              <button
                onClick={() => {
                  setActiveWindow("unstop");
                  setShowStats(false);
                }}
                className="link"
              >
                Unstop Assessments
              </button>
            </li>
          </ul>
        </nav>
        <Overview showStats={showStats} />
        <Assessments
          setAddAssessmentWindow={setAddAssessmentWindow}
          assessments={assessments}
          setassessments={setassessments}
          activeWindow={activeWindow}
          showStats={showStats}
          setShowStats={setShowStats}
        />
      </main>
    </section>
  );
};

export default MainContainer;
