import * as S from './join.styles'
import { schema } from './join.validation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { IMutation, IMutationCreateUserArgs } from '../../../commons/types/generated/types';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './join.query';
import { Modal } from 'antd';
import { useRouter } from 'next/router';


export default function Join() {
    const router = useRouter()
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
      });

      const [createUser] = useMutation<
      Pick<IMutation, "createUser">,
      IMutationCreateUserArgs
    >(CREATE_USER);

      const onClickSubmit = async (data) => {
        if(!data.email) alert("이메일을 입력해주세요.")
        if(!data.password) alert("비밀번호을 입력해주세요.")
        if(!data.name) alert("이름을 입력해주세요.")
        if(data.password !== data.rePassword) alert("비밀번호를 다시 확인해주세요.")
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              name: data.name,
              email: data.email,
              password: data.password,
            },
          },
        });
        router.push("/login");
        console.log(result)
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error });
      }
}

    return(
        <S.Wrapper onSubmit={handleSubmit(onClickSubmit)}>
            <S.TitleWrap>
                <S.Title>JOIN MEMBER</S.Title>
            </S.TitleWrap>
            <S.Main>
                <S.Item>
                    <S.Name>
                        아이디
                    </S.Name>
                    <S.Input
                     type="text"
                     maxLength={50}
                     name="email"
                     {...register("email")}
                     placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                    />
                </S.Item>
                <S.Item>
                    <S.Name>
                        비밀번호
                    </S.Name>
                    <S.Input
                      type="password"
                      placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                      maxLength={16}
                      name="password"
                      {...register("password")}
                    />
                </S.Item>
                <S.Item>
                    <S.Name>
                        비밀번호 확인
                    </S.Name>
                    <S.Input
                      type="Password"
                      placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                      maxLength={16}
                      name="rePassword"
                      {...register("rePassword")}
                    />
                </S.Item>
                <S.Item>
                    <S.Name>
                        이름
                    </S.Name>
                    <S.Input
                      type="name"
                      placeholder="ex) 홍길동"
                      maxLength={16}
                      name="name"
                      {...register("name")}
                    />
                </S.Item>
            </S.Main>
            <S.BtnWrap>
                <S.CancelBtn type='button'>
                    취소
                </S.CancelBtn>
                <S.SubmitBtn>
                    확인
                </S.SubmitBtn>
            </S.BtnWrap>
        </S.Wrapper>
    )
}