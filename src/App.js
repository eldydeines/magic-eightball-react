
import './App.css';
import EightBall from './EightBall';
import answers from './answers';

function App() {
    return (
        <div className="App">
            <h1 className="App-header">EightBall</h1>
            <EightBall answers={answers} />
        </div>
    );
}

export default App;