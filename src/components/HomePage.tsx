import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import profileImage from "../assets/profileImage.jpg"; // or use relative path

export const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 10,
        minHeight: "100vh",
        background: theme.palette.background.default,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        p: 4,
        flexWrap: "wrap",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box>
        <Typography variant="h2" component="h1" gutterBottom>
          Gayathri Prakash Menakath
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Full Stack Developer & React Enthusiast
        </Typography>
      </Box>

      <Box>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt="Gayathri Prakash Menakath"
            src={profileImage}
            sx={{
              width: 150,
              height: 150,
              transform: "scale(1.1)",
              objectFit: "cover",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
