import * as React from "react";
import dinoPic from "./../assets/dino.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "./../assets/dino.png";
import '../index.css'

const useStyles = makeStyles({
  title: {
    fontSize: 17,
    height: "auto",
    width: 500,
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: 310,
    width: 500,
  },
});

export default function Info() {
  const classes = useStyles();

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className='jurassic'
      >
        Who is Dino?
      </h1>
      <div className="infoDino">
        <Card>
          <CardMedia className={classes.media} image={image}></CardMedia>
          <CardContent>
            <Typography className={classes.title}>
              Dino is a very kind dinosaur really. He is a T-Rex 
              who loves meatballs with mashed potatoes, but does 
              not like to encounter obstacles. Help Dino to overcome
              all obstacles in the game so that Dino does not get sad!
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
