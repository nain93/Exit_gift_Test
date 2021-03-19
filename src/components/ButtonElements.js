import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
  margin: 10px 0;
  margin-right: 10px;
  border-radius: 7px;
  background: ${({ primary }) => (primary ? "#fff" : "#010606")};
  white-space: nowrap;
  padding: ${(big) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "18px")};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ce7777" : "#01BF71")};
    color: #fff;
  }
`;

export const Button2 = styled(Link)`
  margin: 10px 0;
  margin-right: 10px;
  border-radius: 7px;
  background: ${({ primary }) => (primary ? "#ce7777" : "#010606")};
  white-space: nowrap;
  padding: ${(big) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "18px")};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: #010606;
  }
`;
