import { SearchOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { IQuery, IQueryFetchUseditemsArgs } from '../../../../commons/types/generated/types';
import ItemCard from '../../../commons/itemCard'
import ItemCard2 from '../../../commons/itemCard/itemCard2';
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_BEST } from './list.query';
import * as S from './list.styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LogoutMarketList() {
  const [news, setNews] = useState([])
  const router = useRouter()
    const { data: best} = useQuery
  (FETCH_USED_ITEMS_BEST);

  const { data, fetchMore} = useQuery<
  Pick<IQuery, "fetchUseditems">,
  IQueryFetchUseditemsArgs
>(FETCH_USED_ITEMS);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


// const onLoadMore = () => {
//     if (!data) return;

//     fetchMore({
//       variables: {
//         page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         if (fetchMoreResult.fetchUseditems == undefined) {
//           return {
//             fetchUseditems: [...prev.fetchUseditems],
//           };
//         }
//         return {
//           fetchUseditems: [
//             ...prev.fetchUseditems,
//             ...fetchMoreResult?.fetchUseditems,
//           ],
//         };
//       },
//     });
//   };

    return(
        <S.Wrapper>
            <S.BestWrap>
            <S.Slide>
        <Slider {...settings} style={{display: 'flex'}}>
          <S.ItemWrapper>
          <S.Text>
            <S.Content>Carousel</S.Content>
          </S.Text>
          </S.ItemWrapper>
          <S.ItemWrapper>
          <S.Text>
            <S.Content>Carousel</S.Content>
          </S.Text>
          </S.ItemWrapper>
          <S.ItemWrapper>
          <S.Text>
            <S.Content>Carousel</S.Content>
          </S.Text>
          </S.ItemWrapper>
        </Slider>
       </S.Slide>
            </S.BestWrap>
            <S.BtnWrap>
              <S.Title>New Arrival</S.Title>
            </S.BtnWrap>
            <S.ScrollWrap>
            <S.Main>
            {data?.fetchUseditems.map((el) =>(
                        <ItemCard2 key={el._id} el={el}/>
                    ))
                    }
            </S.Main>
            </S.ScrollWrap>
        </S.Wrapper>
    )
}