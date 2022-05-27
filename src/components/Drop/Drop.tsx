import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Drop: React.FC<{
  active: boolean;
  onSelect: () => void;
}> = ({ active, onSelect }) => {
  return (
    <Container active={active} onClick={onSelect}>
      <Img
        src="/images/3d-nft-stylized-character-base-template-in-blender-3d-model-obj-fbx-blend.jpeg"
        width="100%"
        height={active ? "80%" : "100%"}
        layout="responsive"
        objectFit="cover"
        alt="ss"
      />
      <Details>
        <h5>Drop Name</h5>

        <Creator>@Creator</Creator>
        <Bottom>
          <Price>Price</Price>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2500"
            height="2500"
            viewBox="0 0 32 32"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#627EEA" />
              <g fill="#FFF" fillRule="nonzero">
                <path
                  fillOpacity=".602"
                  d="M16.498 4v8.87l7.497 3.35z"
                />
                <path d="M16.498 4L9 16.22l7.498-3.35z" />
                <path
                  fillOpacity=".602"
                  d="M16.498 21.968v6.027L24 17.616z"
                />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity=".2"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path
                  fillOpacity=".602"
                  d="M9 16.22l7.498 4.353v-7.701z"
                />
              </g>
            </g>
          </svg>
        </Bottom>
        {active && <CollectBtn>Collect Now</CollectBtn>}
      </Details>
    </Container>
  );
};

const Container = styled.article<{ active: boolean }>`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 2rem;
  background: #1a1920;
  outline: ${({ active }) =>
    active ? "solid 2px #2e5bff" : "none"};
`;

const Img = styled(Image)`
  border-radius: 1.5rem;
`;

const Details = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  h5 {
    font-size: 1.6rem;
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  svg {
    height: 2.4rem;
    width: auto;
  }
`;

const Creator = styled.p`
  font-size: 1.4rem;
  color: #9a9a9a;
  margin: 0.5rem 0 0 0;
`;

const Price = styled.span`
  font-size: 1.6rem;
  margin-top: 2rem;
`;

const CollectBtn = styled.button`
  border: none;
  margin: 1rem 0 0 0;
  background: #1e50ff;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: #fff;
  height: 4.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
