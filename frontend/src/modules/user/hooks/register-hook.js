import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../validation/register-schema";

export const useRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });
  const registerSubmit = (formData) => {
    console.log("Register form Submit", formData);
  }

  return { registerSubmit, register, handleSubmit, errors };
}
