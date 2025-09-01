
import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const sections = [
  { id: 'intro', label: 'Introdução' },
  { id: 'syntax', label: 'Sintaxe dos Records' },
  { id: 'features', label: 'Principais Características' },
  { id: 'usecases', label: 'Casos de Uso' },
  { id: 'comparison', label: 'Records vs Classes' },
  { id: 'conclusion', label: 'Conclusão' },
];

const Articles: React.FC = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleScroll = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'flex-start',
      py: 4,
      bgcolor: '#fafafa',
      px: { xs: 2, md: 0 }
    }}>
      {/* Menu lateral no desktop, horizontal no mobile */}
      <Box sx={{
        width: { xs: '100%', md: 220 },
        mr: { xs: 0, md: 4 },
        mb: { xs: 2, md: 0 },
      }}>
        <Paper elevation={2} sx={{ p: 2, position: { md: 'sticky' }, top: { md: 80 } }}>
          <Typography variant="h6" gutterBottom>Contents</Typography>
          <List sx={{ display: { xs: 'flex', md: 'block' }, flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 1, md: 0 }, overflowX: { xs: 'auto', md: 'visible' } }}>
            {sections.map(sec => (
              <ListItem key={sec.id} disablePadding sx={{ width: { xs: 'auto', md: '100%' } }}>
                <ListItemButton onClick={() => handleScroll(sec.id)} sx={{ px: { xs: 1, md: 2 }, py: { xs: 1, md: 1 } }}>
                  <Typography variant="body2">{sec.label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      <Box sx={{
        maxWidth: 700,
        width: '100%',
        mx: 'auto',
        px: { xs: 1, md: 2 },
      }}>
  <Typography
    variant="h3"
    gutterBottom
    sx={{
      fontSize: { xs: '1.5rem', md: '2.2rem' },
      lineHeight: 1.2,
      mt: { xs: 2, md: 3 },
      mb: { xs: 2, md: 3 },
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%'
    }}
  >
    Java Records: Imutabilidade e Simplicidade
  </Typography>
        <div ref={el => { sectionRefs.current['intro'] = el; }} id="intro">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Introdução</Typography>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            Os <b>records</b> foram introduzidos no Java 14 como uma forma concisa de declarar classes imutáveis que servem principalmente para transportar dados. Eles reduzem a verbosidade do código e facilitam a criação de tipos de dados simples, como DTOs e Value Objects.
          </Typography>
        </div>
        <div ref={el => { sectionRefs.current['syntax'] = el; }} id="syntax">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Sintaxe dos Records</Typography>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            A declaração de um record é simples:
          </Typography>
          <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 }, mb: { xs: 2, md: 2 }, bgcolor: '#f5f5f5', overflowX: 'auto' }}>
            <pre style={{ fontSize: '0.95em', margin: 0 }}>{`public record Pessoa(String nome, int idade) {}`}</pre>
          </Paper>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            O compilador gera automaticamente os métodos <code>equals</code>, <code>hashCode</code>, <code>toString</code> e os acessores para os campos.
          </Typography>
        </div>
        <div ref={el => { sectionRefs.current['features'] = el; }} id="features">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Principais Características</Typography>
          <ul>
            <li>Imutabilidade: os campos são finais e não podem ser alterados.</li>
            <li>Redução de código boilerplate.</li>
            <li>Sem necessidade de implementar manualmente métodos comuns.</li>
            <li>Podem implementar interfaces.</li>
            <li>Podem ter métodos estáticos e de instância.</li>
          </ul>
        </div>
        <div ref={el => { sectionRefs.current['usecases'] = el; }} id="usecases">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Casos de Uso</Typography>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            Records são ideais para:
          </Typography>
          <ul>
            <li>DTOs (Data Transfer Objects)</li>
            <li>Value Objects</li>
            <li>Representação de dados simples</li>
          </ul>
        </div>
        <div ref={el => { sectionRefs.current['comparison'] = el; }} id="comparison">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Records vs Classes</Typography>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            Enquanto classes tradicionais permitem mutabilidade e herança, records são restritos à imutabilidade e não podem estender outras classes (apenas implementar interfaces). Use records quando precisar de tipos simples e imutáveis.
          </Typography>
        </div>
        <div ref={el => { sectionRefs.current['conclusion'] = el; }} id="conclusion">
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, mb: { xs: 1, md: 2 } }}>Conclusão</Typography>
          <Typography sx={{ mb: { xs: 2, md: 2 }, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
            Records tornam o código Java mais limpo e seguro para manipulação de dados. Adote records sempre que precisar de tipos imutáveis e concisos!
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Articles;
