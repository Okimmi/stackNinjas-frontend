import styled from 'styled-components';
import {theme} from '../../components/GlobalStyle.js'

export const P = styled.h6`
    color: ${theme.colors.primeryBlue};
`;
export const Logo = styled.img`
    width: 40px;
    height: 48px;
    margin-right: 4px;
`;
export const LogoDiv = styled.div`
    width: 102px;
    height: 48px;
    display: flex;
    align-items: center;
`;
export const Icon = styled.div`
    background-color: grey;
    width: 16px;
    height: 16px;
`
export const Avatar = styled.div`
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: grey;
    margin-right: 4px;
    margin-left: 8px
`
export const UserName = styled.p`
    color: ${theme.colors.primeryBlack};
    width: 66px;
    height: 20px;
    font-size: 14px
`
export const UserDiv = styled.div`
    width: 122px;
    height: 28px;
    display: flex;
    align-items: center;
`;
export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const MyDailyNormaDiv = styled.div`
    margin-top: 24px;
    border-radius: 10px;
    width: 164px;
    height: 74px;
    background-color: ${theme.colors.primeryWhite};
    border: 1px solid ${theme.colors.secondary2};
    padding: 7px 19px 7px 19px;
`;
export const MyDailyNorma = styled.p`
    font-size: 18px;
    height: 24px;
    margin-bottom: 12px;
`;
export const Litr = styled.p`
    font-size: 20px;
    height: 22px;
    color: ${theme.colors.primeryBlue};
`;
export const Edit = styled.p`
    font-size: 16px;
    height: 20px;
    margin-left: 16px;
    color: #8BAEFF;
`;
export const Div = styled.div`
display: flex;
align-items: end;
`;
export const Img = styled.img``