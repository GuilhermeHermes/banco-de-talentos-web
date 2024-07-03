import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface Props {
  rows: { id: number; name: string }[];
  deleteRow: (id: number) => void;
}

const BasicTable: React.FC<Props> = ({ rows, deleteRow }) => {
  const [tableRows, setTableRows] = useState<Props['rows']>(rows);

  useEffect(() => {
    setTableRows(rows);
  }, [rows]);




  console.log('tableRows:', tableRows);

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className='.MuiTable-root' stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>ID</TableCell>
            <TableCell>Name&nbsp;</TableCell>
            <TableCell align='right'>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" sx={{borderRight: '1px solid rgba(224, 224, 224, 1)'}}>
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align='right'>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteRow(row.id)}
                  size="small"
                  sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                >
                  <Close />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
