import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-suburban.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6">

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Luxury Transportation
              <br />
              Between
              <span className="text-yellow-400"> Long Island </span>
              &
              <span className="text-yellow-400"> Manhattan</span>
            </h1>

            <p className="mt-8 text-xl max-w-2xl mx-auto text-gray-200">
              Premium SUVs.
              Professional Drivers.
              Flat-Rate Pricing.
              Airport Specialists.
            </p>

            <div className="mt-10 flex justify-center gap-5">

              <Link
                href="/book"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black hover:bg-yellow-300 transition"
              >
                Book a Ride
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-black transition"
              >
                View Pricing
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* Features */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-8">

          <div>
            <h3 className="font-bold text-xl">
              Flat Rates
            </h3>

            <p className="mt-3 text-gray-600">
              Know your fare before your ride.
              No surge pricing.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Luxury SUVs
            </h3>

            <p className="mt-3 text-gray-600">
              Spacious, immaculate Chevy Suburbans
              with leather seating.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Airport Experts
            </h3>

            <p className="mt-3 text-gray-600">
              JFK, LaGuardia, Newark and MacArthur.
              Flight tracking included.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Professional Drivers
            </h3>

            <p className="mt-3 text-gray-600">
              Safe, courteous, experienced.
            </p>
          </div>

        </div>

      </section>

      {/* Popular Routes */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Popular Routes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              "Long Island → Midtown Manhattan",
              "Midtown Manhattan → Long Island",
              "JFK Airport → Nassau County",
              "LaGuardia → Suffolk County",
              "Penn Station → Long Island",
              "Grand Central → Long Island",
            ].map((route) => (

              <div
                key={route}
                className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {route}
                </h3>

                <button className="mt-6 text-yellow-500 font-bold">
                  Book →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Fleet */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/suburban.png"
            className="rounded-2xl shadow-xl"
          />

          <div>

            <h2 className="text-5xl font-bold">
              Ride in Comfort
            </h2>

            <p className="mt-6 text-lg text-gray-600">

              Every vehicle is meticulously cleaned,
              climate controlled,
              and equipped with leather seating,
              charging ports,
              bottled water,
              and plenty of luggage space.

            </p>

            <ul className="mt-8 space-y-3">

              <li>✓ Chevy Suburban</li>

              <li>✓ Luxury Interior</li>

              <li>✓ Airport Ready</li>

              <li>✓ Child Seats Available</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-24">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Your Ride Awaits.
          </h2>

          <p className="mt-6 text-xl text-gray-300">

            Reserve your next ride in less than two minutes.

          </p>

          <button className="mt-10 bg-yellow-400 text-black px-10 py-5 rounded-full font-bold hover:bg-yellow-300">

            Schedule Now

          </button>

        </div>

      </section>

    </main>
  );
}
