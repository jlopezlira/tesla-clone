import React from 'react'

import * as T from './CTAButton.types';
import * as S from './CTAButton.styles';

const CTAButton: React.FC<T.CTAButtonProps> = ({label, onClick}) => {
  return (
    <S.Button isPrimary onClick={onClick}>
      {label}
    </S.Button>
  )
}

export default CTAButton;
