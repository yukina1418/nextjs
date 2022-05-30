import styled from "@emotion/styled";

interface IIntroPage {
  isIntroPage: any;
}
interface IIntroReview {
  isReviewPage: any;
}
interface IIntroStore {
  isStorePage: any;
}
interface IIntroNotice {
  isNoticePage: any;
}

export const HeaderWrapper = styled.div`
  width: 100%;
  background: #fff;
`;
export const HeaderBox = styled.div`
  width: 1120px;
  height: 84px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderLogo = styled.img`
  width: 162px;
  cursor: pointer;
`;
export const HeaderMenuBox = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroductionMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IIntroPage) => (props.isIntroPage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IIntroPage) =>
    props.isIntroPage ? "8px solid #ffa230" : "none"};
`;
export const ReviewMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IIntroReview) => (props.isReviewPage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IIntroReview) =>
    props.isReviewPage ? "8px solid #ffa230" : "none"};
`;
export const StoreMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IIntroStore) => (props.isStorePage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IIntroStore) =>
    props.isStorePage ? "8px solid #ffa230" : "none"};
`;
export const NoticeMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IIntroNotice) => (props.isNoticePage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IIntroNotice) =>
    props.isNoticePage ? "8px solid #ffa230" : "none"};
`;
export const QuestionMenu = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
`;

export const HeaderNonMembersRightBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderLogin = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
`;
export const P = styled.div`
  font-size: 16px;
  cursor: default;
  color: #7b7b7b;
`;
export const HeaderSignup = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
`;

export const HeaderMemberRightBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const PhotoBox = styled.div`
  display: flex;
  align-items: start;
`;
export const Photo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  cursor: pointer;
`;
export const UserProfileBox = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, 120px);
`;
export const ArrowBox = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #fff;
`;
export const UserProfile = styled.div`
  width: 180px;
  height: 210px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 7px #999;
`;
export const UserNameBox = styled.div`
  margin-bottom: 8px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 20px;
  cursor: default;
`;
export const UserName = styled.span`
  color: #ffa230;
`;
export const UserPointBox = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 3px solid #ffa230;
  }
`;
export const UserPoint = styled.span`
  font-size: 16px;
  color: #ffa230;
  cursor: pointer;
`;
export const MyPage = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const Note = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: start;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const SignalIcon = styled.img`
  width: 6px;
`;

export const Logout = styled.div`
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
