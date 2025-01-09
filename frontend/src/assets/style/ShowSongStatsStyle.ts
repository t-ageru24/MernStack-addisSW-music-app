import styled from "@emotion/styled";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: left;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  padding: 1rem 4rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 2rem;
  }
`;

export const StyledSpan = styled.span`
  background: rgb(21, 247, 40);
  color: rgb(0, 0, 0);
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: rgb(0, 200, 30);
    color: white;
  }
  @media (max-width: 768px) {
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: rgb(21, 247, 40);
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: rgb(0, 200, 30);
    color: white;
  }
`;

export const StyledOption = styled.option`
  color: rgb(0, 0, 0);
  background: rgb(21, 247, 40);
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
  &:hover {
    color: white;
    background-color: rgb(0, 200, 30);
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 4rem;
  @media (max-width: 768px) {
    margin: 1rem 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledH2 = styled.h2`
  color: rgb(21, 247, 40);
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1.5rem 4rem;
  text-align: left;
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

export const StyledSongsList = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0.8rem 1.5rem;
  list-style-type: none;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  & > li {
    display: ${(props) => (props.open ? "block" : "none")};
    margin: 0.5rem 0;
  }
  & > h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    padding: 0.8rem;
    & > li {
      margin: 0.4rem 0;
    }
  }
`;
