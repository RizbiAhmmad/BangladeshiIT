import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaBullseye } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            About <span className="text-green-600">Bangla</span>
            <span className="text-red-600">deshi</span>
            <span className="text-green-600 ml-3">IT</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a modern tech company empowering Bangladeshi businesses
            through innovation in web development, branding, and digital
            marketing.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To fuel Bangladesh's digital revolution by delivering cutting-edge
              IT solutions with passion, precision, and integrity.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaBullseye className="text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted name in Bangladesh’s tech landscape,
              enabling small to large enterprises to thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUsers className="text-4xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Why Us</h3>
            <p className="text-gray-600">
              We blend creativity with technology to deliver personalized
              digital solutions that drive results and build lasting
              relationships.
            </p>
          </motion.div>
        </div>

        {/* Team or Company Info (Optional) */}
        <motion.div
          className="bg-green-50 p-10 rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            BangladeshiIT is a passionate team of developers, designers, and
            digital experts committed to delivering exceptional results. We
            specialize in responsive web design, full-stack development,
            branding, and marketing strategies tailored for startups and
            enterprises across Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
