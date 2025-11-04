import { Component } from "react";

class CardList extends Component{
    updateMap(monsters){
        return (
            <h1 key={monsters.id}>{monsters.name}</h1>
        );
    }

    render(){
        const {monsters} = this.props
        return(
            <div>
                {monsters.map(this.updateMap)}
            </div>
        
    );
    }
}

export default CardList;