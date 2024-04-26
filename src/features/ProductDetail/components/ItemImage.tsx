import { Box, Zoom } from '@mui/material';
import React from 'react';

export default function ItemImage({ data }: any) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <Box width={1} position={'relative'} overflow={'hidden'}>
        <Box
          component={'img'}
          maxWidth={1}
          maxHeight={1}
          src={data.images.images[0]}
          alt={data.images.name}
          sx={{
            aspectRatio: 1,
            '&:hover': {
              transform: 'scale(1.6)',
            },
          }}
        />
      </Box>

      {/* <Box
          position={'absolute'}
          display={'none'}
          top={0}
          left={0}
          width={1}
          height={'auto'}
          sx={{
            '&:hover': {
              display: 'block',
            },
          }}
        ></Box> */}
    </>
  );
}

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';

// const ItemImage = ({ data }: any) => {
//   const [zoomWidth, setZoomWidth] = useState<number | null>(null);
//   const [imgPosition, setImgPosition] = useState({ top: 0, left: 0 });

//   const handleMouseEnter = () => {
//     setZoomWidth(300);
//   };

//   const handleMouseLeave = () => {
//     setZoomWidth(null);
//     setImgPosition({ top: 0, left: 0 });
//   };

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     const imgContElem = event.currentTarget;
//     const imgElem = imgContElem.querySelector('.imgElem');

//     if (imgElem) {
//       const imgWidth = imgElem.clientWidth;
//       const imgHeight = imgElem.clientHeight;

//       const objLeft = imgContElem.offsetLeft;
//       const objTop = imgContElem.offsetTop;

//       const xpos = event.clientX - objLeft;
//       const ypos = event.clientY - objTop;

//       const newImgPosition = {
//         top: -(
//           ((imgHeight - imgContElem.clientHeight) * ypos) /
//           imgContElem.clientHeight
//         ),
//         left: -(
//           ((imgWidth - imgContElem.clientWidth) * xpos) /
//           imgContElem.clientWidth
//         ),
//       };

//       setImgPosition(newImgPosition);
//     }
//   };

//   const changeHeight = () => {
//     const imgContElem = document.querySelector('.img-cont');

//     if (imgContElem) {
//       imgContElem.height = imgContElem.clientHeight + 'px';
//     }
//   };

//   React.useEffect(() => {
//     changeHeight();
//     window.addEventListener('resize', changeHeight);
//     return () => {
//       window.removeEventListener('resize', changeHeight);
//     };
//   }, []);

//   return (
//     <Box
//       className="img-cont"
//       height={'auto'}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//       sx={{
//         position: 'relative',
//         overflow: 'hidden',
//         width: '100%',
//         // height: '100%',
//       }}
//     >
//       <Box
//         className="imgElem"
//         component={'img'}
//         maxWidth={1}
//         maxHeight={1}
//         src={data.images.images[0]}
//         alt={data.images.name}
//         sx={{
//           width: zoomWidth ? `${zoomWidth}%` : '100%',
//           position: 'relative',
//           top: `${imgPosition.top}px`,
//           left: `${imgPosition.left}px`,
//         }}
//       />
//     </Box>
//   );
// };

// export default ItemImage;
