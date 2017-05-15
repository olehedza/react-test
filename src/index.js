import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    btnOnClick(event) {
        console.log('Button clicked!', event.target);
    }

    render(){
        return (
            <div style={{backgroundColor: 'red'}}
            className="test">
                <h1>App works!</h1>
                <h1>It's really working</h1>
                <button onClick={this.btnOnClick}>Click</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);