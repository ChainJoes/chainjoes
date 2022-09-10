import "./App.css";
import "normalize.css";
import React, { useState, useEffect } from "react";
import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import Header from "./Components/header";
import Logo from "./img/logo.png";
import Scratches from "./img/scratches.png";
import ScratchesMobile from "./img/scratches_mobile.png";
import DiscordButton from "./img/discord_button.png";
import DiscordLogo from "./img/discord_logo.png";
import SolanaLogo from "./img/solana_logo.png";
import Smoke from "./img/smoke.png";

import preload from "./preloadImages";

function App() {
  const tablet = useMediaQuery("(min-width: 768px)");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const loaded = await preload();

      setIsLoaded(loaded);
    };

    load();
  }, []);

  return (
    <Box>
      {isLoaded ? (
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${Smoke})`,
              backgroundRepeat: "no-repeat",
              position: "absolute",
              backgroundSize: "cover",
              zIndex: -1,
            }}
          />
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                marginTop: "37px",
              }}
            >
              <Box
                sx={{
                  width: tablet ? 348 : 200,
                  height: tablet ? 259 : 150,
                  backgroundImage: `url(${Logo})`,
                  backgroundSize: "cover",
                }}
              />
              <Box
                sx={{
                  width: tablet ? 264 : 98,
                  height: tablet ? 264 : 99,
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
                width: tablet ? 320 : 240,
                textAlign: "center",
                marginTop: "19px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "19px",
              }}
            >
              <Typography
                color="#BDBDBD"
                fontSize={tablet ? 18 : 12}
                fontFamily="Inter"
                fontWeight={300}
              >
                Chain Joes is an action mobile game designed for the web3
                generation
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
                fontSize={tablet ? 104 : 50}
                style={{ position: "relative" }}
              >
                Coming{" "}
                <Box
                  style={{
                    display: tablet && "inline",
                    color: "#00FFB7",
                    textAlign: !tablet && "center",
                  }}
                >
                  soon
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: tablet ? "84px" : "100%",
                    position: "absolute",
                    backgroundImage: `url(${
                      tablet ? Scratches : ScratchesMobile
                    })`,
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
              <Link
                href="https://discord.gg/Pqnnt8Ag"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    width: tablet ? 353 : 259,
                    backgroundImage: `url(${DiscordButton})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: tablet ? 75 : 55,
                    transition: "all 0.2s ease-in-out",
                    position: "relative",
                    cursor: "pointer",
                    ":hover": tablet && {
                      width: 365,
                      height: 78,
                      "& p": {
                        paddingTop: "28px !important",
                        paddingLeft: "105px !important",
                      },
                      "& div": {
                        top: "30px",
                        left: "31px",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: tablet ? 35 : 24,
                      height: tablet ? 26 : 17,
                      backgroundImage: `url(${DiscordLogo})`,
                      backgroundSize: "cover",
                      position: "absolute",
                      top: tablet ? "28px" : "23px",
                      left: tablet ? "29px" : "22px",
                      transition: "all 0.2s ease-in-out",
                    }}
                  />
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "italic",
                      fontSize: tablet ? "20px" : "16px",
                      fontWeight: 500,
                      paddingLeft: tablet ? "98px" : "64px",
                      paddingTop: tablet ? "26px" : "20px",
                      textTransform: "uppercase",
                      color: "#000000",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    Join discord server
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "35px",
              marginLeft: tablet && "38px",
              marginBottom: "38px",
              display: "flex",
              justifyContent: tablet ? "space-between" : "center",
              flexGrow: 0,
            }}
          >
            <Box
              sx={
                !tablet && {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              }
            >
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
                  width: tablet ? 226 : 123,
                  height: tablet ? 26 : 14,
                  backgroundSize: "cover",
                  backgroundImage: `url(${SolanaLogo})`,
                  marginTop: tablet && "10px",
                  marginLeft: "5px",
                }}
              />
            </Box>
            {tablet && (
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
            )}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default App;
