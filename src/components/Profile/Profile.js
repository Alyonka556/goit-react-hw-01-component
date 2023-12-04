import styled from 'styled-components';

export const StyledProfile = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0a5bc33;
  padding: 100px 100px;
  border-radius: 20px;
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  min-width: 100%;
  height: 100%;
  box-shadow: 2px 3px 4px 2px gray;
  overflow: hidden;
  background-color: rgb(93 90 117);
  padding: 40px 40px;
  border: 3px solid grey;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7a7a89f2;
  margin: auto;
  padding: 20px;
`;

export const StyledName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 0;
  font-size: 50px;
  font-weight: 600;
`;

export const StyledTag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
  font-size: 38px;
  font-weight: 400;
  color: gray;
`;

export const SryledLocation = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px;
  font-size: 40px;
  font-weight: 500;
  color: gray;
`;

export const StyledStats = styled.ul`
  display: flex;
  max-width: 100%;
`;

export const StyledItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: auto;
  padding: 71px;
  border: 3px solid grey;
  box-shadow: 2px 3px 4px 3px gray;
`;

export const StyledLabel = styled.span`
  font-size: 40px;
  font-weight: 400;
  color: #d2d2f0f2;
  margin-bottom: 15px;
`;

export const StyledQuantity = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: black;
`;
