import Header from "@/ui/layout/header";
import Navbar from "@/ui/layout/navbar";
import { Box } from "@mui/material";
import '../../app/globals.css'

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Header />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
}
