import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-4">{children}</main>
    </>
  );
};

export default Layout;
