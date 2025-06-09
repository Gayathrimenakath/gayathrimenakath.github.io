import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import profileImage from "../assets/profileImage.jpg";

export const HomePage = () => {
  const theme = useTheme();

  const skills = ["ReactJS", "AWS", "GraphQL", "JavaScript", "TypeScript", "MUI"];

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
      <Box width={{ xs: "100%", md: "70%" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Gayathri Prakash Menakath
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Full-stack developer focused on building seamless user experiences
          using modern JavaScript technologies.
        </Typography>
        {skills?.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ mt: 1 }}
          >
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} size="small" variant="outlined" />
            ))}
          </Stack>
        )}
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
