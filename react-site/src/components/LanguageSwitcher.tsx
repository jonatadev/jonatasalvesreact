import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import gbFlag from '../assets/flags/gb.svg';
import brFlag from '../assets/flags/br.svg';
import esFlag from '../assets/flags/es.svg';

const flags = [
  { code: 'en', img: gbFlag, label: 'English' },
  { code: 'pt', img: brFlag, label: 'Português' },
  { code: 'es', img: esFlag, label: 'Español' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {flags.map(flag => (
        <IconButton
          key={flag.code}
          onClick={() => i18n.changeLanguage(flag.code)}
          color={i18n.language === flag.code ? 'primary' : 'default'}
          aria-label={flag.label}
        >
          <img src={flag.img} alt={flag.label} style={{ width: 32, height: 32, borderRadius: 4 }} />
        </IconButton>
      ))}
    </Box>
  );
};

export default LanguageSwitcher;
