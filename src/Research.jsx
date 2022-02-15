import React from 'react';
import expData from "./data/research.json";

function Research(props) {
  const exps = expData.map(Exp);

  return (
    <section className="mt-3 p-1">
      <h5>RESEARCH EXPERIENCE</h5>
      {exps}
    </section>
  );
}

function Exp(e, i) {

  let end = e.end;

  if (end === -1) {
    end = <em>present</em>;
  }

  return (
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0">
        {e.title} <div className="text-muted">{e.start} - {end}</div>
      </h6>
      <div className="text-muted"><a href={e.link}>{e.org}, {e.where}</a></div>
      <div className="row mb-2">
          <div className="col-12 col-md-10">{e.desc}</div>
      </div>
    </div>
  )
}


export default Research;
