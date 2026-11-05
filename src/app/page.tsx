
const programs = [
  {
    number: "01",
    title: "Purpose & Identity",
    description:
      "Discover who you are, embrace your calling, and grow confidently into the woman you were created to be.",
  },
  {
    number: "02",
    title: "Leadership & Influence",
    description:
      "Develop the courage, wisdom, and confidence to lead with intention and make a meaningful impact.",
  },
  {
    number: "03",
    title: "Business & Calling",
    description:
      "Explore how to build, serve, and create with purpose in your work, business, and everyday life.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#F6ECE5]/85 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          
          <a href="#" className="flex items-center">
            <img
              src="/image/logo1.png"
              alt="Evolving Woman Tribe"
              className="h-12 w-auto object-contain"
            />
          </a>


          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-rose">
              About
            </a>
            <a href="#programs" className="transition hover:text-rose">
              Programs
            </a>
            <a href="#experience" className="transition hover:text-rose">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-rose">
              Contact
            </a>
          </div>

          <a
            href="#programs"
            className="rounded-full bg-burgundy px-5 py-3 text-xs font-semibold tracking-wide !text-white transition hover:bg-plum"
          >
            EXPLORE THE TRIBE
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[760px] items-center bg-cream px-6 pb-20 pt-32 lg:min-h-[850px] lg:px-10">
        
{/* Animated connecting lines and dots */}
<svg
  className="hero-network"
  viewBox="0 0 900 700"
  preserveAspectRatio="xMidYMid slice"
  aria-hidden="true"
>
  <g className="network-lines">
    <path d="M40 100 L190 180 L330 90 L470 210 L650 120 L850 220" />
    <path d="M40 100 L100 350 L270 300 L330 90" />
    <path d="M190 180 L270 300 L430 400 L470 210" />
    <path d="M270 300 L180 520 L430 400 L610 540 L760 390" />
    <path d="M470 210 L610 350 L760 390 L850 220" />
    <path d="M610 350 L610 540 L820 600" />
    <path d="M100 350 L180 520 L80 640" />
  </g>

  <g className="network-dots">
    {[
      [40, 100], [190, 180], [330, 90], [470, 210],
      [650, 120], [850, 220], [100, 350], [270, 300],
      [430, 400], [610, 350], [760, 390], [180, 520],
      [610, 540], [820, 600], [80, 640],
    ].map(([cx, cy], index) => (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r="3"
        style={{ animationDelay: `${index * 0.18}s` }}
      />
    ))}
  </g>
</svg>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-copy relative z-10">
            <p className="hero-item hero-item-1 mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-rose">
              A gathering for women becoming
            </p>

            <h1 className="hero-item hero-item-2 font-heading text-5xl leading-[1.08] text-burgundy sm:text-6xl lg:text-7xl">
              Evolving
              <br />
              Woman <span className="italic text-rose">Tribe.</span>
            </h1>

            <p className="hero-item hero-item-3 mt-6 max-w-lg text-lg leading-8 text-mauve sm:text-xl">
              Building what God entrusted to you.
            </p>

            <p className="hero-item hero-item-4 mt-5 max-w-xl text-sm leading-7 text-plum/80 sm:text-base">
              A transformational gathering designed to empower women to rise
              boldly in purpose, leadership, ministry, business, and influence.
            </p>

            <p className="hero-item hero-item-5 mt-6 text-xs font-semibold tracking-widest text-burgundy">
              LUKE 19:13 <span className="mx-2 text-rose">•</span> DANIEL 11:32
            </p>

            <div className="hero-item hero-item-6 mt-9 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="rounded-full bg-burgundy px-7 py-4 text-sm font-semibold !text-white transition hover:bg-plum"
              >
                Discover Our Programs
              </a>

              <a
                href="#about"
                className="rounded-full border border-burgundy/30 px-7 py-4 text-sm font-semibold text-burgundy transition hover:border-rose hover:text-rose"
              >
                Our Story
              </a>
            </div>
          </div>


<div className="hero-image">
  <div className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-rose/50 sm:-right-4 sm:-top-4" />

  <div className="hero-image-frame">
    <img
      src="/image/Blessing2.png"
      alt="A woman representing the purpose and vision of Evolving Woman Tribe"
      className="h-full w-full object-cover object-[center_35%]"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/45 via-transparent to-transparent" />
  </div>

  <div className="absolute -bottom-6 -left-3 max-w-[210px] rounded-2xl bg-white p-4 shadow-xl sm:-left-6">
    <p className="text-xs uppercase tracking-[0.2em] text-rose">
      Purpose
    </p>
    <p className="mt-2 font-heading text-xl leading-snug text-burgundy">
      Rise boldly.
      <br />
      Lead fearlessly.
    </p>
  </div>
</div>

        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[10px] tracking-[0.3em] text-mauve/70 sm:block">
          GROW · BECOME · INFLUENCE
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
              More than a gathering
            </p>
            <h2 className="mt-5 max-w-xl font-heading text-4xl leading-tight text-burgundy sm:text-5xl">
              Becoming all you were created to be.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-mauve">
              Evolving Woman Tribe is a space for women who are ready to grow
              in faith, discover their purpose, strengthen their leadership,
              and turn the things entrusted to them into meaningful impact.
            </p>
            <p className="mt-5 text-base leading-8 text-mauve">
              We believe growth is a journey. Together, we learn, connect, and
              take intentional steps towards the women we are becoming.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
                Explore the possibilities
              </p>
              <h2 className="mt-5 font-heading text-4xl text-burgundy sm:text-5xl">
                Our Focus Areas
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-mauve">
              Thoughtful conversations and experiences designed to help you
              grow in every area of your calling.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group border border-burgundy/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10"
              >
                <span className="font-heading text-3xl italic text-rose">
                  {program.number}
                </span>
                <h3 className="mt-8 font-heading text-2xl text-burgundy">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-mauve">
                  {program.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.15em] text-burgundy transition group-hover:text-rose"
                >
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative overflow-hidden bg-burgundy px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F0B8C8]">
            The Evolving Experience
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A journey of faith, growth, connection, and purpose.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            Come ready to be encouraged, equipped, challenged, and inspired
            alongside women who are growing into their next season.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-cream px-8 py-4 text-sm font-semibold text-burgundy transition hover:bg-white"
          >
            Connect With Us
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Stay connected
          </p>
          <h2 className="mt-5 font-heading text-4xl text-burgundy sm:text-5xl">
            Your next chapter starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-mauve">
            We would love to connect with you and share more about the Evolving
            Woman Tribe journey.
          </p>
          <a
            href="mailto:hello@evolvingwomantribe.com"
            className="mt-8 inline-block rounded-full border border-burgundy/30 px-7 py-4 text-sm font-semibold text-burgundy transition hover:border-rose hover:text-rose"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#321C2B] px-6 py-10 text-white/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-[0.18em] text-white">
              EVOLVING WOMAN TRIBE
            </p>
            <p className="mt-2 text-xs">
              Building what God entrusted to you.
            </p>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} Evolving Woman Tribe. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
