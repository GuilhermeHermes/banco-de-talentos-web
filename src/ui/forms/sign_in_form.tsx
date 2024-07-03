'use client'
import React, { useEffect, useState } from 'react';
import './in.css';
import Image from 'next/image'
import icon from '../assets/img/Natalnet.png';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import {  handleMouseEnter, handleMouseLeave } from '../../app/lib/handlers/handleForms';
import { createUser } from '@/app/lib/user/createUser';



interface FormState {
  message: string;
  type: boolean;
}

interface FormErrors { 
  name: string;
  email: string;
  telefone: string;
  senha: string;
  terms: string;
}

interface Props {
  onSubmit: () => void;
}

const SignInForm: React.FC<Props> = ({onSubmit}) => {
  

    useEffect(() => {
    const inputs = document.getElementById("mainform");

    if (inputs) {
     
      inputs.addEventListener('mouseenter', handleMouseEnter, true);
      inputs.addEventListener('mouseleave', handleMouseLeave, true);
    }

    return () => {
      if (inputs) {
        inputs.removeEventListener('mouseenter', handleMouseEnter, true);
        inputs.removeEventListener('mouseleave', handleMouseLeave, true);
      }
    };
  }, []);

  const [formState, setFormState] = useState<FormState>({message: '', type: false});
  const [formErrors, setFormErrors] = useState<FormErrors>({name: '', email: '', telefone: '', senha: '', terms: ''});
  const [termsChecked, setTermsChecked] = useState(false);
  const validateField = (fieldName: string, value: string): string => {
    let errorMessage = '';



    if (fieldName === 'name') {
      if (value.trim().length === 0) {
        errorMessage = 'Campo obrigatório';
        console.log('ENTROU AQUI AGORA')
      }
    }


    if (fieldName === 'email') {
      if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value.trim())) {
        errorMessage = 'Email inválido';
      }
    }

    if (fieldName === 'telefone') {
      if (!/^[0-9]{10,11}$/.test(value.trim())) {
        errorMessage = 'Número de telefone inválido.';
      }
    }

    if (fieldName === 'senha') {
      if (value.trim().length < 6) {
        errorMessage = 'Senha deve ter no mínimo 6 caracteres';
      }
    }

    return errorMessage;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    let errors: FormErrors = { name: '', email: '', telefone: '', senha: '', terms: ''};

    

    // Validate fields
    for (let [key, value] of formData.entries()) {
      const error = validateField(key, value as string);
      if (error) {
        errors = { ...errors, [key]: error };
      }
    }
    setFormErrors(errors);
    
    if(Object.values(errors).some(error => error !== '')) {
      
      return;
    }

    if (!termsChecked) {
      setFormErrors({ ...errors, terms: 'Você deve aceitar os termos de serviço' });
      return;
    }
    
    try {


      const response = await createUser(formData);
      
      
      setFormState({message: response.message as string, type: response.type});
      console.log('Resposta do servidor:', response);
      if(response.type){
      onSubmit();
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    
    }
  };

    
    const textFieldStyle = {
        marginBottom: '1rem',
        margintop: '1rem',
        width: '100%',
        
      };

    return (
        <Box className="container">
        <Image
            src={icon}
            alt="Picture of the author"
            
        />

    <form id="mainform" noValidate onSubmit={handleSubmit}>
    <Box>
        <Typography variant="h2" gutterBottom paddingTop={6}>
        Banco de talentos
        </Typography>
        <Typography variant="h5" gutterBottom>
          Criar seu cadastro
        </Typography>

    </Box>
    <TextField className='form-control'
          id="name"
          name="name"
          placeholder="Nome"
          autoComplete="off"
          error={!!formErrors.name}
          helperText={formErrors.name}
          fullWidth
          type='text'
          style={textFieldStyle}
          sx={{height: '10vh'}}
        />
    <TextField className='form-control'
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        error={!!formErrors.email}
        helperText={formErrors.email}
        fullWidth 
        style={textFieldStyle}
        sx={{height: '10vh'}}
      />
    <TextField className='form-control'
        id="telefone"
        name="telefone"
        placeholder="Telefone (+55)"
        autoComplete="off"
        error={!!formErrors.telefone}
          helperText={formErrors.telefone}
        style={textFieldStyle}
        sx={{height: '10vh'}}
      />
    <TextField className='form-control'
        id="senha"
        type="password"
        name="senha"
        placeholder="Senha 6+"
        autoComplete="off"
        error={!!formErrors.senha}
          helperText={formErrors.senha}
        style={textFieldStyle}
        sx={{height: '10vh'}}
      />
                <Box className="form-container">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                />
                <label htmlFor="terms">
                    Li e concordo com os{' '}
                    <a href="www.facebook.com">Termos de serviço</a> e{' '}
                    <a href="twitter.com">Políticas de privacidade</a>
                </label>
                <p style={{fontSize: '0.75rem', color: 'red', display: formErrors.terms ? 'block' : 'none'}}>{formErrors.terms}</p>
                <Typography variant="body1" sx={{ color: 'red', display: formState.type ? 'none' : 'block' }}>
                    {formState.message}
                </Typography>
                    <button type="submit">Sign In</button>
                    <span>Nov@ no banco de talentos? <a href="">Crie uma conta!</a></span>
                </Box>
            </form>
        </Box>
    );
};

export default SignInForm;
