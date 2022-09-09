const FbLogo = ({ color }) => (
  <svg
    width="16"
    height="26"
    viewBox="0 0 16 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0667 9.6V7.6C10.0667 7.28501 10.0673 7.00878 10.1017 6.75776C10.1355 6.51058 10.1987 6.31724 10.3047 6.16473C10.5009 5.88235 10.9492 5.6 12.1429 5.6H14H14.4V5.2V1.168V0.815882L14.0507 0.771229C13.6266 0.717004 12.085 0.6 10.4628 0.6C8.70472 0.6 7.16148 1.12078 6.05439 2.15886C4.94343 3.20057 4.31429 4.72342 4.31429 6.64V9.6H1H0.6V10V14.8V15.2H1H4.31429V25V25.4H4.71429H9.66667H10.0667V25V15.2H12.7619H13.0718L13.1492 14.8999L14.3873 10.0999L14.5163 9.6H14H10.0667Z"
      stroke={color || "white"}
      stroke-width="0.8"
    />
  </svg>
);

export default FbLogo;