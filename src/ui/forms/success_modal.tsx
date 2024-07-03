import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './in.css';

interface SuccessModalProps {
    open: boolean;
    handleClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, handleClose }) => {
    return (
        <Box className="modal" style={{ display: open ? 'flex' : 'none' }}>
            <Box className="modal-content">
                <span className="close-button" onClick={handleClose}>&times;</span>
                <h2>Sucesso!</h2>
                <p>Seu formulário foi enviado!</p>
            </Box>
        </Box>
    );
};

export default SuccessModal;
