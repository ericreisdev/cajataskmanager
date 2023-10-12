import styled from 'styled-components';

export const Container = styled.div`
    background-color: #f8f9fa;
    padding: 10px 40px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Para tornar a imagem redonda, se desejar */
    margin-right: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #3a57e8;
    margin: 0;


`;


/*const ButtonStyle = css`
padding: 4px;
color: #cceafe;
background-color: #3a57e8;

cursor: pointer;
border-radius: 5px;
text-align: center;
margin-bottom: 10px;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #eceffd;
  color: #4768e4;
}
`;

*/


