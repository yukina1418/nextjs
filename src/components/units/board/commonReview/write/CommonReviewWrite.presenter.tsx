import dynamic from "next/dynamic";
import WriteMapPage from "../../../../commons/writeMap/WriteMap.index";
import * as S from "./CommonReviewWrite.styles";

const Editor = dynamic(() => import("../../../../commons/toast/editor"), {
  ssr: false,
});

export default function CommonReviewWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickReg)}>
        <S.Title>단짠 게시판 글 등록</S.Title>

        <S.ReviewWriteBox>
          <S.Header>
            <S.TitleArticle>
              <S.TitleSection>
                <S.WriteTitle>제목</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="20자 이내로 작성하세요."
                  register={props.register("boardTitle")}
                />
              </S.TitleSection>
              <div>
                <S.WriteTitle>카테고리</S.WriteTitle>
                {props.communityCheckPage === "community" && (
                  <S.CategoryBox>
                    {props.categoryData.map((el: any, idx: any) => (
                      <label className="checkbox" key={el.key}>
                        <input
                          type="checkbox"
                          id={String(idx)}
                          onChange={props.onChangeCheckCategory(el)}
                          checked={Boolean(el.checked)}
                        />
                        <span className="checkbox_text">{el.name}</span>
                      </label>
                    ))}
                  </S.CategoryBox>
                )}
                {props.checkPage === "REVIEW" && (
                  <S.CategoryPickSection>
                    <S.CategoryPick>단짠리뷰</S.CategoryPick>
                    <S.CategoryUnPick>시식단 리뷰</S.CategoryUnPick>
                    <S.CategoryUnPick>가주세요</S.CategoryUnPick>
                    <S.CategoryUnPick>가봤어요</S.CategoryUnPick>
                  </S.CategoryPickSection>
                )}
                {props.checkPage === "TASTER" && (
                  <S.CategoryPickSection>
                    <S.CategoryUnPick>단짠리뷰</S.CategoryUnPick>
                    <S.CategoryPick>시식단 리뷰</S.CategoryPick>
                    <S.CategoryUnPick>가주세요</S.CategoryUnPick>
                    <S.CategoryUnPick>가봤어요</S.CategoryUnPick>
                  </S.CategoryPickSection>
                )}
                {props.checkPage === "REQUEST" && (
                  <S.CategoryPickSection>
                    <S.CategoryUnPick>단짠리뷰</S.CategoryUnPick>
                    <S.CategoryUnPick>시식단 리뷰</S.CategoryUnPick>
                    <S.CategoryPick>가주세요</S.CategoryPick>
                    <S.CategoryUnPick>가봤어요</S.CategoryUnPick>
                  </S.CategoryPickSection>
                )}
                {props.checkPage === "VISITED" && (
                  <S.CategoryPickSection>
                    <S.CategoryUnPick>단짠리뷰</S.CategoryUnPick>
                    <S.CategoryUnPick>시식단 리뷰</S.CategoryUnPick>
                    <S.CategoryUnPick>가주세요</S.CategoryUnPick>
                    <S.CategoryPick>가봤어요</S.CategoryPick>
                  </S.CategoryPickSection>
                )}
              </div>
            </S.TitleArticle>

            <S.MapArticle>
              <S.WriteTitle>가게선택</S.WriteTitle>
              <S.Map>
                <WriteMapPage setAddress={props.setAddress} />
              </S.Map>
            </S.MapArticle>

            <S.SugarSaltArticle
              checkPage={props.checkPage}
              subCategoryName={props.subCategoryName}
            >
              <div>
                <S.WriteTitle style={{ color: "#FF9A31" }}>단맛</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="30자 이내로 작성하세요."
                  register={props.register("boardSugar")}
                />
              </div>

              <div>
                <S.WriteTitle style={{ color: "red" }}>짠맛</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="30자 이내로 작성하세요."
                  register={props.register("boardSalt")}
                />
              </div>
            </S.SugarSaltArticle>
          </S.Header>

          <S.Section>
            <S.MenuArticle
              checkPage={props.checkPage}
              subCategoryName={props.subCategoryName}
            >
              <S.WriteTitle>
                메뉴 선택<S.Span>(1개만 선택 가능)</S.Span>
              </S.WriteTitle>

              <S.MenuBox>
                {props.menuTagData.map((el: any, idx: any) => (
                  <label className="checkbox" key={el.key}>
                    <input
                      type="checkbox"
                      id={String(idx)}
                      onChange={props.onChangeCheckMenu(el)}
                      checked={Boolean(el.checked)}
                    />
                    <span className="checkbox_text">{el.value}</span>
                  </label>
                ))}
              </S.MenuBox>
            </S.MenuArticle>

            <S.MoodArticle
              checkPage={props.checkPage}
              subCategoryName={props.subCategoryName}
            >
              <S.WriteTitle>
                분위기 선택<S.Span>(3개까지 선택 가능)</S.Span>
              </S.WriteTitle>

              <S.MoodBox>
                {props.moodTagData.map((el: any, idx: any) => (
                  <label className="checkbox" key={el.key}>
                    <input
                      type="checkbox"
                      value={el.value}
                      id={idx}
                      onChange={(e) => {
                        props.onChangeCheckMood(
                          e.target.checked,
                          e.target.value
                        )(e);
                      }}
                    />
                    <span className="checkbox_text">
                      <img className="check_icon" src="/images/check.png" />
                      {el.value}
                    </span>
                  </label>
                ))}
              </S.MoodBox>
            </S.MoodArticle>

            <S.EditorArticle>
              <S.WriteTitle>내용</S.WriteTitle>
              <Editor setBoardContents={props.setBoardContents} />
            </S.EditorArticle>

            <S.ButtonBox>
              <S.Button type="submit">등록하기</S.Button>
              <S.Button onClick={props.onClickCancel}>취소하기</S.Button>
            </S.ButtonBox>
          </S.Section>
        </S.ReviewWriteBox>
      </form>
    </S.Wrapper>
  );
}
