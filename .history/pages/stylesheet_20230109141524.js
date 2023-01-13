import Navbar from "../components/Navbar";

const Stylesheet = (props) => {
  return (
    <>
      <Navbar title="Project Stylesheet" />
      <div className="w-screen min-h-screen overflow-x-hidden overflow-y-hidden">
        <div className="relative">
          <div className="overflow-y-scroll">
            <section id="colors" className="p-6">
              <h1>Color Palette</h1>
            </section>
          </div>
          <div className="bg-primary-100 min-h-screen w-1/4 absolute right-0 top-0 p-6">
            Playground here
          </div>
        </div>
      </div>
    </>
  );
};

export default Stylesheet;
{
  /* <div className="bg-white text-left p-12 mb-12">
<h1 className="text-center text-primary">Project Stylesheet</h1>
<div id="content" className="col-span-3 border border-content-200">
  <div className="min-h-screen grid grid-cols-4 grid-rows-2 gap-2 font-sans font-normal font-base">
    <section className="mb-12">
      <h3 className="kicker">Color Palette</h3>

      <div className="py-5 flex items-center justify-start space-x-8">
        <div className="flex flex-col text-center">
          <div className="w-36 h-36 bg-primary rounded-full"></div>
          <span>primary</span>
        </div>
        <div className="flex flex-col text-center">
          <div className="w-36 h-36 bg-secondary rounded-full"></div>
          <span>secondary</span>
        </div>
        <div className="flex flex-col text-center">
          <div className="w-36 h-36 bg-tertiary rounded-full"></div>
          <span>tertiary</span>
        </div>
        <div className="flex flex-col text-center">
          <div className="w-36 h-36 bg-slate-800 rounded-full"></div>
          <span>blackish</span>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <h3 className="kicker">Typography</h3>
      <div>
        <h1>Use H1 heading for bold display</h1>
        <h2>Use h2 Heading for section heads</h2>
        <h3>This is h3 subheading</h3>
        <p>
          This is the p (paragraph) style. To change any style, go to
          globals.css file and alter the base layer for the element, or
          the component layer for custom classes. Kicker here is a
          custom class.
        </p>
        <p>
          As you can see, paragraphs have some spacing between
          themselves. This can be altered in the base p style in
          typography.css.
        </p>
      </div>

      <h3 className="kicker">This is a Kicker</h3>
      <h1>This is h1</h1>
      <h2>This is h2</h2>
      <h3>This is h3</h3>
    </section>

    <section className="mb-12">
      <h3 className="kicker">Buttons</h3>
    </section>
  </div>
</div>
<div id="controls" className="bg-primary-100 min-h-screen p-5">
  <section>
    <div className="kicker">Colors</div>
  </section>
  <section>
    <div className="kicker">Typography</div>
  </section>
</div>
</div> */
}
