import { Avatar, Box, IconButton, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{
        paddingTop: "80px",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 4,
        flexWrap: "wrap",
        textAlign: { xs: "center", md: "left" },
        background:
          "linear-gradient(135deg,rgb(39, 44, 44) 0%,rgb(4, 13, 27) 100%)",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "whitesmoke" }}
        >
          Gayathri Prakash Menakath
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 2, color: "whitesmoke" }}
        >
          Full Stack Developer & React Enthusiast
        </Typography>
      </Box>

      <Box>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt="Gayathri Prakash Menakath"
            src="/assets/react.svg"
            sx={{ width: 150, height: 150 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
