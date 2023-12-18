export interface Empresa {
  nome?: string;
  email?: string;
  senha?: string;
  senhaConfirm?: string;
  razaoSocial?: string;
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