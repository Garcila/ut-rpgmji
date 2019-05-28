import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';

import styled from 'styled-components';

export default class Fight extends Component {
  state = {
    me: '',
    contender: '',
    myInitialAttack: '',
    enemiesLeft: [],
    result: '',
  };
  componentDidMount() {
    const me = this.props.me;
    const contender = this.props.contender;
    const myInitialAttack = this.props.me.attack;
    const enemiesLeft = this.props.enemies.filter(r => r.id !== me.id);
    this.setState({me, contender, myInitialAttack, enemiesLeft});
  }

  engage = () => {
    if (this.state.me.health - this.state.contender.attack > 1) {
      if (this.state.contender.health > 1) {
        const attackMe = this.state.me.attack + this.state.myInitialAttack;
        const healthContender =
          this.state.contender.health - this.state.me.attack;
        const healthMe = this.state.me.health - this.state.contender.attack;
        this.setState({
          me: {...this.state.me, attack: attackMe, health: healthMe},
          contender: {...this.state.contender, health: healthContender},
        });
      } else {
        if (this.state.enemiesLeft.length > 0) {
          const enemiesLeft = this.state.enemiesLeft.filter(
            r => r.id !== this.state.contender.id
          );
          const contender = enemiesLeft[0];
          this.setState({enemiesLeft, contender});
        }
      }
    } else {
      const healthMe = this.state.me.health - this.state.contender.attack;
      this.setState({me: {...this.state.me, health: healthMe}, result: 'lost'});
    }
  };
  render() {
    const {contender, me} = this.state;
    return (
      <CardListS>
        <CardNoClickMe>
          <Card character={me} border={'#00d3be'} />
        </CardNoClickMe>
        {this.state.enemiesLeft.length === 0 && (
          <Link to='/you'>
            <ButtonResultS onClick={this.props.setRobots}>
              You Win - Play Again
            </ButtonResultS>
          </Link>
        )}
        {this.state.result === 'lost' && (
          <Link to='/you'>
            <ButtonResultS onClick={this.props.setRobots}>
              You Loose - Play Again
            </ButtonResultS>
          </Link>
        )}
        {this.state.enemiesLeft.length > 0 && this.state.result !== 'lost' && (
          <>
            <ButtonFight onClick={this.engage}>🥊</ButtonFight>
            <CardNoClickContender>
              <Card character={contender} border={'#ed5a00'} />
            </CardNoClickContender>
          </>
        )}
      </CardListS>
    );
  }
}

const CardListS = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  place-items: center;
`;

const CardNoClickMe = styled.div`
  pointer-events: none;
`;

const CardNoClickContender = styled.div`
  pointer-events: none;
`;

const ButtonFight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  background-color: #f0f0f0;
  border: 2px solid #fafafa;
  box-shadow: 0px 6px 5px 0px rgba(64, 26, 0, 0.5);
  outline: none;
  transition: transform 0.25s cubic-bezier(0.17, 0.89, 0.37, 1.95);

  :hover {
    background-color: #e57f40;
  }

  :active {
    background-color: #c4330b;
    transform: scale(0.95);
  }
`;

const ButtonResultS = styled.button`
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  max-width: 80vw;
  color: #fff;
  background-color: rgba(204, 88, 16, 0.9);
  box-shadow: 0px 10px 7px 0px rgba(71, 39, 0, 0.5);
  margin-bottom: 2rem;
`;
