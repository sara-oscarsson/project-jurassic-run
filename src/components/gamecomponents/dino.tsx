import * as React from "react";
import dinoImage from "./../../assets/dino.png";

interface Props {
  jumpHeight: number;
  makeDinoJump: () => void;
}

const Dino = (props: Props) => {
  return (
    <>
      <div>
        <button
          style={{
            fontSize: 30,
            color: "black",
            backgroundColor: "white",
            height: 60,
            width: 120,
            borderRadius: 30,
            borderColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: 'pointer'
          }}
          onClick={props.makeDinoJump}
        >
          JUMP
        </button>
        <div
          className="dino"
          style={{
            height: "150px",
            width: "250px",
            backgroundImage: `url(${dinoImage})`,
            bottom: `${props.jumpHeight}px`,
            position: "absolute",
            left: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};
export default Dino;
