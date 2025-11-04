import { Component } from "react";

class SearchBox extends Component{
//     constructor(props) {
//     super(props);
//     this.searchFunc = this.searchFunc.bind(this);
//     this.props = props;

    
//   }

    render(){
        return(
                <input 
                    className={this.props.className}
                    type='search' 
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                
                /> 
        
        );
    }
}

export default SearchBox;