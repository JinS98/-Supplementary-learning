import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "number";
  register: UseFormRegisterReturn;
}

export default function Input02(props: IInputProps) {
  return <Input type={props.type} {...props.register} />;
}

const Input = styled.input`
  border-radius: 20px;
  color: #c4c4c4;
  padding-left: 13px;
  width: 100%;
  height: 52px;

  :focus {
    color: black;
    outline: none;
  }
`;
