import React from "react";

const GridItem = ({ row, col }) => {
  // Ajuster l'espacement horizontal et vertical entre les points
  const horizontalSpacing = 80; // Espacement horizontal entre les points
  const verticalSpacing = 80; // Espacement vertical entre les points

  const itemStyle = {
    left: `${col * horizontalSpacing}px`, // Calcul de l'espacement horizontal
    top: `${row * verticalSpacing}px`, // Calcul de l'espacement vertical
  };

  return <div className="grid__item" style={itemStyle} />;
};

export default GridItem;
