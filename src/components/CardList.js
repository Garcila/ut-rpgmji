import React from 'react';
import Card from './Card';
import styled from 'styled-components';

export default function CardList({allCharacters, setCharacter, h}) {
  return (
    <CardListS>
      {allCharacters.map(character => {
        return (
          <Card
            h={h}
            setCharacter={setCharacter}
            key={character.id}
            character={character}
          />
        );
      })}
    </CardListS>
  );
}

const CardListS = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  place-items: center;
`;
