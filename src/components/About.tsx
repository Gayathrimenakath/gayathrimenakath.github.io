import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import resume from "../assets/resume_GayathriMenakath.pdf";


export const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        minHeight: "100vh",
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        About Me
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 800, textAlign: "left" }}>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Hi! I'm Gayathri, a full stack engineer with 4+ years of experience
          building data-heavy products with React, TypeScript, GraphQL and
          PostgreSQL. At AgriProve, a soil-carbon platform, I've worked across
          the whole stack, from customer-facing features to owning the
          carbon-crediting calculator and the systems around it.
        </Typography>
        <Typography variant="body1" sx={{ mt: 4 }}>
          I enjoy problems where the data has to be right: implementing a
          regulated carbon-crediting method and reconciling it against lodged
          reports, building geospatial pipelines with PostGIS and Temporal, and
          generating print-quality reports with maps. Before AgriProve, I built
          cloud applications on AWS and GraphQL at Voiseed, an AI
          text-to-speech startup in Milan.
        </Typography>
        <Typography variant="body1" sx={{ mt: 4 }}>
          I work closely with science, GIS, product and operations teams, write
          design documents, review code, and use AI tools such as Claude Code
          day to day.
        </Typography>
        <Typography variant="body1" sx={{ mt: 4, mb: 2 }}>
          Based in Brisbane with full Australian work rights, and open to
          remote roles across Australia as well as hybrid or on-site roles in
          Brisbane.
        </Typography>

      </Box>
    </Box>
  );
};