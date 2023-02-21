import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled"
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { basketsState } from "../../../../commons/stores";
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
  mutation logoutUser{
    logoutUser
  }
`

export default function Header() {
  const [BasketsState, setBasketsState] = useRecoilState(basketsState);
  const [basketsCount, setBasketsCount] = useState(0)
    const router = useRouter()
    const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    const [logoutUser] = useMutation(LOGOUT_USER)

    const [user,setUser] = useState(false)
    useEffect(() => {
        if(data) {
            setUser(true)
        }
    },[data])

    const onClickLogin = () => {
        router.push('/login')
    }

    const onClickJoin = () => {
        router.push('/join')
      }

    const onClickLogout = async() => {
        const result = await logoutUser({})
        // window.localStorage.removeItem("accessToken");
        location.reload();
        console.log(result)
      }

      useEffect(() =>{
        if(!(JSON.parse(localStorage.getItem("baskets")))){
          setBasketsCount(0)
        }else{
          setBasketsCount(JSON.parse(localStorage.getItem("baskets")).length)
        }
      
      },[BasketsState])
    return(
        <Wrapper>
            <Logo src="/Logo.png" />
            <MenuWrap
            style={{
                width: user ? '400px' : ""
            }}
            >
                {user
                ? <UserInfo>
                    <UserName>
                        {data?.fetchUserLoggedIn.name}
                    </UserName>
                    <UserPoint>
                        님 포인트
                    </UserPoint>
                    <Point>{data?.fetchUserLoggedIn.userPoint?.amount}</Point>
                    <P>P</P>
                    <FillPoint>충전</FillPoint>
                  </UserInfo>
                :<Menu onClick={onClickLogin}>
                    로그인
                </Menu>
                }   
                <Menu onClick={user ?onClickLogout :onClickJoin}>
                    {user ?  "로그아웃" : "회원가입" }
                </Menu>
                <Menu>
                    장바구니
                    <Num>{basketsCount}</Num>
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
font-size: 14px;
font-weight: 400;
line-height: 14px;
`
const UserName = styled.div`
font-weight: 700;
`
const UserPoint = styled.div`
margin-right: 5px;
`
const Point = styled.div`
text-decoration: underline;
`
const P = styled.div`
margin: 0px 5px;
`
const FillPoint = styled.div`
margin-left: 10px;
`