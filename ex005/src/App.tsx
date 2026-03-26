import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email precisa ter @"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "Precisa ter pelo menos 6 caracteres"),
});

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  function onSubmit(data: FormData) {
    setTimeout(() => {
      alert(data.name + " cadastro com sucesso!");
    }, 2000);
  }

  return (
    <div>
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <br />
          <input
            type="text"
            id="name"
            {...register("name")}
            style={{
              border: errors.name ? "1px solid red" : "1px solid green",
            }}
            aria-invalid={errors.name ? "true" : "false"}
          />
          <br />
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            {...register("email")}
            style={{
              border: errors.email ? "1px solid red" : "1px solid green",
            }}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <br />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <br />
          <input
            type="password"
            id="password"
            {...register("password")}
            style={{
              border: errors.password ? "1px solid red" : "1px solid green",
            }}
            aria-invalid={errors.password ? "true" : "false"}
          />
          <br />
          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <button disabled={!isValid}>Enviar</button>
      </form>
    </div>
  );
}
