import React from 'react';
import confsData from "./data/conferences.json";

function Conferences(props) {
  const confs = confsData.map(Confs);

  return (
    <section className="mt-3 p-1">
      <h5>CONFERENCE PRESENTATIONS</h5>
      {confs}
    </section>
  );
}

function Confs(c, i) {

  let end = c.end;

  if (end === -1) {
    end = <em>present</em>;
  }

  return (
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0 p-1">
        {c.title} <div className="text-muted">{c.year}</div>
      </h6>
    </div>
  )
}
export default Conferences;
