import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      userState
      userEmail
      userNickname
      userImage
      userProfile
      userPhone
      userPoint
      ageGroup
      gender
      createAt
      updateAt
    }
  }
`;

export const FETCH_BOARDS_OF_USER = gql`
  query fetchBoardsOfUser($userNickname: String!) {
    fetchBoardsOfUser(userNickname: $userNickname) {
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      thumbnail
      boardSubject
      createAt
      place {
        placeName
        placeAddress
      }
      user {
        userImage
      }
    }
  }
`;
