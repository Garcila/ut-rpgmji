import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import ChooseYou from './pages/ChooseYou';
import ChooseOpponent from './pages/ChooseOpponent';
import Fight from './pages/Fight';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

import Data from './Data.json';
import './App.css';

class App extends Component {
  state = {
    allCharacters: [],
    me: '',
    contender: '',
    enemies: [],
    defeated: [],
  };

  randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  setRobots = () => {
    const allCharacters = [];
    this.setState({me: ''});
    Data.map(robot => {
      robot.url = `${robot.url1}${this.randomInRange(0, 1000)}${robot.url2}`;
      robot.health = this.randomInRange(100, 180);
      robot.attack = this.randomInRange(6, 20);
      allCharacters.push(robot);
    });
    this.setState({allCharacters});
  };

  componentDidMount() {
    this.setRobots();
  }

  setCharacter = (robot, h) => {
    if (!this.state.me.id) {
      const me = robot;
      const enemies = this.state.allCharacters.filter(r => r.id !== robot.id);
      this.setState({me, enemies});
      h.push('/opponent');
    } else {
      const contender = robot;
      const enemies = this.state.allCharacters.filter(
        r => r.id !== contender.id
      );
      this.setState({contender, enemies});
      h.push('/fight');
    }
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route
            exact
            path='/you'
            render={props => (
              <ChooseYou
                {...props}
                allCharacters={this.state.allCharacters}
                setCharacter={this.setCharacter}
              />
            )}
          />
          <Route
            exact
            path='/opponent'
            render={props => (
              <ChooseOpponent
                {...props}
                enemies={this.state.enemies}
                setCharacter={this.setCharacter}
                me={this.state.me}
              />
            )}
          />
          <Route
            exact
            path='/fight'
            render={props => (
              <Fight
                {...props}
                contender={this.state.contender}
                me={this.state.me}
                enemies={this.state.enemies}
                setRobots={this.setRobots}
              />
            )}
          />
          <Route exact path='/Result' component={Result} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
