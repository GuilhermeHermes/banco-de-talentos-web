
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  title: string;
}

const FormDashboard: React.FC<Props> = ({title}) =>{
  
  const initialState = {
    message: '',
  }


  return (
    <Box
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" , width:"100%"}}
  >
    <Typography variant="h4" sx={{ marginBottom: 2 }}>
      {title}
    </Typography>
    <form>
      <TextField
        name="nome"
        label="Nome"
        fullWidth
        required
        variant="filled"
        type="Text"
        sx={{ marginBottom: 2 }}
      />
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={12}
    label="Age"
    fullWidth
    sx={{width: "100%", marginBottom: "5px"  }}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      <Button variant="contained" type="submit" fullWidth>
        Cadastrar Colaborador
      </Button>
    </form>
  </Box>
)
}

export default FormDashboard;

