import { ExpandLess, ExpandMore, LocationOn } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import { experiences } from "./ExperienceData";

export const Experience = () => {
  const theme = useTheme();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = useCallback((id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <Box
      id="experience"
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
        scrollMarginTop: "90px"
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.text.primary, mb: 4 }}
      >
        Experience & Education
      </Typography>

      <Timeline position="alternate" sx={{ maxWidth: 900, width: "100%" }}>
        {experiences.map(
          (
            { id, period, company, country, summary, roles, type, skills },
            index
          ) => {
            const [current, ...earlier] = roles;
            const hasDetails = roles.some((r) => r.details.length > 0);
            const isExpanded = !!expandedItems[id];
            const isLeftCard = index % 2 === 0;

            return (
              <TimelineItem key={id}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    color={type === "education" ? "secondary" : "primary"}
                  />
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 2, px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    <Typography variant="h6">{current.title}</Typography>
                    {earlier.length > 0 && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="p"
                      >
                        Previously {earlier.map((r) => r.title).join(", ")}
                      </Typography>
                    )}
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent={isLeftCard ? "flex-start" : "flex-end"}
                      gap={{ xs: 1, sm: 2 }}
                      sx={{ mt: 0.5 }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "lightgray", mb: 1 }}
                      >
                        {company}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "lightgray",
                          mb: 1,
                          fontStyle: "italic",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <LocationOn sx={{ fontSize: 12, color: "lightgray" }} />
                        {country}
                      </Typography>
                    </Box>

                    {!isExpanded ? (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {summary}
                      </Typography>
                    ) : (
                      <Box id={`${id}-details`} sx={{ mt: 1 }}>
                        {roles.map((role) => (
                          <Box key={`${role.title}-${role.period}`} sx={{ mb: 1.5 }}>
                            {roles.length > 1 && (
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: "bold", mb: 0.5 }}
                              >
                                {role.title} · {role.period}
                              </Typography>
                            )}
                            {role.details.length > 0 && (
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {role.details.map((point, idx) => (
                                  <Typography
                                    key={idx}
                                    component="li"
                                    variant="body2"
                                  >
                                    {point}
                                  </Typography>
                                ))}
                              </Box>
                            )}
                          </Box>
                        ))}
                        {skills.length > 0 && (
                          <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            flexWrap="wrap"
                            sx={{ mt: 1 }}
                          >
                            {skills.map((skill) => (
                              <Chip key={skill} label={skill} size="small" />
                            ))}
                          </Stack>
                        )}
                      </Box>
                    )}

                    {hasDetails && (
                      <Button
                        size="small"
                        onClick={() => toggleExpand(id)}
                        endIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                        sx={{
                          mt: 2,
                          color: "lightblue",
                          textTransform: "none",
                        }}
                        aria-expanded={isExpanded}
                        aria-controls={`${id}-details`}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </Button>
                    )}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          }
        )}
      </Timeline>
    </Box>
  );
};