import { HeartOutlined } from "@ant-design/icons"
import { useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useState } from "react"
import { price } from "../../../commons/library/comma"
import { IMutation, IMutationToggleUseditemPickArgs } from "../../../commons/types/generated/types"
import { TOGGLE_USED_ITEM_PICK } from "../../units/market/detail/detail.query"

export default function ItemCard(props) {
    const router = useRouter()
    const [isPick, setIsPick] = useState(false)
    const [toggleUseditemPick] = useMutation<
  Pick<IMutation, "toggleUseditemPick">,
  IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const onClickPick = (itemId)=> async(e) => {
    e.stopPropagation();
    console.log(itemId)
    setIsPick(prev => !prev)
    await toggleUseditemPick({
      variables: {
        useditemId: String(itemId),
      }
    });
  };

    const onClickDetail = (usedItem) => () => {
        router.push(`market/${usedItem}`);
    }

    return(
        <Wrapper>
            <ImgBox
                onClick={onClickDetail(props.el._id)} 
                style={{
                    backgroundImage:
                      props.el.images[0] === undefined || props.el.images[0] === ""
                        ? ""
                        : `url(https://storage.googleapis.com/${props.el.images[0]})`,
                  }}
            >
            {isPick 
                ? <Picked onClick={onClickPick(props.el._id)} />
                : <Pick onClick={onClickPick(props.el._id)} />}
            </ImgBox>
            <ContentWrap>
                <PriceWrap>
                    <Sale>7%</Sale>
                    <Price>{price(props.el.price)}</Price>
                </PriceWrap>
                <Name>{props.el.name}</Name>
                <Remark>{props.el.remarks}</Remark>
            </ContentWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 22%;
height: 450px;
display: flex;
flex-direction: column;
cursor: pointer;
`
const ImgBox = styled.div`
width: 100%;
height: 350px;
background-color: #C4C4C4;
display: flex;
justify-content: flex-end;
padding-top: 25px;
padding-right: 25px;
background-size: cover;
background-position: center;
`
const Pick = styled(HeartOutlined)`
font-size: 20px;
color:#555555;
`
const Picked = styled(HeartOutlined)`
font-size: 20px;
color: red;
z-index: 10;
`
const ContentWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: calc(450px - 350px);
padding: 10px;
`
const PriceWrap = styled.div`
display: flex;
width: 40%;
justify-content: flex-start;
`
const Sale = styled.div`
color:  #F65656;
margin-right: 20px;
;
`
const Price = styled.div`
color: #000000;
font-size: 20px;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.05em;
text-align: left;

`
const Name = styled.div`
color: #555555;
font-size: 16px;
font-weight: 500;
line-height: 16px;
letter-spacing: -0.05em;
text-align: left;

`
const Remark = styled.div`
color: #555555;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;

`