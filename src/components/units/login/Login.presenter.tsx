import LoginInput from "./Login.input";
import * as S from "./Login.styled";

export default function LoginPresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.LogoImg src="/images/whitelogo.png" />
      <S.Title>로그인</S.Title>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.LoginForm>
          <S.Text>이메일</S.Text>
          <S.InputBox>
            <LoginInput
              type="text"
              placeholder="이메일을 입력해주세요."
              register={props.register("userEmail")}
            />

            <S.ErrorTxt>{props.formState.errors.userEmail?.message}</S.ErrorTxt>
          </S.InputBox>

          <S.Text>비밀번호</S.Text>
          <S.InputBox>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={props.register("userPassword")}
            />

            <S.ErrorTxt>
              {props.formState.errors.userPassword?.message}
            </S.ErrorTxt>
          </S.InputBox>

          <S.OrText>OR</S.OrText>

          <S.ButtonBox>
            <S.KakaoLoginButton
              onClick={props.onClickSocialKakao}
            >
              <S.Kakaoimg src="/images/KakaoLogo.png" />
              카카오로 시작하기
            </S.KakaoLoginButton>
            <S.GoogleLoginButton
              onClick={props.onClickSocialGoogle}
            >
              <S.Googleimg src="/images/GoogleLogo.png" />
              구글로 시작하기
            </S.GoogleLoginButton>
            <S.NaverLoginButton onClick={props.onClickSocialNaver}>
            <S.Naverimg src="/images/NaverLogo.png" />
              네이버로 시작하기
            </S.NaverLoginButton>
            <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
          </S.ButtonBox>

          <S.GoSignupTxt>
            아직 계정이 없으신가요?{" "}
            <S.GoSignUpA href="/signup">회원가입</S.GoSignUpA>
          </S.GoSignupTxt>
        </S.LoginForm>
      </form>
    </S.Wrapper>
  );
}
