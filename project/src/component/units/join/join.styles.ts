import styled from "@emotion/styled";

export const Wrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
export const TitleWrap = styled.div`
width: 90%;
height: 248px;
border-bottom: 3px solid #555555;
display: flex;
justify-content: center;
align-items: center;
`
export const Title = styled.div`
font-size: 40px;
line-height: 40px;
font-weight: 400;
`
export const Main = styled.div`
width: 90%;
padding-left: 53px;
padding-top: 41px;
border-bottom: 2px solid #555555;
`
export const Item = styled.div`
display: flex;
align-items: center;
width: 700px;
justify-content: space-between;
margin-bottom: 31px;
`
export const Name = styled.div`
font-size: 24px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.05em;
text-align: left;

`
export const Input = styled.input`
width: 511px;
height: 56px;
border: none;
background-color: #E9E9E9;
padding-left: 18px;
:focus{
    outline: none;
}
;
`
export const BtnWrap = styled.div`
margin-top: 68px;
margin-bottom: 101px;
width: 393px;
display: flex;
justify-content: space-between;
`
export const CancelBtn = styled.button`
    width: 186px;
    height: 56px;
    background-color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.05em;
    text-align: center;
    cursor: pointer;

`
export const SubmitBtn = styled.button`
    width: 186px;
    height: 56px;
    background-color: #000000;
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.05em;
    text-align: center;
    cursor: pointer;
`