import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { gql } from "@apollo/client";
import { checkValidationImage } from "../../uploads/01/Uploads01.validation";
import { Modal } from "antd";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

interface IInputProps {
  type: "file";
  register: UseFormRegisterReturn;
}

export default function Input03(props: IInputProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [fileUrls, setFileUrls] = useState([]);

  const onClickUpload = () => {
    console.log(111);
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <Wrapper>
      {fileUrls ? (
        <UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload} type="button">
          <>+</>
        </UploadButton>
      )}
      <UploadFileHidden
        type={props.type}
        {...props.register}
        ref={fileRef}
        onChange={onChangeFile}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
`;
const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

const UploadButton = styled.button`
  margin-top: 20px;
  width: 78px;
  height: 78px;
  border-radius: 50px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    size: 10%;
  }
`;

const UploadFileHidden = styled.input`
  display: none;
`;
