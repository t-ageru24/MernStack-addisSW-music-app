import styled from "@emotion/styled";
import { Flex, Image } from "rebass";

export const Button = styled.button`
  padding: 2px 4px;
  margin: 5px;
  background: none;
  border: 1px solid rgb(21, 247, 40);
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  color: rgb(21, 247, 40);
  font-weight: bold;
  &:hover {
    background-color: rgb(21, 247, 40);
  }
  @media (max-width: 768px) {
    padding: 2px 3px;
    margin: 3px;
    font-size: 1rem;
  }
`;

export const StyledActiveButton = styled.button`
  padding: 2px 4px;
  margin: 5px;
  border:none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  font-weight: bold;
  color:rgb(0, 0, 0);
  background-color: rgb(21, 247, 40);
  &:hover {
    background-color: rgb(21, 247, 40);
  }
  @media (max-width: 768px) {
    padding: 2px 3px;
    margin: 3px;
    font-size: 1rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SongImage = styled(Image)`
  height: 36px;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ResponsiveFlex = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin: 1.5rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 5rem;
  & > Button {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;
