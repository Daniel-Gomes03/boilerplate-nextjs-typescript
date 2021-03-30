import * as S from './styles';

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}
