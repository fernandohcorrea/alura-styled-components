import React from 'react';
import { Box, Button } from '../UI';
import { extratoLista } from '../../info';
import Items from '../Items';

const Extrato = () => {
  return (
    <Box>
      <Items extratoLista={extratoLista} />      
      <Button>
        Ver Mais
      </Button>
    </Box>
  )
}

export default Extrato;
