import React from "react";

import confLogo from "../images/badge-header.svg";

class Babge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Daniel <br /> Vergara
          </h1>
        </div>
        <div>
          <p>Frontend Engineer</p>
          <p>@dvergara09</p>
        </div>
        <div>#platziConf</div>
      </div>
    );
  }
}

export default Babge;
