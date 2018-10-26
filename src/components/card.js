import React from "react";
import './card.css';

const Card = props => (
    <div className="column is-4">
        <div className="tile is-vertical">
            <div className="card">
                <div className="card-image is-one-quarter">
                    <img src={props.src} id={props.id} alt={props.alt} onClick={props.handleClick} />
                </div>
            </div>
        </div>
    </div>
)
        
export default Card;