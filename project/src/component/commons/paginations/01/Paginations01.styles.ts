import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  width: 680px;
`;

export const Btn = styled.button`
  font-family: "GongGothicMedium";
  margin: 0 20px;
  background-color: black;
  border: none;
  width: 40px;
  font-size: 20px;
  color: ${(props) => (props.pageClick ? "red" : "white")};
  :hover {
    cursor: pointer;
  }
`;

export const Last = styled.button`
  color: white;
  background-color: black;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  border: none;
  width: 25px;
  margin: 0px 5px;
  :hover {
    cursor: pointer;
  }
`;
