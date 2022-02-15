import React from 'react';
import profileImg from "./res/enz.jpeg";


function Contact(props) {
  return (
    <section className="text-center mb-2 semiTrans p-3 rounded">
      <div><a href="mailto:elenizamagias@mail.adelphi.edu">elenizamagias@adelphi.edu</a></div>
    </section>
  )
}


function EnterInfo(props) {
  return (
    //<p className="welcome">Welcome to my resume!</p>
  <section className="information p-3">
    <h4 className="fs-6 d-flex border-bottom border-dark border-3 justify-content-center">Feel free to contact me!</h4>
    <form>
    <div className="row justify-content-start">
      <div className="col p-2">
        <input className="form-control" type="text" placeholder="First name" aria-label="First name">
        </input>
      </div>
      <div className="col p-2">
        <input className="form-control" type="text" placeholder="Last name" aria-label="Last name">
        </input>
      </div>
    <div class="row mb-3">
      <div class="col-sm-10 p-2">
        <input type="email" class="form-control" id="colFormLabel" placeholder="Email address">
        </input>
      </div>
    </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    </form>
  </section>
  )

}


function Papers(props) {
  return (
    <section className="papers p-3">
      <h4 className="fs-5 d-flex border-bottom border-dark border-3 justify-content-center">Links to Works</h4>
      <div className= "d-flex justify-content-center p-2">
        <a className="btn btn-outline-dark" href="https://www.overleaf.com/read/mvnynyxqsffw" role="button">An Early Review of Responses to COVID-19 by Institutions of Higher Education</a>
      </div>
      <div className= "d-flex justify-content-center p-2">
        <a className="btn btn-outline-dark" href="https://www.overleaf.com/read/wbpxkdkytwtt" role="button">Modeling New York State Education Expenditure Using Regression Analysis</a>
      </div>
      <div className= "d-flex justify-content-center p-2">
        <a className="btn btn-outline-dark" href="https://www.overleaf.com/read/vhpsbfqkmsyt" role="button">Higher Education Response to COVID-19 Pandemic</a>
      </div>
      <div className= "d-flex justify-content-center p-2">
        <a className="btn btn-outline-dark" href="https://www.overleaf.com/read/wgsnknbdbmyf" role="button">An Examination of Mathematics in Graph Burning Games</a>
        </div>
    </section>
  )
}


function ProfileImg(props) {

  return (
    <img className="mx-auto d-md-block d-sm-none img-fluid p-3" src={profileImg}
      alt="headshot of eleni" />
  )

}


function Bio(props) {
  return (
    <section className="Bio">
      <p className="text-center border-top border-bottom border-dark border-3">
         JAMAICA ESTATES, N.Y.    -    <a href="mailto:elenizamagias@mail.adelphi.edu">ELENIZAMAGIAS@MAIL.ADELPHI.EDU</a>
      </p>
    </section>
  );
}


export {Bio, Contact, Papers, EnterInfo, ProfileImg};
