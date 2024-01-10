import { useDispatch } from "react-redux";
import * as style from "./style";
import { getRequest, searchRequest } from "../../store/modules/empresas/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Nav = () => {
  const dispatch = useDispatch();
  const push = useNavigate()
  const [valorInput, setValorInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
    
  };
  useEffect(() => {
    console.log('z',valorInput);
    if(valorInput === ''){
      dispatch(getRequest())
    }
}, [valorInput])

  const search = ( data: string) => {
    dispatch(searchRequest(data));
  };

  const handleImg = () => {
    push('/')
  }

  return (
    <style.Wrapper>
      <style.Img onClick={handleImg} width={100} src="/src/assets/logo.webp" alt="" />
      <style.Form onSubmit={() => search(valorInput)}>
        <style.SearchInput
          type="text"
          placeholder="Search"
          value={valorInput}
          onChange={handleInputChange}
        />
        <style.SearchButton
          type="button"
          value="enviar"
          onClick={() => search(valorInput)}
        />
      </style.Form>
    </style.Wrapper>
  );
};

export default Nav;
