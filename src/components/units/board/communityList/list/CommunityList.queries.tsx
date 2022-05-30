import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      boardId
      boardTitle
      boardSugar
      boardSalt
      boardContents
      boardLikeCount
      boardHit
      createAt
      thumbnail
      boardSubject
      boardWriter
      place {
        placeName
        placeAddress
      }
    }
  }
`;
