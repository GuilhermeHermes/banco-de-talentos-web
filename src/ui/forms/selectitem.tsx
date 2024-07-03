"use client";
import { Box, Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';
import React from 'react';

interface SelectItemProps {
  hability: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ hability }) => {
    const [level, setLevel] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  return (
    <Box sx={{ 
      marginLeft: '20px', 
      marginRight: '20px', 
      justifyContent: 'space-between',

      alignItems: 'center',
      display: 'flex', 
      gap: '1rem', 
      width: '70%' 
    }}>
      <InputLabel id={`select-label-${hability}`} sx={{color:'blue',  whiteSpace: 'pre-wrap', // Permite que o texto quebre linha conforme necessário
          overflow: 'initial'}}>{hability}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={level} 
        label="1"
        onChange={handleChange}
        sx={{ height: '2rem', marginTop: '0.5rem', width: '70px'}}  
      >
        {[...Array(10)].map((_, index) => (
          <MenuItem key={index} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectItem;
