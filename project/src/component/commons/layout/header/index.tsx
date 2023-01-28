import styled from "@emotion/styled"

export default function Header() {
    return(
        <Wrapper>
            <Logo src="/Logo.png" />
            <MenuWrap>
                <Menu>
                    로그인
                </Menu>
                <Menu>
                    회원가입
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
    width: 250px;
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