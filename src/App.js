import logo from './logo.svg';
import './App.css';
import Interests from './components/Interests/Interests.js'
import Links from './components/Links/Links.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Andrew Fitz's Personal Site
      </header>
      <div>
        <Links />
        <Interests />
      </div>
    </div>
  );
}

export default App;
