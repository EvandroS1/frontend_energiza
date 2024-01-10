import styled from 'styled-components';


export const BigWrapper = styled.div`
width: 98%;
margin-inline: auto;
height: 23.6rem !important;
overflow: auto;
border-radius: 1rem;
box-shadow: 0 0 .2rem rgba(255, 255, 255, 0.808);
@media (min-width: 1800px) {
  /* Estilos específicos para telas maiores que 1500px */
  /* width: 80%; */
  height: 60rem !important;
  /* Adicione mais estilos conforme necessário */
}

`;


export const Wrapper = styled.div`
width: 100%;
height: 30rem;
/* background-color: red; */
`;

// Estilos para a tabela
export const Table = styled.table`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
  top: 0;
  z-index: 100;
  
`;

// Estilos para a linha de cabeçalho
export const TableHeadRow = styled.tr`
  background: rgb(237, 237, 237); /* Valor de --bg2 */
  display: flex;
  
`;

// Estilos para as células de cabeçalho
export const TableHeadCell = styled.th`
  padding: 8px; /* Valor de --sm-spacing */
  color: rgb(33, 33, 33); /* Valor de --text */
  font-weight: 600;
  width: 16rem;
  font-size: 14px;
  
`;

// Estilos para o corpo da tabela
export const TableRow = styled.tr`
  background: rgba(255, 255, 255, 0.452)alor de --white;
  /* width: 100%; */
  display: flex;
  
`;

// Estilos para as células do corpo
export const TableCell = styled.td`
display: flex;
  padding: 8px; /* Valor de --sm-spacing */
  font-size: 14px;
  width: 16rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  
  /* background-color: red; */
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