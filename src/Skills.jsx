import React from 'react';
import skillData from "./data/skills.json";

function Skills(props) {

  let skills = skillData.map(Skill);
  return (
    <section className="Skills semiTrans p-3 rounded mb-2">
    <h4 className="fs-5 d-flex border-bottom border-dark border-3 justify-content-center">Skills</h4>
    <h5 className="d-block d-md-none">Skills</h5>
      {skills}
    </section>
  );
}

function Skill(s, i) {
  const maxSkill = 5;
  let pct = s.score / maxSkill * 100 + "%";
  return (
    <div key={i} className="Skill d-flex justify-content-end">
      <div className="font-weight-bold text-dark pe-2">{s.skill}</div>
      <div className="progress w-50">
        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
          style={{ width: pct }}
          role="progressbar"
          aria-valuenow={s.score}
          aria-valuemin="0"
          aria-valuemax={maxSkill}>
        </div>
      </div>
    </div>

  )
}


export default Skills;
