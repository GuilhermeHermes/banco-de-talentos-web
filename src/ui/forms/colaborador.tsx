'use client';
import { addColab } from "@/app/lib/action"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button" 
import { Typography } from "@mui/material"
import React, { useState } from "react"
import SelectItem from "./selectitem"

interface Props {
  title: string;
}

interface FormState {
  message: string;
  type: boolean;
}

interface FormErrors { 
  nome: string;
  email: string;
}

const FormColaborador: React.FC<Props> = ({title}) => {
  const [formState, setFormState] = useState<FormState>({message: '', type: false});
  const [formErrors, setFormErrors] = useState<FormErrors>({nome: '', email: ''});

  const validateField = (fieldName: string, value: string): string => {
    let errorMessage = '';

    if (value.trim() === '') {
      errorMessage = 'Campo obrigatório';
    }

    return errorMessage;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    let errors: FormErrors = { nome: '', email: '' };

    // Validate fields
    for (let [key, value] of formData.entries()) {
      const error = validateField(key, value as string);
      if (error) {
        errors = { ...errors, [key]: error };
      }
    }

    setFormErrors(errors);


    try {
      const response = await addColab(formData);
      
      
      setFormState({message: response.message as string, type: response.type});
      console.log('Resposta do servidor:', response);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    
    }
  };

  return (
     <Box
      sx={{ display: "flex", flexDirection: "column", width:"100%", alignItems: "center"}}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nome"
          label="Nome"
          fullWidth
          error={!!formErrors.nome}
          helperText={formErrors.nome}
          type="Text"
          sx={{ marginBottom: 2, backgroundcolor: "transparent"}}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth 
          error={!!formErrors.email}
          helperText={formErrors.email}
          type="email"
          sx={{ marginBottom: 2, backgroundcolor: "transparent"}}
        />
        
          <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 2}}>
        Nível de conhecimento:
      </Typography>
      <Box display="flex" alignItems="center" flexDirection={"row"} gap={"10px"} padding={2} margin={2} sx={{backgroundColor: "white", width: '100vh'}}>
        <Box display="flex" alignItems="center"  flexDirection={"column"} sx={{width: "50%"}}>
        <SelectItem hability="Arduino" />
        <SelectItem hability="Desenvolvimento Web" />
        <SelectItem hability="Javascript" />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection={"column"} sx={{ width: "50%"}}>
        <SelectItem hability="Python" />
        <SelectItem hability="CSS" />
        <SelectItem hability="HTML" />
        </Box>

      </Box>
      <Typography variant="body1" sx={{color: formState.type ? 'green' : 'red'}}>
      {formState.message}
        </Typography>
        <Button variant="contained" type="submit" fullWidth>
          Cadastrar Colaborador
        </Button>
      </form>
      <div>
      </div>
    </Box>
  )
}

export default FormColaborador;