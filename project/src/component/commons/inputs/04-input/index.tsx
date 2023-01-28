import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input04(props: IInputProps) {
  return <Input placeholder="" type={props.type} {...props.register} />;
}

const Input = styled.input`
  background-color: #222222;
  width: 1200px;
  height: 108px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #bdbdbd;
  padding: 20px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  resize: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  :focus {
    color: white;
    outline: none;
  }
`;
