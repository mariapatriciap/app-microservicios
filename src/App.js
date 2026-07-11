import './App.css';

function App() {
  const cursos = [
    'Aplicaciones para Ambientes Distribuidos',
    'Desarrollo de Aplicaciones',
    'Programación II',
    'Bases de Datos'
  ];

  return (
    <div className="App">
      <header className="navbar">
        <h2>Laboratorio 11</h2>
        <span>Inscripción de Cursos</span>
      </header>

      <main className="contenido">
        <section className="bienvenida">
          <p className="etiqueta">PLATAFORMA ACADÉMICA</p>
          <h1>Listado de Cursos</h1>
          <p>Seleccione uno de los cursos disponibles para comenzar.</p>
        </section>

        <section className="cursos">
          {cursos.map((curso, index) => (
            <div className="tarjeta" key={index}>
              <div className="icono">📘</div>
              <h3>{curso}</h3>
              <button>Seleccionar curso</button>
            </div>
          ))}
        </section>
      </main>

      <footer>
        Primer Semestre - 2026
      </footer>
    </div>
  );
}

export default App;