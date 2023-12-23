import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 60px;
  right: calc(50% - 680px);
  border-radius: 15px;
  background: var(--body-txt, #fff);
  display: flex;
  flex-direction: column;
  width: 232px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ProfMod = styled.div`
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
