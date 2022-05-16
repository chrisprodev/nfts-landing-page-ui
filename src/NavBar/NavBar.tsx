import React from "react";
import Link from "next/link";
import * as Styles from "./Styles";

const menuLinks = ["Drops", "MarketPlace", "Creator", "Community"];

export const NavBar: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Logo>NFT Vault</Styles.Logo>
      <Styles.NavMenu>
        {menuLinks.map((menuLink) => (
          <Link href="/" passHref key={menuLink}>
            <Styles.MenuLink>
              <a>{menuLink}</a>
            </Styles.MenuLink>
          </Link>
        ))}
      </Styles.NavMenu>
      <Styles.ActionsWrapper>
        <Styles.SearchWrapper>
          <input type="text" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Styles.SearchWrapper>
        <Styles.WalletBtn>Connect Wallet</Styles.WalletBtn>
      </Styles.ActionsWrapper>
    </Styles.Container>
  );
};
