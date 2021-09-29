import React from 'react';
import { MeuBotao } from '../StyledComponents';
import './Button.css';


export const CustomButton = ({ children }) => {
   return (
      <MeuBotao>
         {children}
      </MeuBotao>
   );
};
