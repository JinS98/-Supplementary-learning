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
height: 622px;
display: flex;
align-items: center;
`
export const ContentWrap = styled.div`
width: 941px;
display: flex;
justify-content: space-between;
`
export const NameWrap = styled.div`
height:136px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const Name = styled.div`
font-size: 24px;
font-weight: 400;
line-height: 55px;
`
export const InputWrap = styled.div`
height:136px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const Input = styled.input`
width: 611px;
height: 56px;
background-color: #E9E9E9;
color: #A9A9A9;
border: none;
padding-left: 18px;
font-size: 15px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;


:focus{
    outline: none;
}
`
export const Button = styled.button`
width:186px;
background-color: #000000;
color: white;
cursor: pointer;
`