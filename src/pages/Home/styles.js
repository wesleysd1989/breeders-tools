import styled from "styled-components";

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
  margin-left: 16px;
  margin-top: 8px;
  width: 96%;

  svg {
    cursor: pointer;
  }
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
