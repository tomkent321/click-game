import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Score from "./components/Score";
import planes from "./planes.json";

import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    planes,
    clickedPlaneIds: [],
    chosenPlaneIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the plane cards in the browser when clicked
  movePlanes = id => {
    
    let clickedPlaneIds = this.state.clickedPlaneIds;

    if(clickedPlaneIds.includes(id)){
      this.setState({ clickedPlaneIds: [], score: 0, status:  "No plane ride for you! You lost!" });
      return;
    }else{
      clickedPlaneIds.push(id)

      if(clickedPlaneIds.length === 8){
        this.setState({score: 8, status: "You win a free ticket!", clickedPlaneIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ planes, clickedPlaneIds, score: clickedPlaneIds.length, status: " " });

      planes.sort(function(){
        return 0.5 - Math.random()
    })


    }
  }

  





  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose a Plane...But Only Once!</h1>
          <p className="App-intro">
            Win by clicking all 8 planes once without clicking any twice. 
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Container>
          {this.state.planes.map(planes => (
            <Card
              movePlanes={this.movePlanes}
              id={planes.id}
              key={planes.id}
              image={planes.image}
            />
          ))}
        </Container>
        <footer>
          <p></p>
          
        </footer>
    </div>
    );
  }
}

export default App;