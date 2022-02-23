import React, { useContext } from 'react';

import { LangContext } from '../../context/LangContext';

import { translation } from '../../translation';

export const Translation = (props) => {
  const {
    text,
  } = props;

  const {
    language,
  } = useContext(LangContext);

  return (
    <>{translation[language][text]}</>
  )
}
