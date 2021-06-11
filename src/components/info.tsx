import * as React from "react";
import dinoPic from "./../assets/dino.png";

export default function Info() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "45px",
        }}
      >
        Vem är Dino?
      </h1>
      <div className="infoDino">
        <img
          src={dinoPic}
          alt=""
          style={{
            width: "45%",
          }}
        />
        <h3>
          Dino är en väldigt snäll dinosaurie egentligen. Han är en T-Rex som
          älskar köttbullar med potatismos, men ogillar att stöta på hinder.
          Hjälp Dino att hoppa över alla hinder i spelet för att Dino inte ska
          bli ledsen!
        </h3>
      </div>
    </div>
  );
}
