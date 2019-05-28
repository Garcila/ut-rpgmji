import React from 'react';
import CardList from '../components/CardList';
import styled from 'styled-components';

export default function ChooseYou({allCharacters, setCharacter, history}) {
  //TODO: REFACTOR CHOOSE YOU AND CHOOSE OPPONENT INTO ONE COMPONENT
  return (
    <YouS>
      <CardList
        allCharacters={allCharacters}
        setCharacter={setCharacter}
        h={history}
      />
    </YouS>
  );
}

const YouS = styled.section`
  flex: 1;
  display: flex;
`;
