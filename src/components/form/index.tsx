import gsap from "gsap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as style from "./style";
interface FormData {
  nome: string;
  email: string;
  senha: string;
  senhaConfirm: string;
  razaoSocial: string;
  cnpj: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  complem: string;
  privacyTerms: boolean;
}

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  const [isThre, setIsThre] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const watchPassword = watch("senha");
  console.log(watchPassword);
  

  const onSubmit = (data: FormData) => {};
  const onNext = (data: FormData) => {
    // JSON.stringify(data);
    nextStep();
    console.log(data);
  };

  useEffect(() => {
    if (currentStep === 1) {
      setIsOne(true);
      setIsTwo(false);
      setIsThre(false);
    }
    if (currentStep === 2) {
      setIsOne(true);
      setIsTwo(true);
      setIsThre(false);
    }
    if (currentStep === 3) {
      setIsOne(true);
      setIsTwo(true);
      setIsThre(true);
    }
  }, [currentStep]);

  const nextStep = () => {
    // gsap.to(".1", { rotation: 27, x: 100, duration: 1 });
    console.log('sla');
    setCurrentStep((prevStep) => prevStep + 1);
    
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    if (
      errors?.nome?.type ||
      errors?.email?.type ||
      errors?.senha?.type ||
      errors?.senhaConfirm?.type ||
      errors?.razaoSocial?.type ||
      errors?.cnpj?.type ||
      errors?.telefone?.type ||
      errors?.cep?.type ||
      errors?.endereco?.type ||
      errors?.numero?.type ||
      errors?.complem?.type === "required"
    ) {
      gsap.to(".error-message", { x: 20, duration: 1 });
    }
  }, [
    errors?.nome,
    errors?.email,
    errors?.email,
    errors?.senha,
    errors?.senhaConfirm,,
    errors?.razaoSocial,
    errors?.cnpj,
    errors?.telefone,
    errors?.cep,
    errors?.endereco,
    errors?.numero,
    errors?.complem
  ]);

  return (
    <style.FormContainer>
      <style.ProgressBar>
        {isOne ? (
          <style.ProgressBarItemActive>
            Configurações <br />
            da conta
          </style.ProgressBarItemActive>
        ) : (
          <style.ProgressBarItem>Configurações da conta</style.ProgressBarItem>
        )}
        {isTwo ? (
          <style.ProgressBarItemActive>
            Informações <br />
            da empresa
          </style.ProgressBarItemActive>
        ) : (
          <style.ProgressBarItem>
            Informações <br />
            da empresa
          </style.ProgressBarItem>
        )}
        {isThre ? (
          <style.ProgressBarItemActive>
            Endereço <br />
            da empresa
          </style.ProgressBarItemActive>
        ) : (
          <style.ProgressBarItem>
            Endereço <br />
            da empresa
          </style.ProgressBarItem>
        )}
      </style.ProgressBar>
      <style.StyledFieldset className="1" step={1} currentStep={currentStep}>
        <style.H2>Crie sua conta 🚀</style.H2>
        <style.Wrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.nome && "input-error"}
              type="text"
              placeholder="Nome completo"
              {...register("nome", { required: true })}
            />
            {errors?.nome?.type === "required" && (
              <p className="error-message">Nome é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.email && "input-error"}
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors?.email?.type === "required" && (
              <p className="error-message">Email é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.senha && "input-error"}
              type="password"
              placeholder="Senha"
              {...register("senha", { required: true })}
            />
            {errors?.senha?.type === "required" && (
              <p className="error-message">Senhha é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              // style={{ marginBottom: "20px" }}

              className={errors?.senhaConfirm && "input-error"}
              type="password"
              placeholder="Confirme a senha"
              {...register("senhaConfirm", { 
                required: true,
                validate: (value) => value === watchPassword, })}
            />
            {errors?.senhaConfirm?.type === "required" && (
              <p className="error-message">Confirme a senha.</p>
            )}
            {errors?.senhaConfirm?.type === "validate" && (
          <p className="error-message">Senhas não conferem.</p>
        )}
          </style.InputWrapper>
        </style.Wrapper>
        <style.NextButton
          type="button"
          onClick={() => handleSubmit(onNext)()}
          value="Próximo"
        />
      </style.StyledFieldset>
      <style.StyledFieldset step={2} currentStep={currentStep}>
        <style.H2>Informações da empresa 🏢</style.H2>
        <style.Wrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.razaoSocial && "input-error"}
              type="text"
              placeholder="Nome da empresa (Razão Social)"
              {...register("razaoSocial", { required: true })}
            />
            {errors?.razaoSocial?.type === "required" && (
              <p className="error-message">razaoSocial é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.cnpj && "input-error"}
              type="text"
              placeholder="cnpj"
              {...register("cnpj", { required: true })}
            />
            {errors?.cnpj?.type === "required" && (
              <p className="error-message">CNPJ é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.telefone && "input-error"}
              type="text"
              placeholder="telefone"
              {...register("telefone", { required: true })}
            />
            {errors?.telefone?.type === "required" && (
              <p className="error-message">Telefone é obrigatório.</p>
            )}
          </style.InputWrapper>
        </style.Wrapper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <style.ButtonWrapper>
            <style.PrevButton type="button" onClick={prevStep} value="Voltar" />
            <style.NextButton
              type="submit"
              onClick={handleSubmit(onNext)}
              value="Próximo"
            />
          </style.ButtonWrapper>
        </div>
      </style.StyledFieldset>
      <style.StyledFieldset step={3} currentStep={currentStep}>
        <style.H2>Endereço 📪</style.H2>
        <style.Wrapper>
        <style.InputWrapper>
            <style.Input
              className={errors?.cep && "input-error"}
              type="text"
              placeholder="cep"
              {...register("cep", { required: true })}
            />
            {errors?.cep?.type === "required" && (
              <p className="error-message">CEP é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.AddresWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.endereco && "input-error"}
              type="text"
              placeholder="endereco"
              {...register("endereco", { required: true })}
            />
            {errors?.endereco?.type === "required" && (
              <p className="error-message">Endereco é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.numero && "input-error"}
              type="text"
              placeholder="numero"
              {...register("numero", { required: true })}
            />
            {errors?.numero?.type === "required" && (
              <p className="error-message">Numero é obrigatório.</p>
            )}
          </style.InputWrapper>
          </style.AddresWrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.complem && "input-error"}
              type="text"
              placeholder="complem"
              {...register("complem", { required: true })}
            />
            {errors?.complem?.type === "required" && (
              <p className="error-message">Complemento é obrigatório.</p>
            )}
          </style.InputWrapper>
        </style.Wrapper>
        <style.ButtonWrapper>
          <style.PrevButton type="button" onClick={prevStep} value="Voltar" />
          <style.SubmitButton>Concluir</style.SubmitButton>
        </style.ButtonWrapper>
      </style.StyledFieldset>
    </style.FormContainer>
  );
};

export default Form;
