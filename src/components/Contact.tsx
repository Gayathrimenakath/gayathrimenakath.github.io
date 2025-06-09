import { Email, GitHub, LinkedIn, LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        px: 4,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Contact
      </Typography>

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, md: 12 }}
        p={1}
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 2,
          m: 3,
          textAlign: "center",
        }}
      >
        {/* Social Links */}
        <Grid
          size={{ xs: 4, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h5">Let’s connect!</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn sx={{ fontSize: 14, color: "lightgray" }} />
            <Typography variant="body2" sx={{ pb: 0 }}>
              Brisbane, Australia
            </Typography>
          </Box>
          <Box>
            <IconButton
              href="https://github.com/Gayathrimenakath"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/gayathri-menakath-37ab31106"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#0e76a8" }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:gayathrimenakath@gmail.com"
              sx={{ color: theme.palette.text.primary }}
            >
              <Email fontSize="large" />
            </IconButton>

            <Typography variant="body2" sx={{ mt: 2 }}>
              Curious about what’s on my mind beyond code? Explore my thoughts
              on life, people, and experiences in my{" "}
              <Link
                href="https://gayathrimenakath96.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                personal blog
              </Link>
              .
            </Typography>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 4, md: 6 }} p={1}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid size={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
