import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, rgb(39, 44, 44), rgb(4, 13, 27))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        textAlign: "center", 
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", color: "whitesmoke" }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          color: "whitesmoke",
          mt: 3,
          lineHeight: 1.7,
          textAlign: "justify",
        }}
      >
        Hi! I’m Gayathri, a full-stack developer with around 4 years of
        experience building scalable, user-centric web applications. I’ve
        primarily worked in fast-paced B2B SaaS and AI startups, contributing to
        end-to-end feature development using React, TypeScript, GraphQL, and
        AWS. I’m comfortable across the stack—from designing responsive
        frontends to building reliable backend services—and enjoy collaborating
        closely with product and design teams to deliver thoughtful solutions.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          color: "whitesmoke",
          mt: 2,
          lineHeight: 1.7,
          textAlign: "justify",
        }}
      >
        My experience spans cloud infrastructure (AWS), CI/CD pipelines,
        performance monitoring, and delivering intuitive user experiences. I’m
        particularly passionate about clean, maintainable code and leveraging
        technology to solve real-world problems.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          color: "whitesmoke",
          mt: 2,
          mb: 2,
          lineHeight: 1.7,
          textAlign: "justify",
        }}
      >
        Currently based in Brisbane with full Australian work rights, I’m always
        open to opportunities where I can continue to grow and make an impact
        through thoughtful engineering.
      </Typography>
    </Box>
  );
};
