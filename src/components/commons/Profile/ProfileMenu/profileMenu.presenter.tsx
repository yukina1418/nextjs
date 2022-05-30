import * as S from "./profileMenu.styles";

export default function ProfileMenuPresenter(props: any) {
  return (
    <>
      <S.MypageMenuBox>
        <S.MypageMenu onClick={props.onClickMypage} ismypage={props.ismypage}>
          마이 단짠 게시글
        </S.MypageMenu>
        <S.MypageMenu
          onClick={props.onClickMypageLike}
          ismypageLike={props.ismypageLike}
        >
          좋아요 한 단짠 게시글
        </S.MypageMenu>
        <S.MypageMenu
          onClick={props.onClickMypagePoint}
          ismypagePoint={props.ismypagePoint}
        >
          포인트 상세내역
        </S.MypageMenu>
      </S.MypageMenuBox>
    </>
  );
}
