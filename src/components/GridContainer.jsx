import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";

// const GridContainer = () => {
//   const [numRows, setNumRows] = useState(0);
//   const [numCols, setNumCols] = useState(0);

//   const horizontalSpacing = 80; // Espacement horizontal entre les points
//   const verticalSpacing = 80; // Espacement vertical entre les points

//   useEffect(() => {
//     const updateGridSize = () => {
//       const containerWidth = window.innerWidth;
//       const containerHeight = window.innerHeight;
//       setNumCols(Math.floor(containerWidth / horizontalSpacing));
//       setNumRows(Math.floor(containerHeight / verticalSpacing));
//     };

//     updateGridSize();
//     window.addEventListener("resize", updateGridSize);

//     return () => {
//       window.removeEventListener("resize", updateGridSize);
//     };
//   }, [horizontalSpacing, verticalSpacing]);

//   return (
//     <div className="grid__container">
//       {[...Array(numRows)].map((_, row) => (
//         <div key={row} className="grid__row">
//           {[...Array(numCols)].map((_, col) => (
//             <GridItem key={col} row={row} col={col} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GridContainer;

// import React, { useState, useEffect, useRef } from "react";
// import GridItem from "./GridItem";

// const GridContainer = () => {
//   const [numRows, setNumRows] = useState(0);
//   const [numCols, setNumCols] = useState(0);
//   const containerRef = useRef(null);

//   const horizontalSpacing = 80; // Espacement horizontal entre les points
//   const verticalSpacing = 80; // Espacement vertical entre les points

//   useEffect(() => {
//     const updateGridSize = () => {
//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const containerHeight = containerRef.current.offsetHeight;
//         setNumCols(Math.floor(containerWidth / horizontalSpacing));
//         setNumRows(Math.floor(containerHeight / verticalSpacing));
//       }
//     };

//     updateGridSize();
//     window.addEventListener("resize", updateGridSize);

//     return () => {
//       window.removeEventListener("resize", updateGridSize);
//     };
//   }, [horizontalSpacing, verticalSpacing]);

//   return (
//     <div className="grid__container" ref={containerRef}>
//       {[...Array(numRows)].map((_, row) => (
//         <div key={row} className="grid__row">
//           {[...Array(numCols)].map((_, col) => (
//             <GridItem key={col} row={row} col={col} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GridContainer;
// import React, { useState, useEffect, useRef } from "react";
// import GridItem from "./GridItem";

// const GridContainer = () => {
//   const [numRows, setNumRows] = useState(0);
//   const [numCols, setNumCols] = useState(0);
//   const containerRef = useRef(null);

//   const horizontalSpacing = 80; // Espacement horizontal entre les points
//   const verticalSpacing = 80; // Espacement vertical entre les points

//   useEffect(() => {
//     const updateGridSize = () => {
//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const containerHeight = containerRef.current.offsetHeight;
//         setNumCols(Math.floor(containerWidth / horizontalSpacing));
//         setNumRows(Math.floor(containerHeight / verticalSpacing));
//       }
//     };

//     updateGridSize();
//     window.addEventListener("resize", updateGridSize);

//     return () => {
//       window.removeEventListener("resize", updateGridSize);
//     };
//   }, [horizontalSpacing, verticalSpacing]);

//   return (
//     <div className="grid__container" ref={containerRef}>
//       {[...Array(numRows)].map((_, row) => (
//         <div key={row} className="grid__row">
//           {[...Array(numCols)].map((_, col) => (
//             <GridItem key={col} row={row} col={col} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GridContainer;
const GridContainer = ({ width, height }) => {
  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);

  const horizontalSpacing = 80; // Espacement horizontal entre les points
  const verticalSpacing = 80; // Espacement vertical entre les points

  useEffect(() => {
    const updateGridSize = () => {
      setNumCols(Math.floor(width / horizontalSpacing));
      setNumRows(Math.floor(height / verticalSpacing));
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, [width, height, horizontalSpacing, verticalSpacing]);

  return (
    <div className="grid__container">
      {[...Array(numRows)].map((_, row) => (
        <div key={row} className="grid__row">
          {[...Array(numCols)].map((_, col) => (
            <GridItem key={col} row={row} col={col} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
