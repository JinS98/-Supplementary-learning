import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps) {
  return <Input placeholder="" type={props.type} {...props.register} />;
}

const Input = styled.input`
  background-color: #353535;
  color: white;
  font-size: 23px;
  width: 500px;
  height: 70px;
  margin: 20px 0px;
  border-radius: 5px;
  padding-left: 20px;
  border: none;

  :focus {
    color: white;
    outline: none;
  }
`;
