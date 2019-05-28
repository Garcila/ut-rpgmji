import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderS>
      <Link to='/' className='t'>
        <h1 className='r'>R</h1>
        <p>obot</p>
        <h1 className='title'>RPG</h1>
      </Link>
    </HeaderS>
  );
}

const HeaderS = styled.header`
  font-family: 'Share Tech Mono', monospace;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(255, 94, 0, 0.7) 0%,
      rgba(204, 88, 16, 0.9) 100%
    ),
    url('https://res.cloudinary.com/garcila/image/upload/c_scale,e_bgremoval,h_100/v1558116255/uot2/hw4/59080_-_Copy.jpg')
      no-repeat 50px;
  box-shadow: 0px 0px 8px 0px rgba(66, 45, 14, 0.25);

  .t {
    display: flex;
    color: #2b1c0a;
    cursor: pointer;
  }

  .t:hover {
    transform: scale(1.05);
  }

  .t:active {
    transform: scale(0.95);
  }
  .r {
    margin-right: 0%;
    text-decoration: underline;
  }
  .title {
    width: 100%;
    color: #fafafa;
    text-align: right;
    margin-right: 50px;
    text-decoration: underline;
  }

  p {
    border: 2px solid #2b1c0a;
    font-size: 0.9rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-top: 2px;
  }
`;
