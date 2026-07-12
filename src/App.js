import './App.css';

function App() {
  const cursos = [
  { id: 'curso-001', nombre: 'Aplicaciones para Ambientes Distribuidos' },
  { id: 'curso-002', nombre: 'Desarrollo de Aplicaciones' },
  { id: 'curso-003', nombre: 'Programación II' },
  { id: 'curso-004', nombre: 'Bases de Datos' }
];
const consultarCurso = async (cursoId) => {
  try {
    const respuesta = await fetch(
      `https://bhgfuqtbtg.execute-api.us-east-2.amazonaws.com/cursos/${cursoId}`
    );

    const curso = await respuesta.json();

    alert(`Curso seleccionado: ${curso.nombre}`);
  } catch (error) {
    alert('No se pudo consultar el curso');
  }
};
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
              <h3>{curso.nombre}</h3>
              <button onClick={() => consultarCurso(curso.id)}>
              Seleccionar curso
              </button>
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