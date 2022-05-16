import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 130rem;
  margin: 3.2rem auto 0 auto;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 4rem;
`;

export const MenuLink = styled.a`
  font-size: 1.8rem;
  color: #9b9b9b;
  transition: all 150ms ease;

  :hover {
    color: #1e50ff;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38rem;
  margin-left: 3rem;
  border: solid 1.2px #676767;
  padding: 0 2rem;
  border-radius: 3rem;
  height: 5.5rem;
  transition: all 150ms ease;

  input[type="text"] {
    font-size: 1.8rem;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    width: 100%;
    margin-right: 2rem;
  }

  svg {
    height: 2.4rem;
    width: auto;
    color: #676767;
  }

  :focus-within {
    border-color: #1e50ff;

    svg {
      color: #1e50ff;
    }
  }
`;

export const WalletBtn = styled.button`
  cursor: pointer;
  width: 18rem;
  height: 5.6rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  background: #1e50ff;
  color: #fff;
  border: none;
  border-radius: 7rem;
  transition: all 150ms ease;

  :hover {
    background: #315eff;
  }
`;

export const Logo = styled.span`
  font-size: 2.6rem;
  font-weight: 700;
  user-select: none;
`;
