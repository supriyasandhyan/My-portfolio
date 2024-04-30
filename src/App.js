import About from "./Components/About";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
      <About/>
      <TechStack/>
      <Projects/>
      </div>
     
    </>
  );
}

export default App;
