import { HeartOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types';
import { FETCH_USED_ITEM } from './detail.query';
import * as S from './detail.styles'

declare const window: typeof globalThis & {
    kakao: any;
  };

export default function MarketDetail() {
    const router = useRouter()

    const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

    useEffect(() => {
        const script = document.createElement("script"); // <script></script> 랑 동일
        script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=60d701217f2e5767f7f2323406c17e5a&libraries=services&autoload=false";
        document.head.appendChild(script);
    
        script.onload = () => {
          window.kakao.maps.load(function () {
            const container = document.getElementById("map");
            const options = {
              center: new window.kakao.maps.LatLng(33.450701, 126.570667),
              level: 3,
            };
    
            const map = new window.kakao.maps.Map(container, options);
    
            if (data?.fetchUseditem) {
              const lat = data?.fetchUseditem.useditemAddress?.lat ? data?.fetchUseditem.useditemAddress?.lat : 33.450701, // 위도
                lon = data?.fetchUseditem.useditemAddress?.lng ? data?.fetchUseditem.useditemAddress?.lng : 126.570667; // 경도
    
              const locPosition = new window.kakao.maps.LatLng(lat, lon); 
    
              displayMarker(locPosition);
            } else {
              const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    
              displayMarker(locPosition);
            }
    
            function displayMarker(locPosition) {
       
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: locPosition,
              });
              map.setCenter(locPosition);
            }
          });
        };
      }, [data]);
    return(
        <>
        <S.Main>
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
        </S.Main>
        <S.DetailWrap>
            <S.DetailTitle>Detail</S.DetailTitle>
            <S.DetailContent>
                <S.Content>
                    contentcontentcontentcontentcontentvcontentcontentcontentcontentcontentcontent
                    contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
                    contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
                    contentcontentcontentcontentcontentcontentcontentcontentcontent
                    contentcontentcontentcontentcontentcontentcontent
                </S.Content>
                <S.deliveryInfo>
                    <S.deliveryInfoTitle>
                    배송/교환/반품/AS 관련 유의사항
                    </S.deliveryInfoTitle>
                    <S.deliveryInfoSubTitle>
                    상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.
                    </S.deliveryInfoSubTitle>
                    <S.Map id = "map"></S.Map>
                    <S.deliveryInfoDetail>
                        <S.InfoDetail>
                        상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.
                        </S.InfoDetail>
                        <S.InfoDetail>
                        상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.
                        </S.InfoDetail>
                        <S.InfoDetail_focus>
                        상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
                        </S.InfoDetail_focus>
                        <S.InfoDetail>
                        주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.
                        </S.InfoDetail>
                        <S.InfoDetail>
                        반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여 주십시오.
                        </S.InfoDetail>
                        <S.InfoDetail>
                        제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품 부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)  반품/교환이 불가합니다.
                        </S.InfoDetail>
                        <S.InfoDetail>
                        A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 에이블리 고객센터를 통해 부탁드립니다.
                        </S.InfoDetail>
                        <S.InfoDetail>
                        상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.                        </S.InfoDetail>
                    </S.deliveryInfoDetail>
                </S.deliveryInfo>
                <S.DetailTitle>Q & A</S.DetailTitle>
            </S.DetailContent>
        </S.DetailWrap>
        </>
    )
}

