import { Empresa } from "../store/modules/empresas/types";

const GridLines: React.FC<{empresa: Empresa}> = ({empresa}): any => {
  return <h1>{empresa.nome_Empresa} aaaaa</h1>
}
export default GridLines;