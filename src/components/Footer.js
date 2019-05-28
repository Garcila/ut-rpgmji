import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return <FooterS>Made by a non 🤖 on a 💻</FooterS>;
}

const FooterS = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: #913308;
  background: linear-gradient(
    180deg,
    rgba(255, 94, 0, 1) 0%,
    rgba(180, 78, 12, 1) 100%
  );
  text-align: center;
  border-top: 5px solid tomato;
  color: #fafafa;
  font-size: 0.8rem;
  text-align: right;
  padding: 5px 2rem;

  font-family: 'Share Tech Mono', monospace;
`;
