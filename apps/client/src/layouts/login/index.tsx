'use client';

import { BIGBROCOMPANYLogo, Header } from 'shared';
import * as S from './style';
import { FormInput } from 'client/components';
import { InputType, LoginFormType } from 'client/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginFormSchema } from 'client/schemas';
import { backgroundImg } from 'client/public';
import * as IMG from 'client/public';
import Image from 'next/image';
import { LoginSVG1, LoginSVG2 } from 'client/assets';

const LoginLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleFormSubmit: SubmitHandler<LoginFormType> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <Header type='client_clear' />
      <S.Container>
        <S.LeftBox>
          <S.ShadowBox>
            <BIGBROCOMPANYLogo />
            <S.LoginForm onSubmit={handleSubmit(handleFormSubmit)}>
              <FormInput
                {...register('id')}
                title='아이디'
                placeHolder='아이디를 입력해주세요'
                type={InputType.TEXT}
                errorMessage={errors.id?.message}
              />
              <FormInput
                {...register('password')}
                title='비밀번호'
                placeHolder='비밀번호를 입력해주세요'
                type={InputType.PASSWORD}
                errorMessage={errors.password?.message}
              />
              <S.FindPasswordButton href='/'>
                비밀번호 찾기
              </S.FindPasswordButton>
              <S.ButtonBox>
                <S.LoginButton>로그인</S.LoginButton>
                혹은
                <S.SignUpButton href='/signup'>회윈가입</S.SignUpButton>
              </S.ButtonBox>
            </S.LoginForm>
          </S.ShadowBox>
        </S.LeftBox>
        <S.RightBox>
          <S.SVGBundleContainer>
            <S.SVGBundleLeftBox>
              <Image src={IMG.Login1Img} alt='로그인 이미지 1' />
            </S.SVGBundleLeftBox>
            <S.SVGBundleRightBox>
              <LoginSVG1 />
              <S.SVGBundleMiddleImg src={IMG.Login2Img} alt='로그인 이미지 2' />
              <S.SVGBundleBottomBox>
                <LoginSVG2 />
              </S.SVGBundleBottomBox>
            </S.SVGBundleRightBox>
            <S.AbsoluteImg src={IMG.Login3Img} alt='로그인 이미지 3' />
          </S.SVGBundleContainer>
        </S.RightBox>
        <S.BackgroundImg src={backgroundImg} alt='배경화면' />
      </S.Container>
    </>
  );
};

export default LoginLayout;
