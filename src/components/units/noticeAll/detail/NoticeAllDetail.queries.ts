import { gql } from "@apollo/client";

export const FETCH_NOTICE = gql`
  query fetchNotice($noticeId: String!) {
    fetchNotice(noticeId: $noticeId) {
      noticeId
      noticeTitle
      noticeContents
      noticeHit
      noticeSubject
      createAt
      images {
        url
      }
    }
  }
`;
