import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const linkedinIcon = `${import.meta.env.BASE_URL}img/linkedin.png`;
const githubIcon = `${import.meta.env.BASE_URL}img/github.png`;
const twitterIcon = `${import.meta.env.BASE_URL}img/twitter.png`;
const blueskyIcon = `${import.meta.env.BASE_URL}img/bluesky.png`;
const instagramIcon = `${import.meta.env.BASE_URL}img/instagram.png`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: '#0d1a2f', color: '#fff', py: 3, mt: 6 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          {t('footer.designed')}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
          {t('footer.powered')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
          <a href="https://www.linkedin.com/in/jonatasdev/" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onBlur={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: 24, height: 24, borderRadius: 6 }} />
          </a>
          <a href="https://github.com/jonatadev" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onBlur={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={githubIcon} alt="GitHub" style={{ width: 24, height: 24, borderRadius: 6 }} />
          </a>
          <a href="https://x.com/jonatadev" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onBlur={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={twitterIcon} alt="Twitter" style={{ width: 24, height: 24, borderRadius: 6 }} />
          </a>
          <a href="https://bsky.app/profile/jonatasdev.bsky.social" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onBlur={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={blueskyIcon} alt="Bluesky" style={{ width: 24, height: 24, borderRadius: 6 }} />
          </a>
          <a href="https://www.instagram.com/jonatasdev/?hl=pt-br" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onBlur={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={instagramIcon} alt="Instagram" style={{ width: 24, height: 24, borderRadius: 6 }} />
          </a>
        </Box>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
          &copy; {new Date().getFullYear()} Jonatas Alves. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
