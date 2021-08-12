import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 203px;
  max-width: 375px;
`;
export const Title = styled.p`
  font-size: 24px;
  padding-top: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Img = styled.img`
  height: 150px;
`;
