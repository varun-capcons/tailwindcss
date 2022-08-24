import React from "react";

const colors = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* default colors
        white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,
     */}
      {/* Text Colors */}
      <p className="text-slate-600">
        tailwind is a css framework that uses low-level utility classes to
        create layout
      </p>
      <p className="text-red-800">
        Other utility classes framework includes Tachyons and Windi CSS
      </p>
      <p className="text-green-600">
        Utility classes operates at low-level. This means we have more control
        and flexibility over design
      </p>
      <p className="text-orange-400">
        Utility classes can be adopted to any design
      </p>
      <p className="text-yellow-400">
        Utility classes can be completely customizable and extensible
      </p>
      <p className="text-purple-600">
        Utility classes allows for much easier implementation of responsive
        design patterns
      </p>
      <p className="text-lime-800">
        With Utility classes, we can extract common, repetitive patterns intom
        custom, reusable components
      </p>
      <p className="text-emerald-500">
        Utility classes gives us balance between the concrete and abstract
      </p>
      <p>Utility classes are easy to customize, so we can build any design </p>
      <p className="text-cyan-600">Named according to their purpose.</p>
      {/* Background Colors
       */}
      <br />
      <h2 className="bg-indigo-400">
        Difference between Bootstrap and TailwindCSS
      </h2>
      <br />
      <h3 className="bg-violet-600">tailwind CSS</h3>
      <p className="bg-pink-500">Newer Framework that is gaining popularity</p>
      <p className="bg-sky-700">Low-level classes for fast UI design</p>
      <p className="bg-rose-600">More flexiblility and Uniqueness </p>
      <p className="bg-zinc-700">Customizable with directive and functions</p>
      <br />
      <h3 className="bg-stone-400">Bootstrap</h3>
      <p className="bg-amber-600">
        Popular framework that has been around for a while
      </p>
      <p className="bg-violet-500">High level pre-designed Components</p>
      <p className="bg-indigo-700">Some Bootstrap websites look very similar</p>
      <p className="bg-fuchsia-600">Customizable through SaSS</p>
      <p className="bg-indigo-500">Easy for beginners</p>
      {/* Text Underline */}
      <br />
      <h2 className="underline decoration-red-500">
        There are four main factors involved in every layout
      </h2>
      <h3 className="underline decoration-indigo-600">Layout</h3>
      <p>
        This defines how the whitespace and elements of our design are organized
        and ordered
      </p>
      <h3 className="underline decoration-zinc-500">Typography</h3>
      <p>This includes all text content, including messages</p>
      <h3 className="underline decoration-red-600">Colors</h3>
      <p>This brings life to a design and defines a design mood and brand</p>
      <h3 className="underline decoration-pink-600">Imagery</h3>
      <p>
        This includes the visuals of a design, such as icons, images and
        illustrations
      </p>
      {/* Border Colors */}
      <br />
      <p>Learning Objectives</p>
      <input type="text" className="border border-blue-400" />
      <input type="text" className="border border-green-400" />
      <input type="text" className="border border-indigo-400" />
      <input type="text" className="border border-red-400" />
      {/* Divide Colors */}
      <br />
      <br />
      <div className="divide-y divide-red-600">
        <div>Typography</div>
        <div>
          Font. This includes font family, size, style and weight utilities, as
          well as tracking and leading settings.
        </div>
        <div>
          Text. This includes text aligning, color and opacity, decoration and
          transformation.
        </div>
        <div>List. This includes list type and position styling.</div>
      </div>
      {/* <!-- Outline Colors --> */}
      <button className="outline outline-red-800">Learn More</button>
      <br />
      <br />
      <button className="outline outline-green-600">Click Here</button>
      <br />
      <br />
      <button className="outline outline-green-600">Subscribe</button>
      <br />
      <br />
      {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you can set it)--> */}
      <button className="shadow-lg bg-red-600 shadow-red-800">
        Learn More
      </button>
      <br />
      <br />
      <button className="shadow-sm bg-green-600 shadow-green-600">
        Click Here
      </button>
      <br />
      <br />
      <button className="shadow bg-red-800 shadow-blue-600">Subscribe</button>
      <br />
      <br />
      {/* Accent Colors */}
      <input type="checkbox" className="accent-purple-500" checked />
      <input type="checkbox" className="accent-red-500" checked />
      {/* Arbitrary Colors */}
      <div className="bg-[#333333]">This is the end of the first chapter</div>
    </div>
  );
};

export default colors;
