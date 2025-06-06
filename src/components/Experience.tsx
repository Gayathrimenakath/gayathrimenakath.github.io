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
            {
              id,
              period,
              role,
              company,
              country,
              summary,
              details,
              type,
              skills,
            },
            index
          ) => (
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
                  sx={{ p: 3, backgroundColor: theme.palette.background.paper }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.primary,
                    }}
                  >
                    {role}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
                    gap={{ xs: 1, sm: 2 }}
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

                  {!expandedItems[id] ? (
                    <Typography variant="body2">{summary}</Typography>
                  ) : (
                    <Box sx={{ mt: 1 }}>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {details.map((point, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{
                              textAlign: "justify",
                              mb: 1,
                              lineHeight: 1.5,
                            }}
                          >
                            {point}
                          </Typography>
                        ))}
                      </Box>
                      {skills?.length > 0 && (
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          flexWrap="wrap"
                          sx={{ mt: 1 }}
                        >
                          {skills.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: "#2a2a2a",
                                color: "lightgray",
                                fontSize: "0.75rem",
                                borderRadius: 1,
                              }}
                            />
                          ))}
                        </Stack>
                      )}
                    </Box>
                  )}
                  {details.length > 0 && (
                    <Button
                      size="small"
                      onClick={() => toggleExpand(id)}
                      endIcon={
                        expandedItems[id] ? <ExpandLess /> : <ExpandMore />
                      }
                      sx={{ mt: 2, color: "lightblue", textTransform: "none" }}
                      aria-expanded={expandedItems[id] ? "true" : "false"}
                      aria-controls={`${id}-details`}
                    >
                      {expandedItems[id] ? "Show less" : "Read more"}
                    </Button>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Timeline>
    </Box>
  );
};
