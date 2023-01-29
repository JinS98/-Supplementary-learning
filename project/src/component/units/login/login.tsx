import { useForm } from 'react-hook-form';
import * as S from './login.styles'
import { schema } from './LoginPage.validation';
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
      });

      const onClickSubmit = (data) => {
        console.log(data)
      }
    return(
        <S.Wrapper onSubmit={handleSubmit(onClickSubmit)}>
            <S.TitleWrap>
                <S.Title>LOGIN</S.Title>
            </S.TitleWrap>
            <S.Main>
            <S.ContentWrap>
                <S.NameWrap>
                    <S.Name>아이디</S.Name>
                    <S.Name>비밀번호</S.Name>
                </S.NameWrap>
                <S.InputWrap>
                    <S.Input 
                      type="text"
                      maxLength={50}
                      name="email"
                      {...register("email")}
                      placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                    />
                    <S.Input
                      type="password"
                      placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                      maxLength={16}
                      name="password"
                      {...register("password")}
                    />
                </S.InputWrap>
                <S.Button>로그인</S.Button>
            </S.ContentWrap>
            </S.Main>
        </S.Wrapper>
    )
}