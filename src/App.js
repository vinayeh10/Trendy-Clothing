import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserOnSignIn } from './firebase/firebase.util';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  authSubscription = null

  componentDidMount() {
    this.authSubscription = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserOnSignIn(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  };
}

export default App;
