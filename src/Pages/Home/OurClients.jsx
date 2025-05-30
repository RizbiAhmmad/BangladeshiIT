import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "R",
    logo: "https://i.ibb.co/42b64jG/client1.png",
  },
  {
    id: 2,
    name: "Trendy Dhaka",
    logo: "https://i.ibb.co/XpvksF2/client2.png",
  },
  {
    id: 3,
    name: "7 Star Gallery",
    logo: "https://i.ibb.co/xhhDQct/client3.png",
  },
  {
    id: 4,
    name: "Razzak Fashion",
    logo: "https://i.ibb.co/PzYW7JH/client4.png",
  },
  {
    id: 5,
    name: "Aven Apparels",
    logo: "https://i.ibb.co/vcw0sLt/client5.png",
  },
  {
    id: 6,
    name: "FarmyCart",
    logo: "https://i.ibb.co/3YrYFbn/client6.png",
  },
];

export default function OurClients() {
  return (
    <section className="w-full px-6 py-16 bg-white" id="clients">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-orange-500">Clients</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Dive into a gallery of impactful collaborations with our valued clients at Bangladeshi IT Solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="bg-white border hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow transition">
          See All
        </button>
      </div> */}
    </section>
  );
}
