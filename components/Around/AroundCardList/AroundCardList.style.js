import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #445556;
`;

const GridContainer = styled.div`
  margin-bottom: 100px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export { Grid, GridContainer, LoaderContainer };
