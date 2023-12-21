import { useSelector } from "react-redux";
import Grid from "../components/Grid";
import { EmpresasState } from "../store";

const Pagination = (): any => {
  const empresas = useSelector((state: EmpresasState) => state.empresa.data);
  const data = empresas;
  return <Grid />;
};

export default Pagination;
