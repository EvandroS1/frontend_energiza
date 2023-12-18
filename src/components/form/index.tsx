import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap"; // Importa a biblioteca GSAP

// Importa o CSSRulePlugin
import * as style from "./style";
import { useDispatch } from "react-redux";
import { postRequest } from "../../store/modules/empresas/actions";
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
  // console.log({ handleSubmit });

  // const onSubmit = (data: FormData) => {};
  const onNext = (data: FormData) => {
    dispatch(postRequest(data))
    // console.log(data);
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
    // gsap.to(".1", { rotation: 27, x: 100, duration: 1 });
    // console.log('sla');
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
          // transformOrigin: "left center",
          // rotationY: 20,
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

      // Registra o plugin
      // gsap.registerPlugin(CSSRulePlugin);

      // Obtém a regra CSS para o pseudo-elemento .active:before
      // var rule2 = CSSRulePlugin.getRule('.active:after');

      // Define as propriedades iniciais do pseudo-elemento .active:before
      // gsap.set(rule2, { x: 200});

      // Cria a animação para o pseudo-elemento .active:before
      // gsap.to(rule2, {
      //   duration: 10,
      //   opacity: 0,
      //   x: -200,
      // });

      // TweenMax.fromTo(
      //   rule, 2,
      //   {
      //     opacity: 1,
      //     duration: 1,
      //     x: 0,
      //   },
      //   {
      //     opacity: 1,
      //     // scale: 0.7,
      //     x: 200,
      //     duration: 1,
      //     ease: "back.out(1.7)",
      //   }
      // );
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
      gsap.to(".error-message", { x: 20, duration: 0.3 });
    }
  }, [
    errors?.nome,
    errors?.email,
    errors?.senha,
    errors?.senhaConfirm,
    errors?.razaoSocial,
    errors?.cnpj,
    errors?.telefone,
    errors?.cep,
    errors?.endereco,
    errors?.numero,
    errors?.complem,
    watchPassword,
  ]);

  // useEffect(() => {
  //   if(currentStep === 2) {

  //   }
  //  }, [currentStep])

  // const onInvalid: SubmitErrorHandler<FormData> = (errors, e) => {
  //   console.log('Erros de validação:', errors);
  // Faça qualquer coisa com os erros aqui, se necessário
  // };
  // console.log(currentStep);

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
      <style.StyledFieldset className="one" step={1} currentStep={currentStep}>
        <style.H2>Crie sua conta 🚀</style.H2>
        <style.Wrapper>
          <style.InputWrapper>
          <style.Label htmlFor="nome">Nome completo.</style.Label>
            <style.Input
              className={errors?.nome && "input-error"}
              type="text"
              placeholder="Nome completo"
              {...register("nome", { required: isOne })}
            />
            {errors?.nome?.type === "required" && (
              <p className="error-message">Nome é obrigatório.</p>
            )}
          </style.InputWrapper>
          <style.InputWrapper>
          <style.Label htmlFor="email">Email.</style.Label>
            <style.Input
              className={errors?.email && "input-error"}
              type="email"
              placeholder="Email"
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
          <style.Label htmlFor="senhaConfirm">Confirme a senha.</style.Label>

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
      <style.StyledFieldset className="two" step={2} currentStep={currentStep}>
        <style.H2>Informações da empresa 🏢</style.H2>
        <style.Wrapper>
          <style.InputWrapper>
            <style.Input
              className={errors?.razaoSocial && "input-error"}
              type="text"
              placeholder="Nome da empresa (Razão Social)"
              {...register("razaoSocial", { required: isTwo })}
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
              {...register("cnpj", { required: isTwo })}
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
              {...register("telefone", { required: isTwo })}
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
              type="button"
              onClick={() => handleSubmit(onNext)()}
              value="Próximo"
            />
          </style.ButtonWrapper>
        </div>
      </style.StyledFieldset>
      <style.StyledFieldset className="thre" step={3} currentStep={currentStep}>
        <style.H2>Endereço 📪</style.H2>
        <style.Wrapper>
          <style.InputWrapper>
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
              <style.Input
                className={errors?.endereco && "input-error"}
                type="text"
                placeholder="endereco"
                {...register("endereco", { required: isThre })}
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
                {...register("numero", { required: isThre })}
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
              {...register("complem", { required: isThre })}
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
