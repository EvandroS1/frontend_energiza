import { useSelector } from "react-redux";
import { EmpresasState } from "../../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRequest, getRequest } from "../../store/modules/empresas/actions";
import GridLines from "../GridLines";
import * as style from './style'
import { Empresa } from "../../store/modules/empresas/types";

const Grid = () => {
  const empresas = useSelector((state: EmpresasState) => state.empresa.data.data);
  const dispatch = useDispatch();
  const [data, setData] = useState<Empresa[]>([]);

  console.log(empresas);

  useEffect(() => {
    dispatch(getRequest());
  }, []);
  
  useEffect(() => {
    // Certifique-se de que empresas é um array antes de atribuir a data
    if (Array.isArray(empresas)) {
      setData(empresas);
    }
  }, [empresas]);
  
  const  handleExcluir = (data: any) => {
    dispatch(deleteRequest(data))
  }
  const  handleEditar = (data: any) => {
    console.log(data);
    
  }

  return (
    <div>
      <h1>TOTAL:{data.length}</h1>   
      <style.BigWrapper className="">
        <style.Wrapper>
          {data.map((empresa) => (
            // <GridLines key={empresa.id} empresa={empresa} />
            <style.Table>
            <style.TableHead>
              <style.TableHeadRow>
                <style.TableHeadCell>Nome</style.TableHeadCell>
                <style.TableHeadCell>Senha</style.TableHeadCell>
                <style.TableHeadCell>Empresa</style.TableHeadCell>
                <style.TableHeadCell>CNPJ</style.TableHeadCell>
                <style.TableHeadCell>CEP</style.TableHeadCell>
                <style.TableHeadCell>Endereço</style.TableHeadCell>
                <style.TableHeadCell>Numero</style.TableHeadCell>
                <style.TableHeadCell>Telefone</style.TableHeadCell>
                <style.TableHeadCell>Email</style.TableHeadCell>
                <style.TableHeadCell>Editar</style.TableHeadCell>
                <style.TableHeadCell>Excluir</style.TableHeadCell>
              </style.TableHeadRow>
            </style.TableHead>
            <tbody>
        <style.TableRow>
          <style.TableCell>{empresa.nome_Cliente}</style.TableCell>
          <style.TableCell>{empresa.senha}</style.TableCell>
          <style.TableCell>{empresa.nome_Empresa}</style.TableCell>
          <style.TableCell>{empresa.cnpj ? empresa.cnpj : ""}</style.TableCell>
          <style.TableCell>{empresa.cep}</style.TableCell>
          <style.TableCell>{empresa.endereco}</style.TableCell>
          <style.TableCell>{empresa.numero}</style.TableCell>
          <style.TableCell>{empresa.telefone}</style.TableCell>
          <style.TableCell>{empresa.email}</style.TableCell>
          <style.TableCell><style.EditButton onClick={() => handleEditar(empresa.cnpj)}>Editar</style.EditButton></style.TableCell>
          <style.TableCell><style.ExcluirButton onClick={() => handleExcluir(empresa.id)}>Excluir</style.ExcluirButton></style.TableCell>
      
        </style.TableRow>
            </tbody>
          </style.Table>
          ))}
        </style.Wrapper>
      </style.BigWrapper>
      
    </div>
  );
};

export default Grid;
