import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card-component";

class CardList extends Component{
    updateMap(monsters){
        return (
            <Card monsters={monsters} />
        );
    }

    render(){
        const {monsters} = this.props
        return(
            <div className='card-list'>
                {monsters.map(this.updateMap)}
            </div>
        
        );
    }
}

export default CardList;