import React from 'react';
import pubData from "./data/publications.json";

function Publications(props) {
  const pubs = pubData.map(Pubs);

  return (
    <section className="mt-3 p-1">
      <h5>PUBLICATIONS</h5>
      {pubs}
    </section>
  );
}

function Pubs(p, i) {

  let end = p.end;

  if (end === -1) {
    end = <em>present</em>;
  }

  return (
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0 p-1">
        {p.title}
      </h6>
    </div>
  )
}
export default Publications;
