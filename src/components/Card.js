import React from 'react';
import styled from 'styled-components';

export default function Card({character, setCharacter, h, border}) {
  return (
    <CardS
      style={{
        borderBottom: `1px solid ${border}`,
        borderRight: `15px solid ${border}`,
      }}
      onClick={() => setCharacter(character, h)}
    >
      <ImageS src={character.url} alt='robot' />
      <NameS>{character.name}</NameS>
      <StatsS>
        <p>💛{character.health}</p>
        <p>🔫{character.attack}</p>
      </StatsS>
    </CardS>
  );
}

const CardS = styled.figure`
  max-width: 149px;
  box-shadow: 2px 2px 5px -3px rgba(92, 92, 92, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  transition: transform 0.25s cubic-bezier(0.17, 0.89, 0.37, 1.95);

  :hover {
    transform: scale(1.1);
  }
`;

const ImageS = styled.img`
  background: rgb(245, 238, 236);
  background: linear-gradient(
    180deg,
    rgba(245, 238, 236, 1) 0%,
    rgba(255, 239, 230, 1) 66%,
    rgba(255, 173, 122, 1) 100%
  );
`;

const NameS = styled.h2`
  padding: 10px;
  margin: 0;
  text-align: center;
  background: rgb(255, 94, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 94, 0, 1) 0%,
    rgba(204, 88, 16, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
`;

const StatsS = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
  color: #3d3d3d;
  font-weight: bold;
  text-align: center;
  padding: 15px 0;

  p {
    flex: 1;
  }
  p:first-of-type {
    border-right: 1px solid #afafaf;
  }
`;
