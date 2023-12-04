import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0a5bc33;
  padding: 100px 100px;
  border-radius: 20px;
`;

export const StyledCard = styled.div`
  border-radius: 20px;
  width: 800px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 3px 4px 2px gray;
  overflow: hidden;
  background-color: rgb(93 90 117);
  padding: 40px 40px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledElement = styled.li`
  display: flex;
  padding: 20px 20px;
  gap: 30px;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #b1afd6;
  border-radius: 8px;
  box-shadow: 20px -20px 25px #8b8b8b, -20px 20px 25px #ffffff;
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline === true ? 'green' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #93a0c5f0;
  padding: 20px 20px;
  box-shadow: 5px 5px 10px rgb(25, 25, 25), -5px -5px 10px rgb(60, 60, 60);
  transition: transform 0.7s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const StyledName = styled.p`
  font-size: 48px;
  font-weight: 600;
`;
