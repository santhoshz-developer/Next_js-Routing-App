import axios from "axios";
import { useRouter } from "next/navigation";

import { useMutation, useQuery, useQueryClient } from "react-query";

//SignUp

const SignUpRegister = (resData: any) => {
  return axios.post("http://localhost:4000/signUp", resData);
};

export const useSignUpData = () => {
  return useMutation(SignUpRegister);
};

//user Auth Verify User and pass

//Customer Data Adding

const CustomerAddData = (customerData: any) => {
  return axios.post("http://localhost:4000/customer", customerData);
};

export const useCustomerAddData = () => {
  return useMutation(CustomerAddData);
};

// Fatch Customer Data Tables
const fetchCustomers = async () => {
  const response = await axios.get("http://localhost:4000/customer");
  return response.data;
};

export const useCustomers = () => {
  return useQuery("customers", fetchCustomers);
};

//update

const CustomerUpdateData = (customerId: any, updatedData: any) => {
  return axios.put(`http://localhost:4000/customer/${customerId}`, updatedData);
};

export const useUpdateCustomer = () => {
  const updateCustomerMutation = useMutation(
    ({ customerId, updatedData }: any) =>
      CustomerUpdateData(customerId, updatedData)
  );

  const updateCustomer = async (customerId: any, updatedData: any) => {
    try {
      await updateCustomerMutation.mutateAsync({ customerId, updatedData });
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  return { updateCustomer, updateCustomerMutation };
};

//Delete


const deleteCustomer = async (customerId:any) => {
  try {
    const response = await axios.delete(`http://localhost:4000/customer/${customerId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete customer', error);
    throw new Error('Failed to delete customer');
  }
};

const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries('customers');
    },
  });

  return {
    deleteCustomer: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};

export default useDeleteCustomer;


const saveSignIn = async (payload: any) => {
  try {
    const response = await fetch("http://localhost:4000/SignUp",payload);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    return Array.isArray(userData) ? userData : [];
  } catch (error) {
    throw new Error("Sign-in failed");
  }
};

export const useSaveSignIn = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(saveSignIn, {
    onSuccess: (data) => {
      console.log("Sign-in successful", data);
      router.push("/dashboard/document");
      queryClient.invalidateQueries("user");
    },
    onError: (error) => {
      console.error("Sign-in failed", error);
    },
  });

  return { mutate };
};


// const SignIn = async (payload:any) => {
//   const response = await axios.get("http://localhost:4000/SignUp");
//   return response.data;
// };
// export const useSignIn = (data: any) => {
//   const router = useRouter();

//   return useQuery("userData", SignIn, {
//     onSuccess: (users) => {

//       const user = users.find((u: any) => u.email === data.email);
//       if (user && user.password === data.password) {
//         console.log("Logged in");
//         router.push("/dashboard/document"); 
//       } else {

//         console.log("Loggin Failed");
//       }
//     },
//     onError: (error) => {
//       console.error(`Error fetching user data: ${error}`);
//     },
//   });
// };