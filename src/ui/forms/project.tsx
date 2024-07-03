'use client';
import React, { useState,  useEffect  } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import BasicTable from './table_project';
import getUserData from '../../app/lib/user/data';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


interface Props {
  title: string;
}

interface User {
  id: number;
  name: string;
}

const FormProject: React.FC<Props> = ({ title }) => {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [membro, setMembro] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [userNames, setUserNames] = useState<string[]>([]);
  const [rows, setRows] = useState<User[]>([]);
  


  

  useEffect(() => {

    const fetchUsers = async () => {
      try{
        const data: User[] | undefined= await getUserData();
        if(data){
          setUsers(data);
          setUserNames(data.map(user => user.name));
        }
      }catch(error){
        console.error('Erro ao buscar dados do usuário:', error);
                    }
    }

    fetchUsers();
  },[])

  const handleAutocompleteChange = (event: React.ChangeEvent<{}>, value: string | null) => {
    setMembro(value);
  };

  const handleAddMember = () => {
    if (membro) {
      const selectedUser = users.find(user => user.name === membro);
      if (selectedUser) {
        setRows([...rows, selectedUser]);
        setUserNames(userNames.filter(name => name !== membro));
        setMembro(null);
      }
    }
  };

  const handleDeleteMemberInRow = (id: number) => {
    const removedUser = rows.find(row => row.id === id);
    console.log('removedUser:', removedUser);
    if (removedUser) {
     
      const updatedRows = rows.filter(row => row.id !== id);
      setRows(updatedRows);
  
      
      setUserNames([...userNames, removedUser.name]);
    }
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('nomeProjeto', nomeProjeto);
    formData.append('equipe', membro ?? '');
    
    console.log('FORMDATA:',formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vh',
        alignItems: 'inherit',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nome"
          label="Nome do Projeto"
          fullWidth
          required
          value={nomeProjeto}
          onChange={(e) => setNomeProjeto(e.target.value)}
          type="text"
          sx={{ marginBottom: 2, backgroundColor: 'white' }}
        />
        <Box display={'flex'}>
        <Autocomplete   
          disablePortal
          id="combo-box-demo"
          options={userNames}
          value={membro}
          onChange={handleAutocompleteChange}
          sx={{ width: 300 , backgroundColor: 'white'}}
          renderInput={(params) => <TextField {...params} label="Membros disponíveis" />}>
          </Autocomplete>
          <IconButton color="primary" onClick={handleAddMember}>
            <AddIcon />
          </IconButton>
          </Box>
        <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 2 }}>
          Equipe</Typography>
          <BasicTable rows={rows} deleteRow={handleDeleteMemberInRow}></BasicTable>
        <Button variant="contained" type="submit" fullWidth sx={{marginTop: "10px"}}>
          Cadastrar Colaborador
        </Button>
      </form>


    </Box>
  );
};

export default FormProject;
