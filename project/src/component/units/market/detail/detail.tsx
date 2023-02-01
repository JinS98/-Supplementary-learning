import { HeartOutlined } from '@ant-design/icons'
import * as S from './detail.styles'

export default function MarketDetail() {
    return(
        <S.Wrapper>
            <S.Main_Left>
                <S.ImgBox></S.ImgBox>
            </S.Main_Left>
            <S.Main_Right>
                <S.TItle>
                    <S.Brand>AVANDRESS</S.Brand>
                    <S.Name>[SET] HERO TRACK WIDE SET-UP PURPLE</S.Name>
                </S.TItle>
                <S.Price_Pick>
                    <S.PriceWrap>
                        <S.Price_ko>판매가</S.Price_ko>
                        <S.Price_num>15,3900</S.Price_num>
                        <S.Price_ko>원</S.Price_ko>
                    </S.PriceWrap>
                    <S.PickWrap>
                    <S.Pick>MY</S.Pick>
                    <HeartOutlined style={{marginLeft:"10px", marginRight:"10px"}}/>
                    <S.Pick>Product</S.Pick>
                    </S.PickWrap>
                </S.Price_Pick>
                <S.ContentWrap>
                    <S.Remark>
                    폴리에스테르 100% 원사로 스퀘어미터 450 밀도있게 편직하여 중량감과 두께를 트레이닝복에 
최적화시켰으며 덤블텐타가공으로 축율 및 뒤틀림을 최소화 하였습니다. 수분을 빠르게 흡수하고 
건조되도록 하였고 내마모성이 좋습니다. 기계세탁이 가능하며 세탁 후 빠르게 건조되어 관리가 용이합니다.
 편직 가공에서 유연제 처리로 부드러운 터치감으로 편안합니다.
                    </S.Remark>
                    <S.Tags>#태그 #태그 #태그</S.Tags>
                </S.ContentWrap>
                <S.BtnWrap>
                    <S.BuyBtn>BUY NOW</S.BuyBtn>
                    <S.BasketsBtn>SHOPPING BAG</S.BasketsBtn>
                </S.BtnWrap>
            </S.Main_Right>
        </S.Wrapper>
    )
}