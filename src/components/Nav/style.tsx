import styled from "styled-components";

export const Form = styled.form`
display: flex;
align-items: center;
gap: 1rem;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
padding-right: 10rem;
`;

export const Img = styled.img`
cursor: pointer;
&:hover {
  transform: scale(1.3);
  transition: 300ms;
  }
`;

export const SearchInput = styled.input`
height: 2rem;
border-radius: 7px;
outline: none;
`;
export const SearchButton = styled.input`
height: 2rem;
transition: 300ms;
border-radius: 7px;
cursor: pointer;
&:hover {
  transform: scale(1.04);
  background-color: black;
}
`;