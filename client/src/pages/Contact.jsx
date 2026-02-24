const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-16">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Contact Us
                </h1>

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
                        placeholder="Your Message"
                        rows="4"
                        className="w-full border p-3 rounded-lg"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;