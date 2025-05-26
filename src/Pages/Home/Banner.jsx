export default function Banner() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Welcome to <span className="text-red-600">Bangladeshi</span>
            <span className="text-green-600">IT</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We empower the future of technology in Bangladesh. Let's build something
            great together with passion and innovation.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Get Started
          </a>
        </div>

        {/* Right: Video Frame */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl shadow-lg overflow-hidden border-4 border-green-600">
            <video
              src="" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
