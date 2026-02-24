const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-16">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    About MERN Shop
                </h1>

                <p className="text-gray-600 mb-4">
                    MERN Shop is a modern ecommerce platform built using the MERN stack
                    (MongoDB, Express, React, Node.js).
                </p>

                <p className="text-gray-600 mb-4">
                    Our goal is to provide a smooth shopping experience with secure
                    authentication, real-time cart management, and fast checkout.
                </p>

                <p className="text-gray-600">
                    This project demonstrates real-world full stack development skills.
                </p>

            </div>
        </div>
    );
};

export default About;