import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IEl {
  el: any;
}

export const ItemMainDiv = styled.div`
  margin-bottom: 15px;
  height: 341px;
  width: 338px;
`;
// 썸네일 사진
export const ItemImg = styled.div`
  padding: 15px;
  width: 338px;
  height: 250px;
  background-color: #d2d2d2;
  background: no-repeat
    ${(props: IEl) =>
      props.el?.thumbnail
        ? `url(https://storage.googleapis.com/${props.el?.thumbnail})`
        : "url(https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E)"};
  background-size: cover;
  background-position: center;
  cursor: pointer;

  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const BoardSubject = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;
// 포로필사진
export const ItemProfile = styled.img`
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
export const ItemInfoDiv = styled.div`
  width: 338px;
`;
export const FlexBox = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexBox2 = styled.div`
  display: flex;
`;
export const ItemInfoTitleDiv = styled.div`
  color: #676767;
  font-size: 18px;
  font-weight: 700;
`;
export const ItemInfoUserDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 500;
`;
export const Span = styled.span`
  font-size: 14px;
`;

export const ItemInfoMidDiv = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  color: #676767;
`;
export const ItemInfoStoreName = styled.div`
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const P = styled.div`
  margin: 0 5px;
  background: #676767;
  width: 1px;
  height: 14px;
`;
export const ItemInfoLocationDiv = styled.div`
  color: #676767;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemInfoBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LikeFillIcon = styled(HeartFilled)`
  font-size: 24px;
  color: #ff9a31;
`;
export const ItemInfoImg = styled.img`
  height: 24px;
`;
export const ItemInfoCountDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  padding: 0 5px;
`;
export const IteminfoDateDiv = styled.div`
  color: #676767;
  font-size: 12px;
`;
