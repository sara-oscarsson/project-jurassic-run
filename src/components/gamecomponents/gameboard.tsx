import React, { useState, useEffect } from "react";
import Dino from "./dino";
import Obstacle from "./obstacle";
import Score from "./showScore";

interface Props {
  background: {
    id: number;
    label: string;
    value: string;
    backgroundImage: string;
  };
}

const Gameboard = (props: Props) => {

  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [jumpHeight, setJumpHeight] = useState<number>(40);
  let windowWidth = window.innerWidth - 120;
  const [obstaclePosition, setObstaclePosition] = useState<number>(windowWidth);
  const [score, setScore] = useState<number>(0);

  let jumpSpeed = 20;
  let jumpTimer: NodeJS.Timeout;
  let fallTimer: NodeJS.Timeout;

  const dinoJumpNew = () => {
    /* if(jumpHeight == 80){
            let jumpTimer = setInterval(()=> {
                setJumpHeight(jumpHeight => jumpHeight +10)
            },30)
            return ()=> {
                clearInterval(jumpTimer)
            }
        } */
    if (jumpHeight == 20) {
      setJumpHeight((jumpHeight) => jumpHeight + 300);
    }
  };

  useEffect(() => {
    if (jumpHeight > 20) {
      let fallTimer = setInterval(() => {
        setJumpHeight((jumpHeight) => jumpHeight - 10);
      }, 20);
      return () => {
        clearInterval(fallTimer);
      };
    }
  });

  useEffect(() => {
    if (!isGameOver) {
      if (obstaclePosition > 0) {
        let obstacleTimer = setInterval(() => {
          setObstaclePosition((obstaclePosition) => obstaclePosition - 10);
        }, 20);
        return () => {
          clearInterval(obstacleTimer);
        };
      }
    }
  });

  useEffect(() => {
    if (!isGameOver) {
      if (obstaclePosition <= 0) {
        setScore((score) => score + 10);
        setObstaclePosition(windowWidth);
        let obstacleTimer = setInterval(() => {
          setObstaclePosition((obstaclePosition) => obstaclePosition - 10);
        }, 20);
        return () => {
          clearInterval(obstacleTimer);
        };
      }
    }
  });

  useEffect(() => {
    if (!isGameOver) {
      if (obstaclePosition < 270 && obstaclePosition > 150 && jumpHeight < 100) {
        setIsGameOver(true);
        setObstaclePosition(windowWidth);
        console.log("%cKROCK!!!!!", "color: red");
      }
    }
  });

  function StartGame() {
    setIsGameOver(false);
    setScore(0);
  }

  return (
    <div
      className="grid"
      style={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${props.background.backgroundImage})`,
        /* backgroundPosition: 'center', */
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Score score={score} />
      <div className="startButton">
        {isGameOver ? (
          <button
            style={{
              fontSize: 30,
              color: "white",
              backgroundColor: "green",
              height: 60,
              width: 120,
              borderRadius: 30,
              borderColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: 'pointer'
            }}
            onClick={StartGame}
          >
            Start
          </button>
        ) : (
          <Dino jumpHeight={jumpHeight} makeDinoJump={dinoJumpNew} />
        )}
      </div>
      <Obstacle obstaclePosition={obstaclePosition} />
    </div>
  );
};

export default Gameboard;

const btnStyle: React.CSSProperties = {
  padding: "16px",
  height: "35px",
  textAlign: "center",
};
