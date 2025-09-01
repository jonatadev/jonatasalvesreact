import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="container mb-4" style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1.1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold' }}>{t('about.title')}</h1>
      <p>
        Hi, I’m Jonatas Alves da Silva, a backend developer with over three years of experience in the financial sector. I specialize in Java, Spring Framework, AWS, and Go, with a solid foundation in data structures and algorithm analysis.
      </p>
      <p>
        I enjoy building scalable, resilient, and high-performance applications, always focusing on clean architecture and maintainable code. Recently, I’ve also been working with cloud infrastructure (Terraform, Azure, AWS) and modern development practices such as CI/CD, containers, and observability.
      </p>
      <p>
        Beyond technology, I’m passionate about continuous learning. I study topics like Number Theory, distributed systems, and the intersection of Physics and Computer Science. I’m also preparing for public administration exams, which challenges me to expand my knowledge into constitutional, administrative, and civil law.
      </p>
      <p>
        I believe in persistence, discipline, and curiosity as the driving forces behind both professional growth and personal achievements.
      </p>
    </section>
  );
};


export default About;
