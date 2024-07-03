import FormDashboard from "@/ui/forms/dashboard"
import { Box } from "@mui/material"

export default function PanelPage() {
  return (
    <Box sx={{display: "flex", justifyContent:"center", width: "100%", paddingTop: "20px"}}>
      <FormDashboard title={"Consultas por área de conhecimento"} />
    </Box>
  )
}
