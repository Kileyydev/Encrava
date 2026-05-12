"use client";

import Link from "next/link";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import {
  ShieldCheck,
  Activity,
  FileCheck2,
  Smartphone,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";

const items = [
  {
    slug: "cybersecurity-risk-assessment",
    icon: <ShieldCheck size={22} />,
    title: "Cybersecurity Risk Assessment",
    text: "Deep evaluation of systems aligned with KDPA 2019, ISO 27001, and NIST standards.",
    smear: "/assets/smears/smear1.png",
    position: "top right",
  },
  {
    slug: "penetration-testing",
    icon: <Activity size={22} />,
    title: "Penetration Testing (VAPT)",
    text: "Real-world attack simulations across web, APIs, mobile, and fintech infrastructure.",
    smear: "/assets/smears/smear3.png",
    position: "bottom",
  },
  {
    slug: "kdpa-compliance-programme",
    icon: <FileCheck2 size={22} />,
    title: "KDPA Compliance Programme",
    text: "Full data protection compliance including audits, DPIAs, and ODPC registration support.",
    smear: "/assets/smears/smear1.png",
    position: "top left",
  },
  {
    slug: "mobile-fintech-security",
    icon: <Smartphone size={22} />,
    title: "Mobile & Fintech Security",
    text: "Security for mobile money systems, fintech apps, APIs, and telecom environments.",
    smear: "/assets/smears/smear1.png",
    position: "bottom right",
  },
  {
    slug: "incident-response-retainer",
    icon: <AlertTriangle size={22} />,
    title: "Incident Response & Retainer",
    text: "24/7 breach response, forensic analysis, containment, and recovery support.",
    smear: "/assets/smears/smear3.png",
    position: "top",
  },
  {
    slug: "security-awareness-training",
    icon: <GraduationCap size={22} />,
    title: "Security Awareness Training",
    text: "Employee-focused training on phishing, fraud prevention, and cyber hygiene.",
    smear: "/assets/smears/smear1.png",
    position: "bottom right",
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* glow */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          left: -100,
          width: 320,
          height: 320,
          background: "rgba(22,107,95,0.08)",
          filter: "blur(120px)",
        }}
      />

      <Container maxWidth="xl">

        <Grid container spacing={6}>

          {/* LEFT = TITLE */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.5} sx={{ position: "sticky", top: 110 }}>

              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#166b5f",
                  textTransform: "uppercase",
                }}
              >
                Encrava Services
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "2.3rem", md: "3.6rem" },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: "#0f172a",
                }}
              >
                Cybersecurity Built for{" "}
                <Box component="span" sx={{ color: "#166b5f" }}>
                  Africa.
                </Box>
              </Typography>

              <Box sx={{ width: 90, height: 4, background: "#166b5f" }} />

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#64748b",
                  lineHeight: 1.8,
                  maxWidth: 420,
                }}
              >
                From penetration testing to compliance and incident response,
                Encrava delivers security systems tailored for African fintech,
                government, and enterprise environments.
              </Typography>

            </Stack>
          </Grid>

          {/* RIGHT = CARDS */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={0}>

              {items.map((item, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>

                  <Box
                    sx={{
                      position: "relative",
                      p: 4,
                      minHeight: 230,
                      borderRight: { lg: "1px solid rgba(15,23,42,0.08)" },
                      borderBottom: "1px solid rgba(15,23,42,0.08)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >

                    {/* smear */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: -40,
                        backgroundImage: `url(${item.smear})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: item.position,
                        opacity: 0.12,
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />

                    {/* content */}
                    <Box sx={{ position: "relative", zIndex: 2 }}>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 1.5,
                        }}
                      >
                        <Box sx={{ color: "#166b5f" }}>
                          {item.icon}
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#0f172a",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#64748b",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </Typography>

                    </Box>

                    {/* CTA */}
                    <Box sx={{ position: "relative", zIndex: 2, mt: 2 }}>

                      <Link
                        href={`/services/${item.slug}`}
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#166b5f",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                        }}
                      >
                        Learn More
                      </Link>

                    </Box>

                  </Box>

                </Grid>
              ))}

            </Grid>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}