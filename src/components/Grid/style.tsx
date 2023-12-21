import styled from 'styled-components';


export const BigWrapper = styled.div`
width: 90%;
margin-inline: auto;
height: 30rem;
overflow: auto;

`;


export const Wrapper = styled.div`
width: 100rem;
height: 30rem;
/* background-color: red; */
`;

// Estilos para a tabela
export const Table = styled.table`
  width: 100%;
  /* background-color: #000000; */
  margin-top: 1rem;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px; /* Valor de --border-radius */
`;

// Estilos para o cabeçalho da tabela
export const TableHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

// Estilos para a linha de cabeçalho
export const TableHeadRow = styled.tr`
  background: rgb(237, 237, 237); /* Valor de --bg2 */
`;

// Estilos para as células de cabeçalho
export const TableHeadCell = styled.th`
  

  padding: 8px; /* Valor de --sm-spacing */
  color: rgb(33, 33, 33); /* Valor de --text */
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
`;

// Estilos para o corpo da tabela
export const TableRow = styled.tr`
  background: rgba(255, 255, 255, 0.452)alor de --white
`;

// Estilos para as células do corpo
export const TableCell = styled.td`
  padding: 8px; /* Valor de --sm-spacing */
  font-size: 14px;
  width: 200px;
`;

// Media query para telas menores
export const ResponsiveTable = styled(Table)`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const EditButton = styled.button`
background-color: green;
border: none;
border-radius: .2rem;
height: 2rem;
width: 4rem;

&:hover {
  background-color: #005e00;
  cursor: pointer;
  transform: scale(1.1);
  transition: 300ms;
}
`;
export const ExcluirButton = styled.button`
background-color: red;
color: black;
font-weight: 600;
border: none;
border-radius: .2rem;
height: 2rem;
width: 4rem;
&:hover {
  background-color: #880000;
  cursor: pointer;
  color: white;
  transform: scale(1.1);
  transition: 300ms;
}
`;

