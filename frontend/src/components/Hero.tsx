import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            User Login
            <strong className="font-extrabold text-red-700 sm:block">
              Let's do it.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Login system built using MERN stack.
          </p>
          <p className="mt-4 sm:text-xl/relaxed">
            When I started this, the idea was to make my weekend productive but
            I can already see this going well beyond that.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
