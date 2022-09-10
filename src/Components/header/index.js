import React from "react";
import { Box } from "@mui/material";
import Button from "./components/button";
import ButtonTexture from "../../img/button.png";
import { useState, useEffect } from "react";
import {
  DsLogo,
  FbLogo,
  InstLogo,
  MediumLogo,
  TgLogo,
  TwitterLogo,
} from "../icons";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }
  console.log(windowWidth);
  const buttons = [
    {
      title: "Facebook",
      logo: FbLogo,
      link: "https://facebook.com/ChainJoes",
    },
    {
      title: "Instagram",
      logo: InstLogo,
      link: "https://www.instagram.com/chainjoes",
    },
    {
      title: "Twitter",
      logo: TwitterLogo,
      link: "https://twitter.com/chainjoes",
    },
    { title: "Telegram", logo: TgLogo, link: "https://t.me/chainjoes" },
    {
      title: "Medium",
      logo: MediumLogo,
      link: "https://medium.com/@ChainJoes",
    },
    { title: "Discord", logo: DsLogo, link: "https://discord.gg/Pqnnt8Ag" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        background: `url(${ButtonTexture}), linear-gradient(180deg, rgba(56, 69, 78, 0.24) 0%, #121212 100%), #121212`,
        backgroundBlendMode: "overlay, normal, normal",
        boxShadow: "inset 0px -0.5px 1px rgba(116, 116, 116, 0.24);",
      }}
    >
      {buttons.map((item, index) => (
        <Button
          title={item.title}
          width={windowWidth / buttons.length}
          last={index === buttons.length - 1}
          Logo={item.logo}
          key={item.title}
          link={item.link}
        />
      ))}
    </Box>
  );
};

export default Header;
