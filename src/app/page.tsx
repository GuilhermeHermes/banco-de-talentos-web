'use client'; 
import React, { useState } from 'react';
import LoginForm from '../ui/forms/login_form';
import SuccessModal from '../ui/forms/success_modal';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';



const App: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
      <Box>  
           <LoginForm />
           <SuccessModal open={modalOpen} handleClose={handleCloseModal} />
           </Box>
    );
};

export default App;
