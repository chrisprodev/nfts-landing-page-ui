import React from "react";
import * as Styles from "./Styles";
import { Categories } from "../../models/categories";

interface Props extends Categories {
  onSelect: () => void;
}

export const GalleryCategory: React.FC<Props> = ({
  id,
  name,
  active,
  onSelect,
}) => {
  return (
    <Styles.Container active={id === active} onClick={onSelect}>
      {name}
    </Styles.Container>
  );
};
