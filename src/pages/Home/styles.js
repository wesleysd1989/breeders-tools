import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  .card {
    min-width: 100%;
    border: 2px solid #1eff36;
  }

  .card-header {
    background-color: #2e2e2e;
    color: #fff;
  }

  .card-body {
    background-color: #000;
  }
`;

export const Language = styled.section`
  margin-top: 8px;
  width: 96%;

  ${media.lessThan("medium")`
    width: 100%;
    margin-left: 0;
    display: flex;
    justify-content: center;
  `}

  svg {
    cursor: pointer;
  }
`;

export const LanguageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;

  ${media.lessThan("small")`
    width: 100%;
  `}
`;

export const Logo = styled.img`
  margin-top: 8%;
  width: 90px;
  height: 107px;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  min-width: 50%;
  margin-top: 24px;

  ${media.lessThan("medium")`
    min-width: 90%;
  `}

  .input-style {
    border-radius: 4px;
    border: 1px solid #1eff36;
    color: #fff;
    height: 32px;
  }
  .input-style:focus {
    outline: none !important;
    border: 1px solid #1eff36;
  }
`;

export const Footer = styled.section`
  margin-top: 80px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: #ffffff;
`;
