import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';


const App = () =>  {
  //Set States
  const [search_field, setSearchField] = useState('');
  const [monsters, setmonsters] = useState([]);
  const [filtered_monsters, setFilteredMonsters] = useState(monsters);

  //fetch from API
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setmonsters((users))
    );
  }, []);

  // useEffect to render once if no changes are detected
  useEffect(()=> {
    const new_filtered_mosnters = monsters.filter((val) => val.name.toLowerCase().includes(search_field));
    setFilteredMonsters(new_filtered_mosnters);
  }, [monsters, search_field]);

  const searchFunc = (event) =>{
      const keyword = event.target.value.toLowerCase()
      setSearchField(keyword); 
  }
  
  return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className="monsters-search-box" 
          placeholder='Search Monsters' 
          onChange={searchFunc} 
        />
        <CardList monsters={filtered_monsters} />
      </div>
  );
}

// class App extends Component {
//   state = {
//       monsters: []
//     };
//     reference_state = {monsters:[]};
  
//   constructor() {
//     super();
//     this.searchFunc = this.searchFunc.bind(this);

    
//   }

//   componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then(
    //   (users) => this.setState(() => 
    //     {
    //       this.reference_state = cloneDeep(this.state);
    //       return {monsters:users}
    //     }
    //   )
     
    // )

//   }
//   searchFunc(event){
//       const monsters = this.reference_state.monsters;
//       const keyword = event.target.value.toLowerCase()
//       const new_state = monsters.filter((val) => val.name.toLowerCase().includes(keyword));
//       this.setState(() => 
//       {
//         return {monsters:new_state};
//       });
  
//   }

//   render(){
//       return (
//         <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className="monsters-search-box" placeholder='Search Monsters' onChange={this.searchFunc} />
//         <CardList monsters={this.state.monsters} />
//         </div>
//       );
//     }
    
// }

export default App;
