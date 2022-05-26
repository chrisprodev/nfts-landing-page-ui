import styled from "styled-components";

export const Container = styled.span<{ active?: boolean }>`
  cursor: pointer;
  background: ${({ active }) => (active ? "#0C1F65" : "#061033")};
  padding: 1.2rem 3.2rem;
  color: #2e5bff;
  font-size: 1.8rem;
  border-radius: 1rem;
  outline: ${({ active }) =>
    active ? "solid 2px #2e5bff" : "none"};

  :hover {
    background: #0c1f65;
  }
`;
