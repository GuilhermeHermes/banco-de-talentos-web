'use client'; 
import React, { useState } from 'react';
import SuccessModal from '../../../ui/forms/success_modal';
import { Box, CssBaseline, } from '@mui/material';
import { useRouter } from 'next/navigation';

import SignInForm from '../../../ui/forms/sign_in_form';


const SignInPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    const handleFormSubmit = () => {
        setModalOpen(true);
        setTimeout(() => {
            router.push('/admin/colaborador'); 
        }, 1000); 
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Box sx={{display: "flex", justifyContent:"center", width: "100%"}}>
            <CssBaseline />
            <SignInForm onSubmit={handleFormSubmit} />
            <SuccessModal open={modalOpen} handleClose={handleCloseModal} />
        </Box>
    );
};

export default SignInPage;