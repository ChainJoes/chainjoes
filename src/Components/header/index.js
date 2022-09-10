import React from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import Button from "./components/button";
import ButtonTexture from "../../img/button.png";
import {
  DsLogo,
  FbLogo,
  InstLogo,
  MediumLogo,
  TgLogo,
  TwitterLogo,
} from "../icons";
import MenuButton from "../../img/menu2.png";
import CloseButton from "../../img/close2.png";
import Smoke from "../../img/smoke_mobile.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tablet = useMediaQuery("(min-width: 768px)");

  const buttons = [
    {
      title: "Facebook",
      logo: FbLogo,
      link: "https://facebook.com/ChainJoes",
      iconWidth: 13,
    },
    {
      title: "Instagram",
      logo: InstLogo,
      link: "https://www.instagram.com/chainjoes",
      iconWidth: 26,
    },
    {
      title: "Twitter",
      logo: TwitterLogo,
      link: "https://twitter.com/chainjoes",
      iconWidth: 31,
    },
    {
      title: "Telegram",
      logo: TgLogo,
      link: "https://t.me/chainjoes",
      iconWidth: 29,
    },
    {
      title: "Medium",
      logo: MediumLogo,
      link: "https://medium.com/@ChainJoes",
      iconWidth: 36,
    },
    {
      title: "Discord",
      logo: DsLogo,
      link: "https://discord.gg/Pqnnt8Ag",
      iconWidth: 32,
    },
  ];

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("mobileMenu");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          background: `url(${ButtonTexture}), linear-gradient(180deg, rgba(56, 69, 78, 0.24) 0%, #121212 100%), #121212`,
          backgroundBlendMode: "overlay, normal, normal",
          boxShadow: "inset 0px -0.5px 1px rgba(116, 116, 116, 0.24);",
          backgroundSize: "cover",
          height: 80,
          justifyContent: !tablet && "end",
          alignItems: !tablet && "center",
        }}
      >
        {tablet ? (
          buttons.map((item, index) => (
            <Button
              title={item.title}
              count={buttons.length}
              last={index === buttons.length - 1}
              Logo={item.logo}
              key={item.title}
              link={item.link}
            />
          ))
        ) : (
          <Box>
            <Box
              sx={{
                backgroundImage: `url(${
                  isMenuOpen ? CloseButton : MenuButton
                })`,
                width: 122,
                height: 66,
                backgroundSize: "cover",
                marginRight: "20px",
                transition: "all 0.1s ease-in-out",
              }}
              onClick={handleMenu}
            ></Box>
            {isMenuOpen && (
              <Box
                sx={{
                  position: "fixed",
                  top: "80px",
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: "9999",
                  backgroundColor: "#0D0D0D",
                  display: "flex",
                  flexDirection: "column",
                  backgroundImage: `url(${Smoke})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <Box
                  sx={{
                    flexGrow: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto auto",
                      marginTop: "140px",
                    }}
                  >
                    {buttons.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          height: "26px",
                          marginBottom: "58px",
                          paddingLeft: "calc(50vw/2.5)",
                        }}
                      >
                        <Typography
                          fontSize="14px"
                          fontFamily="Inter"
                          fontWeight="300"
                          color="#FFFFFF"
                          style={{
                            position: "relative",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              left: -item.iconWidth - 20,
                            }}
                          >
                            <item.logo color="#00FFB7" />
                          </Box>
                          {item.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Link
                  href="mailto:info@chainjoes.com"
                  underline="none"
                  style={{ flexGrow: 1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontWeight={400}
                      fontSize="22px"
                      color="#CECECE"
                    >
                      info@chainjoes.com
                    </Typography>
                  </Box>
                </Link>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
