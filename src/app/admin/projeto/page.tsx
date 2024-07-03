import FormProject from "@/ui/forms/project"
import { Box } from "@mui/material"

export default function ProjectPage() {
  return (
    <Box sx={{display: "flex", justifyContent:"center", width: "100%", paddingTop: "20px"}}>
      <FormProject title={"Cadastro de projeto"} />
    </Box>
  )
}
