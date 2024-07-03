import React, { useEffect } from 'react';
import './in.css';// Importa a imagem
import Image from 'next/image'
import icon from '../assets/img/Natalnet.png';// Importa a imagem
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { handleFocus, handleBlur, handleMouseEnter, handleMouseLeave } from '../../app/lib/handlers/handleForms';


const loginForm: React.FC = () => {
  
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica de submissão do formulário aqui
        console.log('Formulário enviado!');
    };

    
    const textFieldStyle = {
        marginBottom: '10px',
        margintop: '10px',
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
        <Typography variant="h2" gutterBottom>
        Banco de talentos
        </Typography>
        <Typography variant="h5" gutterBottom>
         Login
        </Typography>

    </Box>
    <TextField className='form-control'
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        fullWidth 
        style={textFieldStyle}
      />
   
    <TextField className='form-control'
        id="pwd"
        type="password"
        name="senha"
        placeholder="Senha"
        autoComplete="off"
        style={textFieldStyle}
      />
                <Box className="form-container">
                    <input type="checkbox" id="user-terms" name="user-terms" />
                    <label htmlFor="user-terms">Li e concordo com os <a href="www.facebook.com">Termos de serviço</a> e <a href="twitter.com">Políticas de privacidade</a></label>
                    <button type="submit">Login</button>
                    <span>Nov@ no banco de talentos? <a href="/public/user">Crie uma conta!</a></span>
                </Box>
            </form>

            <Box id="successModal" className="modal">
                <Box className="modal-content">
                    <span className="close-button">&times;</span>
                    <h2>Sucesso!</h2>
                    <p>Seu formulário foi enviado!</p>
                </Box>
            </Box>
        </Box>
    );
};

export default loginForm;
