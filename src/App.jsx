import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {

  return (
    <>
      <section>
        <nav>
          <Navbar />
        </nav>

        <section className="">
          <Hero />
        </section>
      </section>
    </>
  );
}

export default App;
