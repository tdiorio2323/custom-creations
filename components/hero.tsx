export default function Hero() {
  return (
    <section className="relative">
      <div className="container py-12 md:py-16">
        <div className="card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Auto Body Repair, Ceramic Coating, and PPF in Staten Island
            </h1>
            <p className="mt-3 text-black/70">
              Collision repair, paint correction, and self-healing protection. Insurance-friendly. Fast turnaround.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn" href="/estimate">Get a Free Estimate</a>
              <a className="btn" href="/portfolio">View Work</a>
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-black/5 to-black/0 border border-black/10"></div>
        </div>
      </div>
    </section>
  );
}
