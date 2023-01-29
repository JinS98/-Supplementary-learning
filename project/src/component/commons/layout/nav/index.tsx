import styled from "@emotion/styled"

export default function Nav() {
    return(
        <Wrapper>
            <MenuWrap>
                <Menu>BRAND</Menu>
                <Menu>CATEGORY</Menu>
                <Menu>LIFE</Menu>
                <Menu>BEAUTY </Menu>
                <Bar>|</Bar>
                <Menu>#STYLE</Menu>
                <Menu>EVENT</Menu>
            </MenuWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: #000000;
    color: white;
    display: flex;
    justify-content: center;
`
const MenuWrap = styled.div`
display: flex;
font-size: 22px;
font-weight: 700;
width: 65%;
justify-content: space-between;
align-items: center;
`
const Menu = styled.div`
cursor: pointer;
`
const Bar = styled.div`
`