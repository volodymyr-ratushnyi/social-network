import './App.scss';
import Navbar from './components/navbar/Navbar';
import Newsfeed from './components/newsfeed/Newsfeed';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MessagesContainer from './components/messages/MessagesContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import LoginContainer from './components/login/LoginContainer';
import HeaderContainer from './components/header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <div className="wrapper">
          <div className="col-md-3">
            {' '}
            <Navbar />
          </div>

          <div className="wrapper-content col-md-7">
            <Route path="/newsfeed" render={() => <Newsfeed />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/profile/:user_id?" render={() => <ProfileContainer />} />
            <Route path="/login" render={() => <LoginContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
