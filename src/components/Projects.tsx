import { Launch } from "@mui/icons-material";
import {
  Box,
  Chip,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ProjectData } from "./ProjectData";

export const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        minHeight: "100vh",
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        py: 8,
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: "100%" }}>
        {ProjectData.map(
          ({ id, title, degree, date, description, tech, link }) => (
            <Grid size={6} key={id}>
              <Paper
                elevation={3}
                sx={{
                  m: 3,
                  p: 5,
                  height: 450,
                  backgroundColor: theme.palette.background.paper,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">{title}</Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {degree} • {date}
                </Typography>
                <Box
                  component="ul"
                  height={"70%"}
                  sx={{
                    pl: 2,
                    pt: 2,
                    m: 1,
                    flexGrow: 1,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#555 #1f1f1f",
                  }}
                >
                  {description.map((point, index) => (
                    <Typography key={index} component="li" variant="body2">
                      {point}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 1,
                  }}
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    variant="body2"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    Visit Paper
                    <Launch fontSize="inherit" />
                  </Link>
                </Box>

                {tech?.length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1 }}
                  >
                    {tech.map((skill, index) => (
                      <Chip key={index} label={skill} size="small" />
                    ))}
                  </Stack>
                )}
              </Paper>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
