export default function App() {
  const projects = [
    {
      name: "React Auth App 🔐",
      desc: "Login, register, dashboard, dark mode, avatar upload",
      live: "https://react-auth-app-six.vercel.app/",
      github: "https://github.com/BendaFXoncepts/react-auth-app",
    },
    {
      name: "Weather App 🌤",
      desc: "Search any city and view live weather data",
      live: "https://weather-app-murex-zeta-51.vercel.app/",
      github: "https://github.com/BendaFXoncepts/weather-app",
    },
    {
      name: "Todo App ✅",
      desc: "Add and manage daily tasks",
      live: "https://react-todo-app-three-livid.vercel.app/",
      github: "https://github.com/BendaFXoncepts/React-todo-app",
    },
    {
      name: "Calculator 🧮",
      desc: "Simple calculator",
      live: "https://calculator-app-i1w9.vercel.app/",
      github: "https://github.com/BendaFXoncepts/Calculator-app",
    },
  ];

  return (
    <div style={styles.page}>
      <h1>Hi, I’m Ben 👋</h1>
      <h2 style={{ color: "#555" }}>Frontend React Developer</h2>

      <h3 style={{ marginTop: 40 }}>Projects</h3>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>

            <div style={{ marginTop: 10 }}>
              <a href={project.live} target="_blank">Live</a>{" | "}
              <a href={project.github} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 50 }}>Skills</h3>

       <div style={styles.skills}>
         {[
           "React",
           "JavaScript",
           "HTML",
           "CSS",
           "Git & GitHub",
           "Vercel Deployment",
           "Responsive Design"
          ].map((skill, i) => (
            <span key={i} style={styles.badge}>
              {skill}
            </span>
          ))}
        </div>

        <h3 style={{ marginTop: 50 }}>Contact</h3>

        <div style={styles.contact}>
          <p>Email: edafebenjamin2@gmail.com</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/BendaFXoncepts" target="_blank">
              github.com/BendaFXoncepts
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/benjamin-edafe" target="_blank">
              linkedin.com/in/benjamin-edafe
            </a>
          </p>
        </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    padding: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginTop: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    background: "#f3f4f6",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
  },

  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 15,
  },

  badge: {
    background: "#111827",
    color: "white",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 14,
  },

  contact: {
    marginTop: 15,
    lineHeight: 1.8,
  },
};