import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../validation/login-schema";
import { loginApiCall } from "../api/user-api";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const loginSubmit = async (formData) => {
    console.log("Login form Submit", formData);
    try {
      const response = await loginApiCall(formData);
      console.log("Response is: ", response);

      if (response.data.id) {
        localStorage.email = response.data.email;
        alert('Login Successful...');
        navigate('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert("Login failed")
    }
  }

  return { loginSubmit, register, handleSubmit, errors };
}
