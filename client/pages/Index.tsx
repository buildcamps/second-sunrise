export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-sunrise-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-sunrise-dark">
            Second Sunrise
          </div>
          <div className="flex gap-8">
            <a
              href="#about"
              className="text-sm text-gray-700 hover:text-sunrise-gold transition"
            >
              About
            </a>
            <a
              href="#author"
              className="text-sm text-gray-700 hover:text-sunrise-gold transition"
            >
              Author
            </a>
            <a
              href="#cta"
              className="text-sm text-gray-700 hover:text-sunrise-gold transition"
            >
              Get Book
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient mimicking sunrise */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-orange-800 to-amber-700"></div>
          <div className="absolute inset-0 opacity-60 mix-blend-multiply">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Mountains silhouette */}
              <defs>
                <filter id="blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
              </defs>
              <polygon
                points="0,600 200,400 400,500 600,300 800,450 1000,350 1200,500 1200,800 0,800"
                fill="#8B4513"
                opacity="0.4"
              />
              <polygon
                points="0,650 150,480 350,580 550,380 750,520 950,420 1200,600 1200,800 0,800"
                fill="#654321"
                opacity="0.3"
              />
              {/* Sun rays effect */}
              <circle
                cx="600"
                cy="350"
                r="80"
                fill="#FCD34D"
                opacity="0.6"
                filter="url(#blur)"
              />
              <circle cx="600" cy="350" r="50" fill="#FBBF24" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Second Sunrise
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-amber-50 mb-8 font-light drop-shadow-md">
            A True Story of Hope <span className="italic">and Healing</span>
            <br />
            Against All Odds
          </p>

          <p className="text-base sm:text-lg text-amber-50 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            In this moving memoir, Dr Jawahar M Shah shares his extraordinary
            journey of hope, resilience, and renewal after facing a
            life-threatening illness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sunrise-dark px-8 py-3 rounded-lg font-serif font-semibold hover:bg-amber-50 transition-colors shadow-lg">
              Buy Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-serif font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl sm:text-3xl italic text-sunrise-dark mb-6">
            "A true warrior's story – inspiring and unforgettable."
          </p>
          <p className="text-lg text-gray-700">— Prof. Vishwas Sayanakar</p>
        </div>
      </section>

      {/* About Book Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-lg p-1 inline-block">
                <div className="bg-white rounded-lg p-6">
                  {/* Book cover */}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fdafffaa5cf5249fd8878b29785b13fc4?format=webp&width=800"
                    alt="Second Sunrise Book Cover"
                    className="rounded w-full aspect-[9/12] object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl font-bold text-sunrise-dark mb-6">
                A Journey of Transformation
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Dr. Jawahar M Shah was at the height of his medical career when
                everything changed. Diagnosed with ALS, a terminal illness, he
                faced an impossible question: How do you live when medicine
                offers no cure?
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Second Sunrise chronicles his remarkable journey from despair to
                determination, from paralysis to renewed vitality. Drawing from
                Sadhguru's teachings on consciousness, ancient yoga wisdom, and
                the brutal realities of illness, Dr. Shah transformed a death
                sentence into a beacon of hope.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sunrise-gold text-2xl mt-1">✓</span>
                  <p className="text-gray-700">
                    A physician's unflinching examination of illness and
                    resilience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise-gold text-2xl mt-1">✓</span>
                  <p className="text-gray-700">
                    Transformative teachings on consciousness and healing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise-gold text-2xl mt-1">✓</span>
                  <p className="text-gray-700">
                    Practical wisdom for facing life's darkest challenges
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise-gold text-2xl mt-1">✓</span>
                  <p className="text-gray-700">
                    A testament to the power of family, faith, and determination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-sunrise-dark mb-12 text-center">
            What You'll Discover
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Doctor-Patient Perspective",
                description:
                  "A rare dual perspective from someone who has been both healer and patient",
              },
              {
                title: "Consciousness & Healing",
                description:
                  "How ancient wisdom and modern medicine converge in the pursuit of wholeness",
              },
              {
                title: "The Power of Resilience",
                description:
                  "Finding meaning and peace when facing seemingly insurmountable odds",
              },
              {
                title: "Family as Medicine",
                description:
                  "The transformative power of love, support, and unwavering belief",
              },
              {
                title: "Practical Wisdom",
                description:
                  "Actionable insights for maintaining hope and agency during crisis",
              },
              {
                title: "The Second Sunrise",
                description:
                  "Understanding that endings can become beginnings, and darkness can give way to light",
              },
            ].map((theme, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl font-bold text-sunrise-dark mb-3">
                  {theme.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl font-bold text-sunrise-dark mb-6">
                About Dr. Jawahar M Shah
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Dr. Jawahar M Shah is a respected physician, yoga practitioner,
                and social leader with decades of medical service and community
                work. His unique perspective—shaped by his own experience of
                illness and recovery—offers profound insights into
                consciousness, healing, and resilience.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                When diagnosed with ALS in 2011, doctors gave him six months to
                two years to live. Through a comprehensive approach combining
                conventional medicine, yoga, meditation, and unwavering
                determination, he has recovered to 80% of his pre-illness
                function—a medically unprecedented outcome.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Dr. Shah teaches yoga to seniors, leads community service
                initiatives, and supports other ALS patients, proving that even
                in our darkest moments, the sunrise can come again.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-sunrise-gold to-amber-600 rounded-lg p-1">
                <div className="bg-white rounded-lg p-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F40a4e64b965b468aa5910bd37e7bfefb?format=webp&width=800"
                    alt="Dr. Jawahar M Shah"
                    className="rounded-lg w-full aspect-square object-cover mb-6"
                  />
                  <div className="space-y-2 text-center">
                    <p className="font-serif text-lg text-sunrise-dark">
                      Dr. Jawahar M Shah
                    </p>
                    <p className="text-sm text-gray-600">
                      Physician & Yoga Teacher
                    </p>
                    <p className="text-sm text-gray-600">
                      Islampur, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes from Book */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Words from the Journey
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <p className="font-serif text-2xl italic mb-3">
                "I don't have superpowers. I have stubbornness, discipline,
                extraordinary support, and luck. But mostly, I have refused to
                accept that impossible is final."
              </p>
              <p className="text-amber-100">— Dr. Jawahar M Shah</p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <p className="font-serif text-2xl italic mb-3">
                "The night is darkest before dawn. And dawn is coming. Hold on.
                The sun will rise again."
              </p>
              <p className="text-amber-100">— From Second Sunrise</p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <p className="font-serif text-2xl italic mb-3">
                "This book is not just about surviving ALS. It's about living
                fully, consciously, and with unshakeable resilience."
              </p>
              <p className="text-amber-100">— From the Author's Preface</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-sunrise-dark mb-6">
            Begin Your Second Sunrise
          </h2>

          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Whether you're facing illness, loss, or seeking inspiration, Second
            Sunrise offers hope grounded in real experience and lived wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-sunrise-gold text-white px-8 py-4 rounded-lg font-serif font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg">
              Get the Book
            </button>
            <button className="border-2 border-sunrise-gold text-sunrise-dark px-8 py-4 rounded-lg font-serif font-semibold text-lg hover:bg-amber-50 transition-colors">
              Read Free Chapter
            </button>
          </div>

          <p className="text-gray-600">
            Available in eBook and Paperback formats
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">
                Second Sunrise
              </h3>
              <p className="text-gray-400 text-sm">
                A journey through darkness to renewed light
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Book
                  </a>
                </li>
                <li>
                  <a href="#author" className="hover:text-white transition">
                    About Author
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    ALS Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Yoga Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2024 Second Sunrise. A beacon of hope for anyone confronting
              life's darkest storms.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
