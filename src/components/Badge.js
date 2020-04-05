import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Babge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://es.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Daniel <br /> Vergara
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@dvergara09</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Babge;
