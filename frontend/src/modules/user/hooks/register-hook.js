import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../validation/register-schema";
import { registerApiCall } from "../api/user-api";

export const useRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });
  const registerSubmit = async (formData) => {
    console.log("Register form Submit", formData);
    try {
      const response = await registerApiCall(formData);
      console.log("Response is: ", response);

      if (response.data.id) {
        alert(`Welcome ${response.data.name}`);
      } else {
        alert("Api failed")
      }
    } catch (err) {
      alert("Registration failed")
    }
  }

  return { registerSubmit, register, handleSubmit, errors };
}
