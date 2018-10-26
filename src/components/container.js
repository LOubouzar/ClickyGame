import React, {Component} from 'react';
import Card from './card';
import Character from "./../LoZ.json";
import shuffle from "shuffle-array";


class Container extends Component {
    constructor(props){
        super(props)

        // Sets initlal state for a score of one. Characters pulled in from the JSON and empty array to store the selected Characters.
        this.state= {
            score: 1,
            character: Character,
            selectedCharacter: []
        }
    }
    //Handle event for clicking on the characters and overall game logic
    handleClick = (event) => {
        let id = event.target.id
        let clicked = false
        
        //if Ids matching selected characters then turn the state of clicked to true. If clicked is already true then end the game.
        this.state.selectedCharacter.forEach(character => {
            if (character.id === id) {
                clicked = true;
            }
        })
        //if the clicked is true then end the game.
        if (clicked) {
            this.endGame();
        }

        //continue the game, loop through the characters
        else{
            this.state.character.forEach(character =>{
                if (character.id === id) {
                    //adds the selected character to the array of already selected Characters
                    this.setState({selectedCharacter:[...this.state.selectedCharacter, character]})
                    this.updateScore()
                }
            })
        }
        //then shuffle the character cards
        this.setState({character: shuffle(this.state.character)})
    }

    //Function to update the game's current score
    updateScore = () => {
        this.setState({score: this.state.score + 1})
        this.props.updateScore(this.state.score)
    }

    //Function to end the game and set the current score to 0 and empty the array
    endGame = () => {
        this.props.updateTopScore(this.state.score)
        this.setState({score: 1, selectedCharacter: []})
        this.props.updateScore(0)
    }

    render() {
        return (
            <div className="tile">
                <div>
                    {Character.map(character => <Card
                         src= {character.image}
                         key= {character.id}
                         alt= {character.name}
                         endGame= {this.endGame}
                         handleClick= {this.handleClick}
                         score= {this.state.score} />
                    )}
                </div>
            </div>
        )
    }


}

export default Container;