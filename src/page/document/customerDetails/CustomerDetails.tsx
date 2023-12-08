"use client";
import useDeleteCustomer, {
  useCustomers,
  useUpdateCustomer,
} from "@/hooks/useAddData";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import Paper from "@mui/material/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  UpDateButtonStyled,
  UpdateCloseButtonStyled,
} from "./CustomerDetails.styled";
import UpButton from "@/component/upButton/UpButton";
import { useState } from "react";

import { FormStyled, ModelStyled } from "../Modal/Model.styled";
import FormInput from "@/component/forms/input";
import { useForm } from "react-hook-form";
type FormInputValue = {
  fname: string;
  lname: string;
  email: string;
  companyName: string;
  phoneNumber: Number;
};

const CustomerList = () => {
  const form = useForm<FormInputValue>({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    },
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  console.log("selectedCustomer", selectedCustomer);

  const handleUpdateClick = (customer: any) => {
    setSelectedCustomer(customer);
    form.reset({
      fname: customer.fname,
      lname: customer.lname,
      email: customer.email,
      companyName: customer.companyName,
      phoneNumber: customer.phoneNumber,
    });
    openModal();
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { data: customers, isLoading, isError } = useCustomers();

  const { updateCustomer } = useUpdateCustomer();

  const { deleteCustomer } = useDeleteCustomer();

  const { handleSubmit, control } = form;

  const onSubmit = async (data: FormInputValue) => {
    try {
      if (selectedCustomer) {
        await updateCustomer(selectedCustomer.id, data);
      } else {
        console.log("error");
      }

      closeModal();
      setSelectedCustomer(null);

      alert("Customer Data Updated Successfully :)");
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  const handleDeleteClick = async (customerId: string) => {
    try {
      await deleteCustomer(customerId);
      alert("Customer Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !customers) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Company Name</StyledTableCell>
              <StyledTableCell align="center">Phone Number</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          {customers.length === 0 ? (
            <h3>No customers found</h3>
          ) : (
            <TableBody>
              {customers.map((customer: any) => (
                <StyledTableRow key={customer.id}>
                  <StyledTableCell component="th" scope="row">
                    {customer.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {customer.fname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {customer.lname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {customer.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {customer.companyName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {customer.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <UpDateButtonStyled
                      variant="contained"
                      onClick={() => handleUpdateClick(customer)}
                    >
                      Update
                    </UpDateButtonStyled>
                    <ModelStyled isOpen={modalOpen} onClose={closeModal}>
                      <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
                        <UpdateCloseButtonStyled
                          variant="outlined"
                          onClick={closeModal}
                        >
                          X
                        </UpdateCloseButtonStyled>

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

                    <UpButton
                      variant="contained"
                      onClick={() => handleDeleteClick(customer.id)}
                    >
                      Delete
                    </UpButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerList;
