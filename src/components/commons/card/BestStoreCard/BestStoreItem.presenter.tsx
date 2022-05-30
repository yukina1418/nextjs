import * as S from "./BestStoreItem.styles";

export default function BestStoreItemPresenterPage(props: any) {
  console.log("gdsaga", props.fetchShopBestData);
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ImageTitle>
        {props.idx === 0 && (
          <S.ItemRanking src="/images/first.png"></S.ItemRanking>
        )}
        {props.idx === 1 && (
          <S.ItemRanking src="/images/second.png"></S.ItemRanking>
        )}
        {props.idx === 2 && (
          <S.ItemRanking src="/images/third.png"></S.ItemRanking>
        )}
      </S.ImageTitle>
      <S.ItemImg>
        <S.GifticonDiv>
          <S.GifticonImg
            style={{
              backgroundImage: `url(${props.fetchShopBestData?.thumbnail})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              overflow: "hidden",
              backgroundPosition: "center",
            }}
          ></S.GifticonImg>
          <S.GifticonLogoDiv>
            <S.GifiticonLogo src="/images/storelogo.png"></S.GifiticonLogo>
          </S.GifticonLogoDiv>
        </S.GifticonDiv>
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoTxtDiv>
              {props.fetchShopBestData?.shopProductName}
              <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
              {props.fetchShopBestData?.shopSeller}
            </S.ItemInfoTxtDiv>
          </S.ItemInfoWrapDiv>
        </S.ItemInfoTopDiv>
        <S.ItemInfoBottomDiv>
          <S.ItemDCRateDiv>
            {props.fetchShopBestData?.shopDisCount}%
          </S.ItemDCRateDiv>
          <S.ItemPriceDiv>
            {props.fetchShopBestData?.shopDisCountPrice}
          </S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
          <S.ItemNoDCPriceDiv>
            {props.fetchShopBestData?.shopOriginalPrice}원
          </S.ItemNoDCPriceDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
