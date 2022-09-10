import "./App.css";
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Header from "./Components/header";
import Logo from "./img/logo.png";
import Scratches from "./img/scratches.png";
import DiscordButton from "./img/discord_button.png";
import DiscordLogo from "./img/discord_logo.png";
import SolanaLogo from "./img/solana_logo.png";
import Smoke from "./img/smoke.png";

function App() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Smoke})`,
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 80,
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <Header />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginTop: "37px",
        }}
      >
        <Box
          sx={{ width: 594, height: 443, backgroundImage: `url(${Logo})` }}
        />
        <Box
          sx={{
            width: 264,
            height: 264,
            backgroundColor: "#1ED4ED",
            filter: "blur(299px)",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
      <Box
        sx={{
          width: 320,
          textAlign: "center",
          marginTop: "19px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "19px",
        }}
      >
        <Typography
          color="#BDBDBD"
          fontSize={18}
          fontFamily="Inter"
          fontWeight={300}
        >
          Chain Joes is an action mobile game designed for the web3 generation
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          fontFamily="Furore"
          color="#FFFFFF"
          fontSize="140px"
          style={{ position: "relative" }}
        >
          Coming <Box style={{ display: "inline", color: "#00FFB7" }}>soon</Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundImage: `url(${Scratches})`,
              top: "20px",
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "25px",
          height: 80,
        }}
      >
        <Box
          sx={{
            width: 353,
            backgroundImage: `url(${DiscordButton})`,
            backgroundRepeat: "no-repeat",
            height: 75,
            transition: "all 0.2s ease-in-out",
            position: "relative",
            cursor: "pointer",
            ":hover": {
              width: 365,
              height: 78,
            },
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 26,
              backgroundImage: `url(${DiscordLogo})`,
              position: "absolute",
              top: "28px",
              left: "29px",
            }}
          />
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: 500,
              paddingLeft: "98px",
              paddingTop: "26px",
              textTransform: "uppercase",
            }}
          >
            Join discord server
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "35px",
          marginLeft: "38px",
          marginBottom: "38px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            fontFamily="Inter"
            fontSize="18px"
            fontWeight={300}
            color="#BDBDBD"
          >
            Powered by
          </Typography>
          <Box
            sx={{
              width: 220,
              height: 26,
              backgroundImage: `url(${SolanaLogo})`,
              marginTop: "10px",
            }}
          />
        </Box>
        <Link href="mailto:info@chainjoes.com" underline="none">
          <Box sx={{ paddingTop: "39px", paddingRight: "40px" }}>
            <Typography
              fontFamily="Inter"
              fontSize="18px"
              fontWeight={300}
              color="#CECECE"
            >
              info@chainjoes.com
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default App;
