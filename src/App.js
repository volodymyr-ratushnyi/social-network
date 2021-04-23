import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Newsfeed from './components/newsfeed/Newsfeed';
import Messages from './components/messages/Messages';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

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
            <Route
              path="/newsfeed"
              render={() => (
                <Newsfeed posts={props.state.posts} dataForMe={props.state.dataForMe} addPost={props.addPost} addComment={props.addComment} />
              )}
            />
            <Route path="/messages" render={() => <Messages dialogs={props.state.dialogs} dataForMe={props.state.dataForMe} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
