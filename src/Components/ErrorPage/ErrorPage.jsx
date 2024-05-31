import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/162389/lost-places-old-decay-ruin-162389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          
          <h1 className="mb-5 lg:text-8xl text-5xl font-bold text-red-600">ERROR  404</h1>
          <p className="mb-5">
            Sorry Page Not Found..
          </p>
          <Link to='/'>
          <button className="btn btn-primary"> Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
