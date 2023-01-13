export default function Stylesheet() {
  return (
    <>
      <div className="container font-sans font-normal font-base">
        <div className="bg-white text-left p-12 mb-12">
          <h1 className="text-center">Project Stylesheet</h1>
          <section className="mb-12">
            <h2 className="kicker">Color Palette</h2>

            <div className="py-5 flex items-center justify-start space-x-8">
              <div className="flex flex-col text-center">
                <div className="w-36 h-36 bg-primary rounded-full"></div>
                <span>primary</span>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="kicker">Typography</h2>
            <div>
              <h1>Use H1 heading for bold display</h1>
              <h2>Use h2 Heading for section heads</h2>
              <h3>This is h3 subheading</h3>
              <p>
                This is the p (paragraph) style. To change any style, go to
                globals.css file and alter the base layer for the element, or
                the component layer for custom classes. Kicker here is a custom
                class.
              </p>
              <p>
                As you can see, paragraphs have some spacing between themselves.
                This can be altered in the base styles in global.css.
              </p>
            </div>

            <h2 className="kicker">This is a Kicker</h2>
            <h1>This is h1</h1>
            <h2>This is h2</h2>
            <h3>This is h3</h3>

            <div>Use more if needed:</div>
            <h4>This is h4</h4>
            <h5>This is h5</h5>
            <h6>This is h6</h6>
          </section>

          <section className="mb-12">
            <h2 className="kicker">Buttons</h2>
          </section>
        </div>
      </div>
    </>
  );
}
