import React from "react";
import { motion } from "framer-motion";

const demoServices = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Reach your audience and grow your brand with powerful marketing strategies.",
    image: "https://static.vecteezy.com/system/resources/previews/005/732/506/non_2x/man-hand-holding-smart-phone-digital-marketing-word-with-icon-business-virtual-screen-free-photo.jpg",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Fast, responsive websites built with cutting-edge technologies and design.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/332112112/KO/OT/LM/2672556/web-development-programming-resized.jpg",
  },
  {
    id: 3,
    title: "Graphics Designing",
    description:
      "Creative visual content for social media, branding, and business promotion.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49FUKA3yasjKTGrszq9058w1i1oKQ8znw7g&s",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Boost engagement and build your brand across popular social media platforms.",
    image: "https://bongiyo.com/public/medies/Feb_2025/1738609696.67a114207ee6a.png",
  },
  {
    id: 5,
    title: "SEO / Content Writing",
    description:
      "Rank higher on Google and attract traffic with optimized content and SEO.",
    image: "https://www.emproit.com/newimages/content-writing.png",
  },
  {
    id: 6,
    title: "Apps Development",
    description:
      "Build powerful mobile applications for Android and iOS tailored to your needs.",
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-16 px-6" id="services">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        💼 Our <span className="text-orange-500"> Services</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white border border-green-400 rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-200 transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full p-2 rounded-3xl h-52 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <h3 className="text-2xl font-extrabold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {service.description}
              </p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-green-600 to-red-600 hover:from-red-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
