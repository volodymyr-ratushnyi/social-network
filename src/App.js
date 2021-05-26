import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Newsfeed from './components/newsfeed/Newsfeed';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MessagesContainer from './components/messages/MessagesContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <div className="col-md-3">
            {' '}
            <Navbar />
          </div>

          <div className="wrapper-content col-md-7">
            <Route path="/newsfeed" render={() => <Newsfeed />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
