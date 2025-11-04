import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import cloneDeep from 'lodash/cloneDeep';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

class App extends Component {
  state = {
      monsters: []
    };
    reference_state = {monsters:[]};
  
  constructor() {
    super();
    this.searchFunc = this.searchFunc.bind(this);

    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(
      (users) => this.setState(() => 
        {
          this.reference_state = cloneDeep(this.state);
          return {monsters:users}
        }
      )
     
    )

  }
  searchFunc(event){
      const monsters = this.reference_state.monsters;
      const keyword = event.target.value.toLowerCase()
      const new_state = monsters.filter((val) => val.name.toLowerCase().includes(keyword));
      this.setState(() => 
      {
        return {monsters:new_state};
      });
  
  }

  render(){
      return (
        <div className="App">
        <SearchBox className="search-box" placeholder='Search Monsters' onChange={this.searchFunc} />
        <CardList monsters={this.state.monsters} />
        </div>
      );
    }
    
}

export default App;
