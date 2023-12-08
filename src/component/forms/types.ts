import React from "react";

export type UpFormInputProps = {
  id?: string;
  name?: string;
  control: any;
  rules?: any;
  errorText?: string | React.ReactNode;
  prefix?: string | React.ReactNode;
  sufix?: string | React.ReactNode;
  showCheckIocn?: boolean;
  label?: string;
  placeholder: string;
  defaultValue?:any
  value?:any
  onClick?:any
};

export type UnInputSelectProps = {
  id?: string;
  name?: string;
  label?: string;
  control: any;
  rules?: any;
  errorText?: string | React.ReactNode;
  value?: string;
};
