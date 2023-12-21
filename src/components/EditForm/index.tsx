import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";

// Importa o CSSRulePlugin
import * as style from "./style";
import { useDispatch } from "react-redux";
import { formData, postRequest } from "../../store/modules/empresas/actions";
import { Empresa } from "../../store/modules/empresas/types";
interface FormData {
  nome_Cliente: string;
  email: string;
  senha: string;
  senhaConfirm: string;
  nome_Empresa: string;
  cnpj: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  complem: string;
  privacyTerms: boolean;
}

const EditForm: React.FC<{ empresa: Empresa }> = ({ empresa }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState<Empresa>({
  nome_Cliente: empresa.nome_Cliente,
  email: empresa.email,
  senha: empresa.senha,
  senhaConfirm: empresa.senhaConfirm,
  nome_Empresa: empresa.nome_Empresa,
  cnpj: empresa.cnpj,
  telefone: empresa.telefone,
  cep: empresa.cep,
  endereco: empresa.endereco,
  numero: empresa.numero,
  complem: empresa.complem,
  });
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(true);
  const [isThre, setIsThre] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();

  const watchPassword = watch("senha");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (data: FormData) => {
    dispatch(postRequest(data));
  };
  const onNext = (data: FormData) => {
    dispatch(formData(data));
    nextStep();
  };

  useEffect(() => {
    // if (currentStep === 1) {
    //   setIsOne(false);
    //   setIsTwo(false);
    //   setIsThre(false);
    // }
    // if (currentStep === 2) {
    //   setIsOne(false);
    //   setIsTwo(false);
    //   setIsThre(false);
    // }
    // if (currentStep === 3) {
    //   setIsOne(false);
    //   setIsTwo(false);
    //   setIsThre(false);
    // }
    if (currentStep === 1) {
      setIsOne(true); //true
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
    if (currentStep === 1) {
      gsap.fromTo(
        ".one",
        {
          opacity: 1,
          duration: 1,
          x: 0,
        },
        {
          opacity: 0,
          scale: 0.7,
          x: -200,
          perspective: 900,
          duration: 1,
          rotateY: -20,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".two",
        {
          x: 200,
          scale: 0.7,
          opacity: 0,
          perspective: 900,
        },
        {
          x: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          opacity: 1,
          // rotationY: -20,
        }
      );
    }
    if (currentStep === 2) {
      gsap.fromTo(
        ".two",
        {
          opacity: 1,
          duration: 1,
          x: 0,
        },
        {
          opacity: 0,
          scale: 0.7,
          x: -200,
          perspective: -800,
          duration: 1,
          rotateY: 20,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".thre",
        {
          x: 200,
          scale: 0.7,
          opacity: 0,
          perspective: 900,
          // transformOrigin: "left center",
          rotationY: -20,
        },
        {
          x: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          opacity: 1,
          rotationY: -20,
        }
      );
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 2) {
      gsap.fromTo(
        ".one",
        { opacity: 0, scale: 0.7, x: -200, perspective: 900, rotateY: -20 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          x: 0,
          perspective: 0,
          rotateY: 0,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".two",
        { x: 0, scale: 1, duration: 1 },
        { x: 200, scale: 0.7, opacity: 0, ease: "back.out(1.7)" }
      );
    }
    if (currentStep === 3) {
      gsap.fromTo(
        ".two",
        { opacity: 0, scale: 0.7, x: -200, perspective: 900, rotateY: -20 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          x: 0,
          perspective: 0,
          rotateY: 0,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".thre",
        { x: 0, scale: 1, duration: 1 },
        { x: 200, scale: 0.7, opacity: 0, ease: "back.out(1.7)" }
      );
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {}, [nextStep]);
  useEffect(() => {
    if (
      errors.nome_Cliente?.type ||
      errors?.email?.type ||
      errors?.senha?.type ||
      errors?.senhaConfirm?.type ||
      errors?.nome_Empresa?.type ||
      errors?.cnpj?.type ||
      errors?.telefone?.type ||
      errors?.cep?.type ||
      errors?.endereco?.type ||
      errors?.numero?.type ||
      errors?.complem?.type === "required"
    ) {
      gsap.to(".error-message", { x: 20, duration: 0.3 });
    }
  }, [
    errors?.nome_Cliente,
    errors?.email,
    errors?.senha,
    errors?.senhaConfirm,
    errors?.nome_Empresa,
    errors?.cnpj,
    errors?.telefone,
    errors?.cep,
    errors?.endereco,
    errors?.numero,
    errors?.complem,
    watchPassword,
  ]);

  console.log(inputValue.nome_Cliente?.length);
  

  return (
    <div>
      <style.FormContainer>
        <style.ProgressBar>
          {isOne ? (
            <style.ProgressBarItemActive>
              Configurações <br />
              da conta
            </style.ProgressBarItemActive>
          ) : (
            <style.ProgressBarItem>
              Configurações da conta
            </style.ProgressBarItem>
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
        <style.StyledFieldset
          className="one"
          step={1}
          currentStep={currentStep}
        >
          <style.H2>Crie sua conta 🚀</style.H2>
          <style.Wrapper>
            <style.InputWrapper>
              <style.Label htmlFor="nome_Cliente">Nome completo.</style.Label>
              <style.Input
                className={errors?.nome_Cliente && "input-error"}
                type="text"
                placeholder="Nome completo"
                value={inputValue.nome_Cliente}
                {...register("nome_Cliente", { required: isOne })}
                onChange={handleInputChange}
              />
              {errors?.nome_Cliente?.type === "required" && (
                <p className="error-message">Nome é obrigatório.</p>
              )}
              {/* {inputValue.nome_Cliente.length < 1 ? (
                <p className="error-message">Nome é obrigatório.</p>
              ) : null
              } */}
            </style.InputWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="email">Email.</style.Label>
              <style.Input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Email"
                value={empresa.email}
                {...register("email", { required: isOne })}
              />
              {errors?.email?.type === "required" && (
                <p className="error-message">Email é obrigatório.</p>
              )}
            </style.InputWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="senha">Senha.</style.Label>
              <style.Input
                className={errors?.senha && "input-error"}
                type="password"
                placeholder="Senha"
                {...register("senha", { required: isOne })}
              />
              {errors?.senha?.type === "required" && (
                <p className="error-message">Senha é obrigatório.</p>
              )}
            </style.InputWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="senhaConfirm">
                Confirme a senha.
              </style.Label>
              <style.Input
                // style={{ marginBottom: "20px" }}
                className={errors?.senhaConfirm && "input-error"}
                type="password"
                placeholder="Confirme a senha"
                {...register("senhaConfirm", {
                  required: isOne,
                  validate: (value) => value === watchPassword,
                })}
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
        <style.StyledFieldset
          className="two"
          step={2}
          currentStep={currentStep}
        >
          <style.H2>Informações da empresa 🏢</style.H2>
          <style.Wrapper>
            <style.InputWrapper>
              <style.Label htmlFor="nome_Empresa">Razão social.</style.Label>
              <style.Input
                className={errors?.nome_Empresa && "input-error"}
                type="text"
                placeholder="Nome da empresa (Razão Social)"
                {...register("nome_Empresa", { required: isTwo })}
              />
              {errors?.nome_Empresa?.type === "required" && (
                <p className="error-message">razaoSocial é obrigatório.</p>
              )}
            </style.InputWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="cnpj">CNPJ.</style.Label>
              <style.Input
                className={errors?.cnpj && "input-error"}
                type="text"
                placeholder="CNPJ"
                {...register("cnpj", { required: isTwo })}
              />
              {errors?.cnpj?.type === "required" && (
                <p className="error-message">CNPJ é obrigatório.</p>
              )}
            </style.InputWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="telefone">Telefone.</style.Label>
              <style.Input
                className={errors?.telefone && "input-error"}
                type="text"
                placeholder="Telefone"
                {...register("telefone", { required: isTwo })}
              />
              {errors?.telefone?.type === "required" && (
                <p className="error-message">Telefone é obrigatório.</p>
              )}
            </style.InputWrapper>
          </style.Wrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <style.ButtonWrapper>
              <style.PrevButton
                type="button"
                onClick={prevStep}
                value="Voltar"
              />
              <style.NextButton
                type="button"
                onClick={() => handleSubmit(onNext)()}
                value="Próximo"
              />
            </style.ButtonWrapper>
          </div>
        </style.StyledFieldset>
        <style.StyledFieldset
          className="thre"
          step={3}
          currentStep={currentStep}
        >
          <style.H2>Endereço 📪</style.H2>
          <style.Wrapper>
            <style.InputWrapper>
              <style.Label htmlFor="cep">Cep.</style.Label>
              <style.Input
                className={errors?.cep && "input-error"}
                type="text"
                placeholder="cep"
                {...register("cep", { required: isThre })}
              />
              {errors?.cep?.type === "required" && (
                <p className="error-message">CEP é obrigatório.</p>
              )}
            </style.InputWrapper>
            <style.AddresWrapper>
              <style.InputWrapper>
                <style.Label htmlFor="endereco">Endereço.</style.Label>
                <style.Input
                  className={errors?.endereco && "input-error"}
                  type="text"
                  placeholder="Endereço"
                  {...register("endereco", { required: isThre })}
                />
                {errors?.endereco?.type === "required" && (
                  <p className="error-message">Endereco é obrigatório.</p>
                )}
              </style.InputWrapper>
              <style.InputWrapper>
                <style.Label htmlFor="numero">Numero.</style.Label>
                <style.Input
                  className={errors?.numero && "input-error"}
                  type="text"
                  placeholder="Numero"
                  {...register("numero", { required: isThre })}
                />
                {errors?.numero?.type === "required" && (
                  <p className="error-message">Numero é obrigatório.</p>
                )}
              </style.InputWrapper>
            </style.AddresWrapper>
            <style.InputWrapper>
              <style.Label htmlFor="complem">Complemento.</style.Label>
              <style.Input
                className={errors?.complem && "input-error"}
                type="text"
                placeholder="Complemento"
                {...register("complem", { required: false })}
              />
              {errors?.complem?.type === "required" && (
                <p className="error-message">Complemento é obrigatório.</p>
              )}
            </style.InputWrapper>
          </style.Wrapper>
          <style.ButtonWrapper>
            <style.PrevButton type="button" onClick={prevStep} value="Voltar" />
            <style.SubmitButton
              type="button"
              onClick={() => handleSubmit(onSubmit)()}
              value="Concluir"
            />
          </style.ButtonWrapper>
        </style.StyledFieldset>
      </style.FormContainer>
    </div>
  );
};

export default EditForm;
