import * as React from "react";

interface Props {
  score: number;
}

const Score = (props: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 20,
          color: "white",
        }}
      >
        <h1>Score: {props.score}</h1>
      </div>
    </>
  );
};
export default Score;
