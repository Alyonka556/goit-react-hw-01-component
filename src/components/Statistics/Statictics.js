import styled from 'styled-components';

export const StyledStatistics = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a0a5bc33;
  padding: 100px 40px;
  border-radius: 20px;
`;

export const StyledTitle = styled.h2`
  font-size: 54px;
  font-weight: 600;
  color: #edd4d4;
  padding: 0 0 60px;
`;

export const StyledStatList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const StyledItems = styled.li`
  padding: 20px 35px;
  border: 3px solid grey;
  &:hover {
    transform: scale(1.02);
    box-shadow: 5px -5px 10px #8b8b8b, -5px 5px 10px #ffffff;
  }
`;

export const StyledLabel = styled.p`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edd4d4;
  font-size: 40px;
  font-weight: 400;
`;

export const StyledPercentuage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edd4d4;
  font-size: 54px;
  font-weight: 600;
`;
