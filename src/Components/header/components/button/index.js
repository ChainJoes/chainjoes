import React from "react";
import { Box, Link, useMediaQuery } from "@mui/material";
import { useState } from "react";

const Button = ({ title, count, last, Logo, link }) => {
  const [hover, setHover] = useState(false);

  const smallDesktop = useMediaQuery("(min-width: 930px)");

  return (
    <Link
      style={{ background: "none", border: "none", padding: 0, margin: 0 }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={link}
      target="_blank"
      underline="none"
    >
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: "18px",
          cursor: "pointer",
          ":hover": {
            textShadow: "0 0 7px rgb(71 255 189 / 55%)",
            color: "#47fff4",
          },
        }}
      >
        <Box
          sx={{
            width: `calc(100vw/${count})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
          }}
        >
          {smallDesktop && (
            <Box sx={{ paddingRight: "14px" }}>
              <Logo color={hover ? "#47FFF4" : "#fff"} />
            </Box>
          )}
          <Box sx={{}}>{title}</Box>
        </Box>
        {!last && (
          <Box
            className="buttonLine"
            sx={{
              width: 122,
              height: 80,
              position: "absolute",
              right: -66,
              top: 0,
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default Button;
