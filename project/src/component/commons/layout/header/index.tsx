import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
        user {
          _id
        }
      }
    }
  }
`;
export const LOGOUT_USER = gql`
  mutation createLogoutUser{
    createLogoutUser{
      _id
    }
  }
`

export default function Header() {
    const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    const [user,setUser] = useState(false)
    useEffect(() => {
        if(data) {
            setUser(true)
        }
    },[data])
    return(
        <Wrapper>
            <Logo src="/Logo.png" />
            <MenuWrap>
                {user
                ? <UserInfo>
                    <UserName>
                        ㅇㅇㅇ님의 포인트
                    </UserName>
                    <Point>1400</Point>
                    <P>P</P>
                    <FillPoint>충전</FillPoint>
                  </UserInfo>
                :<Menu>
                    로그인
                </Menu>
                }   
                <Menu>
                    {user ?  "로그아웃" : "회원가입" }
                </Menu>
                <Menu>
                    장바구니
                    <Num>0</Num>
                </Menu>
            </MenuWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 0px 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
    width:181px;
    height: 49px;
    cursor: pointer;
`
const MenuWrap = styled.div`
    display:flex;
    width:  250px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    `
const Menu = styled.div`
font-size: 14px;
font-weight: 400px;
line-height: 14px;
display: flex;
align-items: center;
cursor: pointer;
`
const Num = styled.div`
text-align: center;
width: 20px;
height: 20px;
border-radius: 100px;
margin-left:5px;
font-size: 12px;
line-height: 19px;
background-color: #F65656;
color: white;
 ;
`
const UserInfo = styled.div`
display: flex;
border: 1px solid red;
`
const UserName = styled.div``
const Point = styled.div``
const P = styled.div``
const FillPoint = styled.div``