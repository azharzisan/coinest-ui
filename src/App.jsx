import Dash from "./sections/Dash";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import Sessions from "./sections/Sessions";
import Backbone from "./sections/Backbone";

function App() {

  return (
    <>
      <section>
        <nav>
          <Navbar />
        </nav>

        <section className="">
          <Hero />
          <Services />
          <Dash />
          <Sessions />
          <Backbone />
        </section>
      </section>
    </>
  );
}

export default App;
