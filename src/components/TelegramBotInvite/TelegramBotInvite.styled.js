import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  padding: 24px 16px;
  text-align: center;
  border-radius: 10px;
  background: ${props => props.theme.colors.secondary2};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const TextClick = styled(Text)`
  margin-top: 12px;
  color: ${props => props.theme.colors.primeryBlue};
`;

export const Btn = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 10px 30px;

  font-size: 18px;
  text-decoration: none;
  line-height: 1.33;
  color: ${props => props.theme.colors.primeryWhite};

  border-radius: 10px;
  background: ${props => props.theme.colors.primeryBlue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;
