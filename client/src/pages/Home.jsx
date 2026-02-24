const Home = () => {
  return (
    <div className="scroll-smooth">

      {/* HERO SECTION */}
      <section id="home" className="h-[60vh] pt-20 bg-indigo-600 text-white flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to MERN Shop 🛍️
        </h1>
        <p className="text-lg max-w-2xl">
          Discover amazing products with secure checkout and fast delivery.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-gray-100 flex items-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 xxtext-lg">
            MERN Shop is built using MongoDB, Express, React and Node.
            This project demonstrates real-world ecommerce functionality
            including authentication, cart system and order management.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen bg-white flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-8">
            Contact Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;