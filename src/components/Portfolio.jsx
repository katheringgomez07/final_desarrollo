import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Proyecto 1', description: 'Descripción del proyecto 1', image: 'https://via.placeholder.com/150' },
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2', image: 'https://via.placeholder.com/150' },
    { title: 'Proyecto 3', description: 'Descripción del proyecto 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section>
      <h2>Mis Proyectos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ textAlign: 'center', width: '200px' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
