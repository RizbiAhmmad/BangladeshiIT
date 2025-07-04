import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Why Every Business Needs a Google Business Profile",
    excerpt:
      "Now, having an online presence is no longer optional. Google Business boosts visibility.",
    image:
      "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best SEO service in Bangladesh",
    link: "#",
  },
  {
    id: 2,
    title: "Which Should You Start with First: Sales or Branding?",
    excerpt:
      "When launching a new business or scaling an existing one, this is the million-dollar question.",
    image:
      "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best Social Media Marketing Service in Bangladesh",
    link: "#",
  },
  {
    id: 3,
    title: "The Importance of UI/UX Design in Website Development",
    excerpt:
      "In today’s digital-first world, a well-designed website can make or break your brand.",
    image:
      "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best Website Design Service in Bangladesh",
    link: "#",
  },
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-6" id="blogs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-orange-500">Blogs</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our engaging articles provide valuable knowledge for professionals and
          enthusiasts alike. Stay informed, stay inspired.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(({ id, title, excerpt, image, tag, link }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-orange-100 transition flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{excerpt}</p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={link}
                    className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                  <span className="text-xs text-gray-500 text-right max-w-[280px] truncate">
                    {tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate("/blogs")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-full font-medium transition"
          >
            See All
          </button>
        </div>
      </div>
    </section>
  );
}
