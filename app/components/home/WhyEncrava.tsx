"use client";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import {
  ShieldCheck,
  Globe,
  BrainCircuit,
  Smartphone,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: <BrainCircuit size={22} />,
    title: "African Threat Intelligence",
    text: "Real-time intelligence built around African cybercrime patterns like M-Pesa fraud and SIM swap attacks.",
    smear: "/assets/smears/smear1.png",
    position: "top right",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "AI-Powered Detection",
    text: "Models trained on African phishing, fraud, and impersonation campaigns for higher accuracy.",
    smear: "/assets/smears/smear3.png",
    position: "bottom ",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile-First Security",
    text: "Designed for fintech, telecom, and mobile money ecosystems across Africa.",
    smear: "/assets/smears/smear1.png",
    position: "top left",
  },
  {
    icon: <Landmark size={22} />,
    title: "KDPA Compliance",
    text: "Aligned with Kenya Data Protection Act and regional regulatory frameworks.",
    smear: "/assets/smears/smear1.png",
    position: "bottom right",
  },
  {
    icon: <Globe size={22} />,
    title: "Pan-African Coverage",
    text: "Protecting organisations across East, West, and Southern Africa.",
    smear: "/assets/smears/smear3.png",
    position: "top",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Built for Africa",
    text: "Engineered specifically for African infrastructure, threats, and digital realities.",
    smear: "/assets/smears/smear1.png",
    position: "bottom right",
  },
];

export default function WhyEncrava() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "#fff",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Soft glow */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 320,
          height: 320,
          background: "rgba(22,107,95,0.08)",
          filter: "blur(120px)",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Left Side */}
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
                Why Encrava
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
                Built for{" "}
                <Box component="span" sx={{ color: "#166b5f" }}>
                  Africa’s
                </Box>{" "}
                Cyber Reality.
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
                Encrava blends AI-driven security with deep African threat
                intelligence to protect fintechs, governments, and enterprises
                across the continent.
              </Typography>
            </Stack>
          </Grid>

          {/* Cards Grid */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={0}>
              {items.map((item, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                  <Box
                    sx={{
                      position: "relative",
                      p: 4.5,
                      minHeight: 215,
                      borderRight: { lg: "1px solid rgba(15,23,42,0.08)" },
                      borderBottom: "1px solid rgba(15,23,42,0.08)",
                      overflow: "hidden",
                      "&:hover": {
                        backgroundColor: "rgba(22,107,95,0.03)",
                      },
                      transition: "0.25s ease",
                    }}
                  >
                    {/* Smear Background */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: -40,
                        backgroundImage: `url(${item.smear})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: item.position as any,
                        opacity: 0.11,
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />

                    {/* Content */}
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                      {/* Icon + Title in same line */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#166b5f",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#64748b",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>

                    {/* Arrow */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 24,
                        right: 24,
                        color: "#166b5f",
                        zIndex: 3,
                      }}
                    >
                      <ArrowUpRight size={18} />
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