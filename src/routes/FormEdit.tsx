import { useDispatch, useSelector } from "react-redux";
import EditForm from "../components/EditForm";
import { EmpresasState } from "../store";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getRequest } from "../store/modules/empresas/actions";
import { Empresa } from "../store/modules/empresas/types";

const FormEdit = (): any => {
  const empresas = useSelector((state: EmpresasState) => state.empresa.data.data);
  const { id } = useParams()
  const dispatch = useDispatch();
  const [data, setData] = useState<Empresa[]>([]);
  
  useEffect(() => {
      dispatch(getRequest())
    
    }, [])
    const idn = Number(id)

  useEffect(() => {  
    // Certifique-se de que empresas é um array antes de atribuir a data
    if (Array.isArray(empresas)) {
      setData(empresas);
      
    }
  }, [empresas]);
  
  
  const empresa = data.filter( data => data.id === idn)
    console.log('single', empresa);

  return <div>
    {empresa.map((empresa) => (
      <EditForm empresa={empresa} key={empresa.id} />
    ))}
  </div>

}

export default FormEdit;