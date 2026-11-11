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

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, md: 12 }}
        sx={{ maxWidth: "100%" }}
      >
        {ProjectData.map(
          ({ id, title, context, date, description, tech, link, linkLabel }) => (
            <Grid size={6} key={id} sx={{ display: "flex" }}>
              <Paper
                elevation={3}
                sx={{
                  m: 3,
                  p: 5,
                  flexGrow: 1,
                  backgroundColor: theme.palette.background.paper,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" component="h3">
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {context}
                  {date ? ` • ${date}` : ""}
                </Typography>

                <Box component="ul" sx={{ pl: 2, pt: 1, m: 0, flexGrow: 1 }}>
                  {description.map((point, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>

                {link && (
                  <Box sx={{ mt: 1 }}>
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
                      {linkLabel ?? "View"}
                      <Launch fontSize="inherit" />
                    </Link>
                  </Box>
                )}

                {tech.length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 2 }}
                  >
                    {tech.map((skill) => (
                      <Chip key={skill} label={skill} size="small" />
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