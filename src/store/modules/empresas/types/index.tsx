export interface Empresa {
  id?: number;
  nome_Cliente?: string;
  email?: string;
  senha?: string;
  senhaConfirm?: string;
  nome_Empresa?: string;
  cnpj?: string;
  telefone?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complem?: string;
  // privacyTerms: boolean;
}

export interface EmpresaState {
  readonly data: Empresa[];
  readonly loading: boolean;
  readonly error: boolean;
}