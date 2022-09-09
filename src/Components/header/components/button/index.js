import { Box, Link } from "@mui/material";
import ButtonLine from "../../../../img/light_line.png";
import { useState } from "react";

const Button = ({ title, width, last, Logo, link }) => {
  const [hover, setHover] = useState(false);

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
        onHover={() => setHover(true)}
      >
        <Box
          sx={{
            width: width,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 80,

            // ":hover": {
            //   boxShadow: "inset 0px 0px 2px #47FFF4",
            //   filter: "drop-shadow(0px 0px 7px rgba(71, 255, 189, 0.55))",
            // },
          }}
        >
          <Box sx={{ paddingRight: "14px" }}>
            <Logo color={hover ? "#47FFF4" : "#fff"} />
          </Box>
          <Box sx={{}}>{title}</Box>
        </Box>
        {!last && (
          <Box
            sx={{
              backgroundImage: `url(${ButtonLine})`,
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
