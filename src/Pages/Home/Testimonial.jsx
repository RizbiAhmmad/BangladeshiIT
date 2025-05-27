const testimonials = [
  {
    id: 1,
    name: "Maksud Syed",
    role: "Owner Of Cleatsbd",
    feedback:
      "I had the pleasure of working with Bangladeshi IT, and I must say, their professionalism and expertise are truly remarkable. They built a visually stunning and highly functional website, fully optimized for performance. Their customer support was top-notch.",
    image: "https://i.ibb.co/0XmqzCX/client1.jpg",
    logo: "https://i.ibb.co/S6FxzD6/cleats-logo.png",
  },
  {
    id: 2,
    name: "HM Rachel Uddin",
    role: "Owner Of Bondhonbazar",
    feedback:
      "I had a fantastic experience with Bangladeshi IT. From the first interaction, the team was extremely supportive and delivered a responsive, high-performing website. Their attention to detail sets them apart.",
    image: "https://i.ibb.co/gZ3GK5M/client2.jpg",
    logo: "https://i.ibb.co/vjQBd4H/bondhon-logo.png",
  },
  {
    id: 3,
    name: "Zahid Rahman",
    role: "Owner Of Texviewfashion",
    feedback:
      "I'm beyond satisfied with the services provided by Bangladeshi IT. Their team is committed, efficient, and truly understands the needs of clients. Their ongoing support makes them a reliable partner.",
    image: "https://i.ibb.co/MRrNNzj/client3.jpg",
    logo: "https://i.ibb.co/vkW4W7x/texview-logo.png",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white py-20 px-6" id="testimonial">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Happy <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-14">
          Our valued clients share their experiences with Bangladeshi IT,
          highlighting the impact of our solutions.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, role, feedback, image, logo }) => (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg transition duration-300 hover:shadow-green-200"
            >
              <div className="text-4xl text-gray-300 mb-4">❝</div>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {feedback}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900">{name}</h4>
                    <p className="text-gray-500 text-xs">{role}</p>
                  </div>
                </div>
                <img src={logo} alt="Company Logo" className="h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
