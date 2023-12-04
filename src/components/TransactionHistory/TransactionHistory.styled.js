import styled from 'styled-components';

export const StyledTransacrions = styled.table`
  margin: 0;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  background-color: #a0a5bc33;
  padding: 100px 100px;
  border-radius: 20px;
`;

export const StyledTableThead = styled.thead`
  width: 100%;
  box-shadow: 2px 3px 4px 2px gray;
  background-color: rgb(93 90 117);
  border: 3px solid grey;
`;

export const StyledHeadTr = styled.tr`
  border-bottom: 2px solid #ccc;
  border: 3px solid grey;
`;

export const StyledTitle = styled.th`
  padding: 20px 45px;
  border: 3px solid grey;
`;

export const StyledBody = styled.tbody`
  background-color: #a0a5bc33;
  border: 3px solid grey;
`;

export const StyledKeyId = styled.tr`
  &:nth-child(even) {
    background-color: #93a0c5f0;
    border: 3px solid grey;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 5px grey, -5px -5px 5px grey;
  }
`;

export const StyledValue = styled.td`
  padding: 20px 45px;
  border: 3px solid grey;
`;
