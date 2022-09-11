import React from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import Button from "./components/button";
import {
  DsLogo,
  FbLogo,
  InstLogo,
  MediumLogo,
  TgLogo,
  TwitterLogo,
} from "../icons";
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
    const html = document.documentElement;
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("root").classList.toggle("mobileMenu");
    console.log(html.style.overflow === "hidden");
    html.style.overflow === "hidden"
      ? (html.style.overflow = "auto")
      : (html.style.overflow = "hidden");
  };

  return (
    <Box>
      <Box
        className="menuButton"
        sx={{
          display: "flex",
          backgroundBlendMode: "overlay, normal, normal",
          boxShadow: "inset 0px -0.5px 1px rgba(116, 116, 116, 0.24);",
          backgroundSize: "cover",
          height: 80,
          justifyContent: !tablet && "end",
          WebkitJustifyContent: !tablet && "flex-end",
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
              className={isMenuOpen ? "closeMenu" : "closeMenu disabledMobile"}
              sx={{
                width: 122,
                height: 66,
                backgroundSize: "cover",
                marginRight: "20px",
                // transition: "0.1s background-image",
                // WebkitTransition: '0.1s background-image',
              }}
              onClick={handleMenu}
            ></Box>
            <Box
              className={isMenuOpen ? "openMenu disabledMobile" : "openMenu"}
              sx={{
                width: 122,
                height: 66,
                backgroundSize: "cover",
                marginRight: "20px",
                // transition: "0.1s background-image",
                // WebkitTransition: '0.1s background-image',
              }}
              onClick={handleMenu}
            ></Box>
              <Box
                className={!isMenuOpen ?  "smokeMobile disabledMobile": "smokeMobile"}
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
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "auto",
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
                      <Link
                        key={index}
                        href={item.link}
                        target="_blank"
                        underline="none"
                      >
                        <Box
                          sx={{
                            height: "26px",
                            marginBottom: "58px",
                            paddingLeft: "calc(50vw/2.5)",
                          }}
                        >
                          <Typography
                            component={"span"}
                            variant={"body2"}
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
                      </Link>
                    ))}
                  </Box>
                </Box>
                <Link
                  href="mailto:info@chainjoes.com"
                  underline="none"
                  style={{ flexGrow: 1, marginBottom: "80px" }}
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
                      className={!isMenuOpen && "disabledMobile"}
                    >
                      info@chainjoes.com
                    </Typography>
                  </Box>
                </Link>
              </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
