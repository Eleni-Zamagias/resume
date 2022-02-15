import React from 'react';
import honorsData from "./data/honors.json";

function Honors(props) {
  const hons = honorsData.map(Hons);

  return (
    <section className="mt-3 p-1">
      <h5>HONORS AND AWARDS</h5>
      {hons}
    </section>
  );
}

function Hons(h, i) {

  let end = h.end;

  if (end === -1) {
    end = <em>present</em>;
  }

  return (
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0 p-1">
        {h.title} <div className="text-muted">{h.year}</div>
      </h6>
    </div>
  )
}
export default Honors;
