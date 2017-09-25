import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yourStatment: ''
		}
	}

	repeat(){
	this.props.
}

render(){
	return (<div>
		<h3> Write your repeated statment </h3>
		<input value = {this.state.yourStatment} />
		<button onClick = {this.repeat}> do it </button>
	</div>)
}


}

ReactDOM.render(<App />, document.getElementById('app'));






