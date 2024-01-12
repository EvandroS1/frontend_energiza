import { useSelector } from "react-redux";
import { EmpresasState } from "../../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteRequest, getRequest } from "../../store/modules/empresas/actions";
import * as style from './style'
import { Empresa } from "../../store/modules/empresas/types";

const Grid = () => {
  const empresas = useSelector((state: EmpresasState) => state.empresa.data);
  console.log('log do grid', empresas);

  
  const dispatch = useDispatch();
  const [data, setData] = useState<Empresa[]>([]);
  const push = useNavigate()

  useEffect(() => {
    dispatch(getRequest());
  }, []);
  
  useEffect(() => {
    // Certifique-se de que empresas é um array antes de atribuir a data
    if (Array.isArray(empresas)) {
      setData(empresas);
    } 
  }, [empresas]);
  // useEffect(() => {
  //   const search = [empresas]
  //   if(data.length === 1) {
  //     setData(search);
  //   console.log('data',search);}

  // }, [empresas]);
  
  
  const  handleExcluir = (data: any) => {
    dispatch(deleteRequest(data))
      location.reload()
  }
  const  handleEditar = (data: any) => {
    push(`/edit/${data}`);
    
  }

  return (
    <div>
      <h1>{data.length}</h1>   
      <style.BigWrapper className="">
        <style.Wrapper>
            <style.Table>
            <style.TableHead>
              <style.TableHeadRow>
                <style.TableHeadCell>Nome</style.TableHeadCell>
                <style.TableHeadCell>Empresa</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '140px'}}>CNPJ</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>CEP</style.TableHeadCell>
                <style.TableHeadCell>Endereço</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>Numero</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>Telefone</style.TableHeadCell>
                <style.TableHeadCell>Email</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>Complemento</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>Editar</style.TableHeadCell>
                <style.TableHeadCell style={{'width': '100px'}}>Excluir</style.TableHeadCell>
              </style.TableHeadRow>
            </style.TableHead>
          {data.map((empresa) => (
            <tbody key={empresa.id}>
        <style.TableRow>
<>
          <style.TableCell>{empresa.nome_Cliente}</style.TableCell>
          <style.TableCell>{empresa.nome_Empresa}</style.TableCell>
          <style.TableCell style={{'width': '140px'}}>{empresa.cnpj ? empresa.cnpj : ""}</style.TableCell>
          <style.TableCell style={{'width': '100px'}}>{empresa.cep}</style.TableCell>
          <style.TableCell>{empresa.endereco}</style.TableCell>
          <style.TableCell style={{'width': '100px'}}>{empresa.numero? empresa.numero : "null"}</style.TableCell>
          <style.TableCell style={{'width': '100px'}}>{empresa.telefone}</style.TableCell>
          <style.TableCell>{empresa.email}</style.TableCell>
          <style.TableCell style={{'width': '100px'}}> {empresa.complem}</style.TableCell>
          <style.TableCell style={{'width': '100px'}}><style.EditButton onClick={() => handleEditar(empresa.id)}>Editar</style.EditButton></style.TableCell>
          <style.TableCell style={{'width': '100px'}}><style.ExcluirButton onClick={() => handleExcluir(empresa.id)}>Excluir</style.ExcluirButton></style.TableCell>
          </>
      
        </style.TableRow>
            </tbody>
          ))}
            </style.Table>
        </style.Wrapper>
      </style.BigWrapper>
      
    </div>
  );
};

export default Grid;
