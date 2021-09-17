import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import outros from '../assets/images/outros.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icone } from './UI';

export default (type) => {
  
  switch (type) {
    case 'Restaurante' :
        return(
          <Icone src={alimentacao} alt='Alimentacao' />          
        )
      break;

    case 'Saude' :
        return(
          <Icone src={saude} alt='Saúde' />
        )
      break;

    case 'Transporte' :
        return(
          <Icone src={transporte} alt='Transporte' />
        )
      break;

    case 'Utilidades' :
        return(
          <Icone src={utilidades} alt='Utilidades' />
        )
      break;

    case 'outros' :
    default:
        return(
          <Icone src={outros} alt='Outros' />
        )
      break;
  }  
}

