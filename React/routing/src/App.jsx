import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function navigateToProduct(name) {
    navigate("/product/" + name);
  }
  const Home = () => {
    return (
      <div className="w-full h-full flex justify-center items-center gap-2">
        <div
          onClick={() => {
            navigateToProduct("samsung_phone");
          }}
          className="border p-2 rounded-2xl cursor-pointer"
        >
          Samsung Phone
        </div>
        <div
          onClick={() => {
            navigateToProduct("galaxy_watch");
          }}
          className="border p-2 rounded-2xl cursor-pointer"
        >
          Galaxy watch
        </div>
        <div
          onClick={() => {
            navigateToProduct("lenevo_laptop");
          }}
          className="border p-2 rounded-2xl cursor-pointer"
        >
          Lenovo Laptop
        </div>
        <div
          onClick={() => {
            navigateToProduct("iphone");
          }}
          className="border p-2 rounded-2xl cursor-pointer"
        >
          Iphone
        </div>
        <div
          onClick={() => {
            navigateToProduct("macbook");
          }}
          className="border p-2 rounded-2xl cursor-pointer"
        >
          Macbook
        </div>
      </div>
    );
  };

  const About = () => {
    return <div>About page</div>;
  };

  const Contact = () => {
    return <div>Contact page</div>;
  };

  const Product = () => {
    const { name } = useParams();
    return <div>Buy {name}</div>;
  };

  const NotFound = () => {
    return <div className="text-[72px]">404</div>;
  };
  
  const Navbar = () => {
    return (
      <div className="w-full h-full">
        <div className="w-full p-4 flex gap-4 bg-gray-800 text-gray-400">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-gray-200 overflow-hidden">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
