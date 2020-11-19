import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SFooter = styled.footer`
  background-color: rgb(36, 21, 11);
  padding: 20px;
  text-align: center;
  color: #bfaa9c99;
  display: flex;
  justify-content: space-around;
`;

const Icons = styled.div`
  & > a {
    margin-right: 15px;
    font-size: 16px;
    color: #bfaa9c;
    opacity: 0.5;
    transition: all 300ms;
  }
  & > a:hover {
    opacity: 1;
  }
`;

const icon = [
  { ic: ["fab", "facebook-f"], ref: "https://facebock.com" },
  { ic: ["fab", "instagram"], ref: "https://instagram.com" },
  { ic: ["fab", "twitter"], ref: "https://twitter.com" },
  { ic: ["fab", "youtube"], ref: "https://youtube.com" },
  { ic: ["fab", "soundcloud"], ref: "https://soundcloud.com" },
];

export default function Footer() {
  return (
    <SFooter className="footer">
      <strong>Copyright 2020 &copy;</strong>
      <Icons>
        {icon.map((i) => {
          const info = i;
          const { ic, ref } = info;
          return (
            <a href={ref}>
              <FontAwesomeIcon icon={ic} />
            </a>
          );
        })}
      </Icons>
    </SFooter>
  );
}
