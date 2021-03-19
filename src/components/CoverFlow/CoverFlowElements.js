import styled from "styled-components";

// *,
// *::before,
// *::after {
//   box-sizing: border-box;
//   position: relative;
// }

// html,
// body {
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   font-size: 3vmin;
// }

// html {
//   background: #151515;
//   color: #fff;
//   overflow: hidden;
// }

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

//   .slideDescription {
//     margin: 0;
//     font-size: 0.8rem;
//     letter-spacing: 0.2ch;
//   }
// }

// .slideBackground {
//   position: fixed;
//   top: 0;
//   left: -10%;
//   right: -10%;
//   bottom: 0;
//   background-size: cover;
//   background-position: center center;
//   z-index: -1;
//   opacity: 0;
//   transition: opacity 0.3s linear, transform 0.3s ease-in-out;
//   pointer-events: none;

//   transform: translateX(calc(10% * var(--dir)));
// }

// .slide[data-active] {
//   z-index: 2;
//   pointer-events: auto;

//   .slideBackground {
//     opacity: 0.2;
//     transform: none;
//   }

//   .slideContentInner {
//     opacity: 1;
//   }

//   .slideContent {
//     --x: calc(var(--px) - 0.5);
//     --y: calc(var(--py) - 0.5);
//     opacity: 1;

//     transform: perspective(1000px);

//     &:hover {
//       transition: none;
//       transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
//         rotateX(calc(var(--y) * -45deg));
//     }
//   }
// }

export const SlideContentInner = styled.div`
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;

  .slideSubtitle,
  .slideTitle {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const SlideSubtitle = styled.h2`
  content: "— ";
`;
export const SlideDescription = styled.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.2ch;
`;
export const SlideBackground = styled.div`
  position: fixed;
  top: 0;
  left: -10%;
  right: -10%;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s linear, transform 0.3s ease-in-out;
  pointer-events: none;

  transform: translateX(calc(10% * var(--dir)));
`;

export const SlideBox = styled.div`
  div {
    .slide[data-active] {
      z-index: 2;
      pointer-events: auto;

      .slideBackground {
        opacity: 0.2;
        transform: none;
      }

      .slideContentInner {
        opacity: 1;
      }

      .slideContent {
        --x: calc(var(--px) - 0.5);
        --y: calc(var(--py) - 0.5);
        opacity: 1;

        transform: perspective(1000px);

        &:hover {
          transition: none;
          transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
            rotateX(calc(var(--y) * -45deg));
        }
      }
    }
  }
`;
