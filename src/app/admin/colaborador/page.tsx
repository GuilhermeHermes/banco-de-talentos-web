import FormColaborador from "@/ui/forms/colaborador"
import { Box } from "@mui/material"

export default function ColaboradorPage() {
  return (
    <Box sx={{display: "flex", justifyContent:"center", width: "100%", paddingTop: "20px"}}>
      <FormColaborador title={"Cadastro de Colaboradores"} />
    </Box>
  )
}
