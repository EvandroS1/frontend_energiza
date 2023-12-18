import styled from "styled-components";
// import css from "../App.css";

export const FormStep = styled.form`

`;

export const FormContainer = styled.form`
  width: 700px;
  max-height: 1000px;
  min-height: 600px;
  margin: 50px auto;
  text-align: center;
  position: relative;
`;

export const ProgressBar = styled.ul`
  margin-bottom: 30px;
  width: 100%;
  overflow: hidden;
  counter-reset: step;
`;

export const ProgressBarItemActive = styled.li`
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
  left: -2rem;

  &::before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    line-height: 20px;
    display: block;
    font-size: 10px;
    color: #333;
    background: white;
    border-radius: 0.5rem;
    margin: 0 auto 5px auto;

    background: green;
    color: white;
    transition: background 4s ease; /* Adicionando a transição para a propriedade background */
  }

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1;

    background: green;
    color: white;
    transition: background 4s ease; /* Adicionando a transição para a propriedade background */
  }

  &:first-child:after {
    /* Conector não necessário antes do primeiro passo */
    content: none;
  }
`;

export const ProgressBarItem = styled.li`
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
  left: -2rem;

  &:before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    line-height: 20px;
    display: block;
    font-size: 10px;
    color: #333;
    background: white;
    border-radius: 0.5rem;
    margin: 0 auto 5px auto;
  }

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1;
  }
  &:first-child:after {
    /*connector not needed before the first step*/
    content: none;
  }
`;

export const StyledFieldset = styled.fieldset<{ step: number; currentStep: number }>`
  background: #ffffff;
  border: 0 none;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  height: ${(props) => (props.currentStep === 1 ? "650px" : "600px")};
  margin: 0 10%;
  /* padding-bottom: 10rem; */
  position: absolute;
  pointer-events: ${(props) =>
    props.currentStep === props.step ? "initial" : "none"};
  opacity: ${(props) => (props.currentStep === props.step ? "1" : "0")};
`;
export const Wrapper = styled.div`
transition: all 100ms ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label= styled.label`
  display: flex;
  margin-left: 4px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  color: green;
`;


export const Input = styled.input`
  padding: 20px;
  border: 1px solid black;
  box-shadow: 2px 4px 1px green;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-size: 18px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;
export const NextButton = styled.input`
  width: 15rem;
  height: 4rem;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 10px;
  margin: 10px 5px;
  text-decoration: none;
  font-size: 14px;

  &:hover,
  &:focus {
    background-color: black;
    transition: 300ms;
  }
`;

export const PrevButton = styled.input`
  width: 15rem;
  height: 4rem;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 10px;
  margin: 10px 5px;
  text-decoration: none;
  font-size: 14px;

  &:hover,
  &:focus {
    background: #000000;
    transition: 300ms;
  }
`;

export const SubmitButton = styled.input`
  width: 15rem;
  height: 4rem;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 10px;
  margin: 10px 5px;
  text-decoration: none;
  font-size: 14px;

  &:hover,
  &:focus {
    background: #00ff00;
    color: black;
    transition: 300ms;
  }
`;

export const H2 = styled.h2`
  color: black;
  
`;
export const H3 = styled.h3`
  color: black;
`;
export const AddresWrapper = styled.div`
display: grid;
gap: 1rem;
grid-template-columns: 8fr 3fr;
`;

export const InputWrapper = styled.div`
transition: all 2s ease-out;
position: relative;
`;