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

	repeat(){
	(this.props.yourStatment).repeat(this.props.repeats)
}

render(){
	return (<div>
		<h3> Write your repeated statment </h3>
		<input value = {this.state.yourStatment}, />
		<input value = {this.state.repeats} />
		<button onClick = {this.repeat}> do it </button>
	</div>
	<div>
		<lu>
			repeat()
		</lu>
	</div>)
}


}

ReactDOM.render(<App />, document.getElementById('app'));





