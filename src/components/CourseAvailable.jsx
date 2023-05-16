import React from "react";
import avatar from "../assets/course.avif";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const CourseAvailable = () => {
  useTitle("CourseAvailable");
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Courses Available
        </h2>
      </div>
      {/* card */}
      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 1: Physical World and Measurement (First paper) </h2>
          <p>This chapter teaches the basics of measurement and physical quantities.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>



      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 2: Vector (First paper) </h2>
          <p>This chapter mainly teaches about vector quantities.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 3: Dynamics (First paper) </h2>
          <p>This chapter contains a clear idea about motion of moving objects and their calculation.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 4: Newtonian Mechanics (First paper) </h2>
          <p>This chapter will let you know about different laws of Newtonian mechanics and it's application.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 5: Work, Energy and Power (First paper) </h2>
          <p>This chapter gives you a clear idea about work, power and energy.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 6: Gravitation and gravity (First paper) </h2>
          <p>This chapter teaches you about different laws of gravitation.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 7: Structural properties of matter (First paper) </h2>
          <p>This chapter is about solid, liquid and gaseous matter and how they behave in different situations.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 8: Periodic motion (First paper) </h2>
          <p>This chapter teacher you the basics of a motion called periodic motion.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 9: Wave (First paper) </h2>
          <p>You will know about the mechanism of waves in this chapter.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 10: Ideal gas and kinetic theory of gas (First paper) </h2>
          <p>This chapter will let you know about ideal gases and kinetic theory of gas.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 1: Thermodynamics (Second paper)</h2>
          <p>This chapter teaches you about different laws of thermodynamics and it's application.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 2: Static Electricity (Second paper)</h2>
          <p>This chapter will let you know about a type of electricity which is static electricity.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 3: Current Electricity (Second paper)</h2>
          <p>This chapter will teach you about current electricity and the mechanism of circuits.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 4: Magnetic Effect of Current Electricity and Magnetism (Second paper)</h2>
          <p>This chapter will let you get a clear idea about magnetic effects.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 5: Electromagnetic Induction and Alternating Current (Second paper)</h2>
          <p>This chapter contains clear idea about electromagnetic induction and alternating current with their application.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>



      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 6: Geometrical Optics (Second paper)</h2>
          <p>This chapter will let you know about the optical part of physics and mainly focus on geometrical optics.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 7: Physical Optics (Second paper)</h2>
          <p>This chapter contains concepts and applications of physical optics.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 8: Beginning of Modern Physics (Second paper)</h2>
          <p>This chapter lets you know about the history of modern science from the beginning.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 9: Atomic Model and Nuclear Physics (Second paper)</h2>
          <p>This chapter lets you know about atomic model and nuclear physics.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 10: Semiconductor and Electronics (Second paper)</h2>
          <p>This chapter will give you overall idea of semiconductors and electronics.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chapter 11: Astronomy (Second paper)</h2>
          <p>This chapter will let you know about the astronomical part of physics.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">First Paper(full)</h2>
          <p>This video contains overall concept of the full physics first paper book for last minute revision.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Second paper(full)</h2>
          <p>This video contains overall concept of the full physics second paper for last minute revision.</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CourseAvailable;
