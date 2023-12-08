import { useCustomerAddData } from "@/hooks/useAddData";

import UpButton from "@/component/upButton/UpButton";
import { useState } from "react";
import {
  ButtonStyled,
  CloseButtonStyled,
  FormStyled,
  ModelStyled,
} from "./Model.styled";
import { useForm } from "react-hook-form";
import FormInput from "@/component/forms/input";

type FormInputValue = {
  fname: string;
  lname: string;
  email: string;
  companyName: string;
  phoneNumber: Number;
};

const Modal = () => {
  const form = useForm<FormInputValue>({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    },
  });

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { mutate: customerData } = useCustomerAddData();

  const { handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data: FormInputValue) => {
    customerData(data);
    console.log(data);

    alert("customerData Added SuccussFully :)");
  };

  return (
    <>
      <ButtonStyled variant="contained" onClick={openModal}>
        Add +
      </ButtonStyled>
      <ModelStyled isOpen={modalOpen} onClose={closeModal}>
        <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
          <CloseButtonStyled variant="contained" onClick={closeModal}>
            X
          </CloseButtonStyled>

          <h2>Add Customer Data</h2>
          <FormInput
            control={control}
            label="First Name"
            name="fname"
            placeholder="Enter the First Name"
          />
          <br />
          <br />

          <FormInput
            control={control}
            label="Last Name"
            name="lname"
            placeholder="Enter the Last Name"
          />
          <br />
          <br />

          <FormInput
            control={control}
            label="Email Address"
            name="email"
            placeholder="Enter the Email Address"
          />
          <br />
          <br />

          <FormInput
            control={control}
            label="Company Name"
            name="companyName"
            placeholder="Enter the Company Name"
          />
          <br />
          <br />

          <FormInput
            control={control}
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter the Phone Number"
          />
          <br />
          <br />

          <UpButton type="submit" variant="contained">
            Submit
          </UpButton>
        </FormStyled>
      </ModelStyled>
    </>
  );
};
export default Modal;
