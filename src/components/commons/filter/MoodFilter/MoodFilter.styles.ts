import styled from "@emotion/styled";

export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 16px;

  .checkbox input {
    display: none;
  }
  .checkbox {
    display: flex;
    margin: 0px 30px 10px 0px;
  }
  .checkbox_text {
    display: flex;
    margin-left: 10px;
    font-size: 16px;
    color: #d8d8d8;
    padding: 7px 20px;
    border-radius: 50px;
    border: 3px solid #dbdbdb;
    cursor: pointer;
    &:hover {
      color: #ff9a31;
      border: 3px solid #ff9a31;
    }
    .check_icon {
      display: none;
      width: 20px;
      height: 15px;
      margin: 4px 10px 0px 0px;
    }
  }
  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 3px solid #cacaca;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }
  .checkbox input:checked + .checkbox_text {
    border: 3px solid #ffa230;
    color: #ffa230;
    .check_icon {
      display: flex;
    }
  }
`;
