import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { categories } from "../../constants/categories";
import GalleryCategory from "../GalleryCategory";

export const Gallery = () => {
  const [activeCat, setActiveCat] = useState(2);

  const handleSelect = useCallback(
    (id: number) => {
      setActiveCat(id);
    },
    [setActiveCat]
  );

  return (
    <Container>
      <GalleryHeader>
        <h6>NFT Marketplace</h6>
        <h3>Hot Drops</h3>
      </GalleryHeader>
      <Categories>
        {categories.map((category) => (
          <GalleryCategory
            key={category.id}
            active={activeCat}
            onSelect={handleSelect}
            {...category}
          />
        ))}
      </Categories>
    </Container>
  );
};

const Container = styled.section`
  max-width: 124rem;
  margin: 0 auto;
`;

const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    color: #a902fe;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
  }

  h3 {
    font-size: 3.6rem;
    margin: 0.8rem 0 0 0;
    letter-spacing: 0.1rem;
  }
`;

const Categories = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
`;
