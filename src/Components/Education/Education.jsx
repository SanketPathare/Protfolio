import "../Education/Education.css";

function Education() {
  return (
    <>
      <div className="title">
        <h1> My <b>Education </b></h1>
      </div>
      <div className="timeline">
        <div className="checkpoint">
          <div>
            <h2>B-Tech In Computer-Science </h2>
            <p>
              2022-Ongoing | G.H.Raisoni University ,Wagholi Courses included
              Data Structures and Algorithms, Computer Systems Engineering, and
              Artificial Intelligence,Theory of Comutation.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Online Courses </h2>
            <p>
              2021-Ongoing | CodeWithHarry, FreeCodeCamp,JS Mastery,Developed ,6
              Pack Programmer Completed coursework in advanced topics such as
              React, Next Js, and Backend Mastery with Node and Express Js.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Diploma In Information Tech </h2>
            <p>
              2019-2022 | JSPM's Jaywantrao Sawant Polytechnic ,Hadapsar Courses
              included Data Structures and Algorithms, OOP,Advance Computer
              Networks,Mobile Application Development,Wireless Mobile Networks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
