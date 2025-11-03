import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('1');
    super();
    
    this.state ={
      monsters: []
    };
  }
  
  componentDidMount(){
    console.log('3');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(
      (users) => this.setState(() => {
         return {monsters:users}
      },
      () =>{
        console.log(this.state);
      }
    )
     
    )

  }

  render(){
      console.log('2');
      return (
        <div className="App">
        {
          this.state.monsters.map(
              (monsters) => {
              return (
                <div key={monsters.id}>
                  <h1>{monsters.name}</h1>
                </div>
              );
            }
          )
        }
        </div>
      );
    }
    
}

export default App;
