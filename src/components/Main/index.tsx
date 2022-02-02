import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Header>
      <S.Logo src="vercel.svg" alt="Logo written vessel" />
    </S.Header>

    <S.Container>
      <S.CentralCover
        src="img/main_cover.jpg"
        alt="Emilio Henrique Corrêa profile photo"
      />
      <S.InfosContainer>
        <S.Title>
          Hi, I am Emilio. A Web Developer and this is my Boilerplate
        </S.Title>
        <S.Description>
          This Boilerplate was created with Next.JS, TypeScript, Jest, Testing
          Library and Styled Components
        </S.Description>
        <S.LinkButton href="https://linktr.ee/ehcorrea" target="_blank">
          links
        </S.LinkButton>
      </S.InfosContainer>
    </S.Container>
  </S.Wrapper>
);

export default Main;
