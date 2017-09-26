import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yourStatment: '',
			repeats: ''
		}
	}

	onChange (e) {
    this.setState({
      term: e.target.value
    });
  }


	repeat(){
	(this.props.yourStatment).repeat(this.props.repeats)

}

render(){
	return (<div>
		<h3> Insert: </h3> 
		Your repeated statment: <input value = {this.state.yourStatment}/>
		<br/>

		the number of repeats: <input value = {this.state.repeats} />
		
		<button onClick = {repeat}> do it </button>
		
		<br/>
		<lu>
			
		</lu>

	</div>)
	
}


}

ReactDOM.render(<App />, document.getElementById('app'));




