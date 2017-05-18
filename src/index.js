import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import New from './New';

class App extends React.Component {
    constructor(props) {
        super(props);

        /*this.state = {
            text: "hello"
        };*/
    }

    /*inputOnChange(event) {
        console.log('Event: ', event.target.value);
        const text = event.target.value;
        this.setState({
            text: text
        });
    }*/


    /* static propTypes = {
     btnText: PropTypes.string.isRequired,
     h1text: PropTypes.string.isRequired,
     newArray: PropTypes.array.isRequired
     };

     static defaultProps = {
     btnText: 'default props text',
     newArray: ['First', 'Second']
     };

     btnOnClick(event) {
     console.log('Button clicked!', event.target);
     }*/

     render() {
        // console.log('Props', this.props);
        // console.log('array', this.props.newArray);
        return (
            <div className="test">
                <h1>App component</h1>
                {/*<input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>*/}
                <New text="Hello from App" value={['First', 'Second']}/>
            </div>
//{/*<h1>App works!</h1>*/}
//{/*<h1>{ this.props.h1text }</h1>*/}
//{/*<h1>It's really working</h1>*/}
//{/*<button onClick={this.btnOnClick}>{ this.props.btnText || 'Button' }</button>*/}
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);