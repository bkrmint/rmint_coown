import { Hero, Launch, Features, Process, Testimonials, Cta, Footer } from './sections';
import Nav from './components/Nav';

const App =() => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r bg-[#FEE3D3]"> 
      <Hero />
    </section>
    <section className="padding bg-[#fff6f1]" >
      <Launch />
    </section >
    <section className="padding bg-[#FEE3D3]">
      <Features />
    </section>
    <section className="padding-t bg-[#fff6f1]">
      <Process />
    </section>
    <section className="padding bg-[#FEE3D3]">
      <Testimonials />
    </section>
    <section className="padding-x padding-y bg-[#FEE3D3]">
      <Cta /> 
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white">
      <Footer />
    </section>

  </main>
);

export default App;