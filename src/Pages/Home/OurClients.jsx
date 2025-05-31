import React, { useEffect, useState } from "react";

const clients = [
  { id: 1, name: "R", logo: "https://i.ibb.co/42b64jG/client1.png" },
  { id: 2, name: "Trendy Dhaka", logo: "https://i.ibb.co/XpvksF2/client2.png" },
  { id: 3, name: "7 Star Gallery", logo: "https://i.ibb.co/xhhDQct/client3.png" },
  { id: 4, name: "Razzak Fashion", logo: "https://i.ibb.co/PzYW7JH/client4.png" },
  { id: 5, name: "Aven Apparels", logo: "https://i.ibb.co/vcw0sLt/client5.png" },
  { id: 6, name: "FarmyCart", logo: "https://i.ibb.co/3YrYFbn/client6.png" },
];

export default function OurClients() {
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 3 : 5);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [clients.length]);

  const getVisibleClients = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(clients[(visibleStart + i) % clients.length]);
    }
    return result;
  };

  // Calculate dynamic width string
  const getCardWidth = () => {
    const gapPx = 16; // tailwind gap-4 = 1rem = 16px
    const totalGap = gapPx * (visibleCount - 1);
    return `calc((100% - ${totalGap}px) / ${visibleCount})`;
  };

  return (
    <section className="w-full px-6 py-12 bg-white" id="clients">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-orange-500">Clients</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Dive into a gallery of impactful collaborations with our valued clients at Bangladeshi IT Solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-4 transition-transform duration-1000 ease-in-out">
          {getVisibleClients().map((client) => (
            <div
              key={client.id}
              className="bg-white border hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 rounded-xl shrink-0"
              style={{ width: getCardWidth() }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
