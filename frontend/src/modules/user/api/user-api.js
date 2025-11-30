import { apiClient } from "../../../shared/services/api-client"

export const registerApiCall = async (formData) => {
  try {
    const response = await apiClient.post('/users', formData);
    return response;
  } catch (err) {
    console.log("Error is: ", err);
    throw err;
  }
}