import { useForm } from 'react-hook-form';
import * as S from './login.styles'
import { schema } from './LoginPage.validation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from '@apollo/client';
import { IMutation, IMutationLoginUserArgs } from '../../../commons/types/generated/types';
import { LOGIN_USER } from './login.query';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/stores';

export default function Login() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
      });

      const [loginUser] = useMutation<
      Pick<IMutation, "loginUser">,
      IMutationLoginUserArgs
    >(LOGIN_USER);

    const onClickSubmit = async (data: any) => {
        try {
          const result = await loginUser({
            variables: {
              email: data.email,
              password: data.password,
            },
          });
          console.log(result)
          const accessToken = result.data?.loginUser.accessToken;
    
          if (accessToken === undefined) {
            Modal.error({ content: "로그인을 먼저 해주세요." });
          }
          setAccessToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
    
        //   router.push("/boards");
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error });
        }
      };
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