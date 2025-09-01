import React from 'react';
import { useTranslation } from 'react-i18next';

const Books: React.FC = () => {
  const { t } = useTranslation();
  const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

  const books = [
    {
      title: 'Fundamentals of Software Architecture: An Engineering Approach',
      author: 'Mark Richards, Neal Ford',
      image: '/books/fundamentals_software_architecture.jpg',
      description: '',
    },
    {
      title: 'Software Architecture: The Hard Parts: Modern Trade-Off Analyses for Distributed Architectures',
      author: 'Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani',
      image: '/books/software_architecture_hard_parts.jpg',
      description: '',
    },
    {
      title: 'Learning Domain-Driven Design: Aligning Software Architecture and Business Strategy',
      author: 'Vlad Khononov',
      image: '/books/learning_domain_driven_design.jpg',
      description: '',
    },
    {
      title: 'Modern Software Engineering - David Farley',
      author: 'David Farley',
      image: '/books/modern_software_engineering.jpg',
      description: '',
    },
    {
      title: 'Production-Ready Microservices: Building Standardized Systems Across an Engineering Organization',
      author: 'Susan J. Fowler',
      image: '/books/production_ready_microservices.jpg',
      description: '',
    },
    {
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      image: '/books/clean_code.png',
      description: '',
    },
    {
      title: 'Engenharia de Software Moderna',
      author: 'Marco Tulio Valente',
      image: '/books/engenharia_software_moderna.jpg',
      description: '',
    },
    {
      title: 'Team Geek: A Software Developer\'s Guide to Working Well with Others',
      author: 'Ben Collins-Sussman, Brian Fitzpatrick',
      image: '/books/team_geeek.jpg',
    description: '',
  },
  {
    title: 'Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Systems Using Kubernetes',
    author: 'Brendan Burns',
    image: '/books/designing_distributed_systems.jpg',
    description: '',
  },
  {
    title: 'Grokking Algorithms: An illustrated guide for programmers and other curious people 2nd',
    author: 'Aditya Bhargava',
    image: '/books/grokking_algorithms.jpg',
    description: '',
  },
  {
    title: 'Effective Java 3rd Edition',
    author: 'Joshua Bloch',
    image: '/books/effective_java.jpg',
    description: '',
  },
];

  const personalGrowthBooks = [
    {
      title: 'Sapiens : A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      image: '/books/sapiens.jpg',
      description: '',
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
  image: '/books/deep_work.png',
      description: '',
    },
    {
      title: 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness',
      author: 'Morgan Housel',
  image: '/books/psychology_money.jpg',
      description: '',
    },
    {
      title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      author: 'James Clear',
      image: '/books/atomic_habits.jpg',
      description: '',
    },
    {
      title: 'Essentialism: The Disciplined Pursuit of Less',
      author: 'Greg McKeown',
      image: '/books/essentialism.jpg',
      description: '',
    },
    {
  title: 'The Coming Wave: Technology, Power, and the Twenty-first Century\'s Greatest Dilemma',
  author: 'Mustafa Suleyman',
  image: '/books/next_wave.jpg',
      description: '',
    },
    {
      title: 'Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs',
      author: 'John Doerr',
  image: '/books/measure_what.jpg',
      description: '',
    },
    {
      title: 'Where Good Ideas Come From: The Natural History of Innovation',
  author: 'Steven Johnson',
  image: '/books/where_good_ideas.jpg',
      description: '',
    },
    
  ];

  return (
    <div style={{
      padding: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '1200px', // Define a largura máxima do contêiner principal
      margin: '0 auto' // Centraliza o conteúdo na tela
    }}>
      {/* Technical Books Section */}
      {books.length > 0 && (
        <React.Fragment>
          <h2 style={{margin: '0 0 1rem', fontSize: '1.15rem', color: '#1976d2', textAlign: 'left'}}>{t('books.technical')}</h2>
          <p style={{
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '2rem',
        fontWeight: 500,
        textAlign: 'center',
        background: 'rgba(245, 248, 255, 0.85)',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {t('books.intro')}
      </p>
          {books.map((book) => (
            <div key={book.title} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              background: 'rgba(245,248,255,0.85)',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,64,0.08)',
              padding: '1.2rem',
              width: '100%'
            }}>
              <img
                src={asset(book.image)}
                alt={book.title}
                style={{
                  width: '100%',
                  maxWidth: 110,
                  height: 'auto',
                  aspectRatio: '110/160',
                  objectFit: 'cover',
                  borderRadius: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.3rem', color: '#1a237e' }}>{book.title}</h3>
                <p style={{ fontSize: '0.98rem', color: '#333', margin: 0, fontWeight: 500 }}>{book.author}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      )}

      {/* Personal Growth Section */}
      {personalGrowthBooks.length > 0 && (
        <>
      <h2 style={{margin: '2rem 0 1rem', fontSize: '1.15rem', color: '#1976d2', textAlign: 'left'}}>Desenvolvimento pessoal</h2>
          {personalGrowthBooks.map((book) => (
            <div key={book.title} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              background: 'rgba(245,248,255,0.85)',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,64,0.08)',
              padding: '1.2rem',
              width: '100%'
            }}>
              <img
                src={asset(book.image)}
                alt={book.title}
                style={{
                  width: '100%',
                  maxWidth: 110,
                  height: 'auto',
                  aspectRatio: '110/160',
                  objectFit: 'cover',
                  borderRadius: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.3rem', color: '#1a237e' }}>{book.title}</h3>
                <p style={{ fontSize: '0.98rem', color: '#333', margin: 0, fontWeight: 500 }}>{book.author}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Books;
