export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50 px-4 py-12 font-sans text-slate-800">
      <main className="mx-auto w-full max-w-4xl rounded-2xl border border-emerald-200 bg-white shadow-xl shadow-emerald-100/40">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-200/60 to-transparent" />
          <div className="relative px-8 pb-16 pt-14 sm:px-16">
            <header className="mb-12 flex flex-col gap-2">
              <span className="text-sm font-semibold tracking-[0.35rem] text-emerald-600">
                BASIC SOCIETY
              </span>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                A Letter to Those Who Crave the Essentials
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                From the desks of the Basic Society Council · Delivered on the
                fifth day of the Renewal Season
              </p>
            </header>

            <article className="space-y-8 text-lg leading-relaxed text-slate-700">
              <p>
                To all who find clarity in simplicity, we extend our open palms.
                The Basic Society thrives on the quiet conviction that the
                fundamentals are enough. In a world that insists on layering
                noise upon noise, we remain committed to the measured cadence of
                bread shared, work completed, and rest earned. We gather not out
                of nostalgia for less but out of respect for enough.
              </p>
              <p>
                This season, we have reorganized our common stores to ensure
                every household receives staple provisions without surplus or
                shortage. Communal workshops are now open thrice weekly, and the
                Library of Practical Thought has introduced primers on mindful
                craftsmanship and stewarded technology. Each addition passes a
                simple test: does it serve the community without clouding the
                mind? If the answer stumbles, we decline with grace.
              </p>
              <p>
                We call upon members to join the Plain Weave initiative, a
                collaborative effort to refresh our shared garments using
                durable, unadorned fibers. Participation restores skills that
                modern abundance allowed to dull, and in their renewal we find a
                different kind of progress—one that measures success in
                sufficiency rather than spectacle.
              </p>
              <p>
                For prospective members, know that the Basic Society is not a
                retreat from the world but a considered stance within it. We
                welcome dialogue over doctrine, intention over aesthetic. If you
                value transparent labor, shared stewardship, and the gentle
                confidence that arises when communities move in rhythm, our
                doors remain open.
              </p>
              <p>
                May your day be ordered, your tools reliable, and your table
                attended by those who listen. Should questions arise, deliver
                them to the Common Hall before dusk on the seventh day. We will
                answer collectively, as we do all things.
              </p>
            </article>

            <footer className="mt-12 border-t border-emerald-100 pt-10 text-base text-slate-600">
              <p className="font-semibold text-slate-800">
                The Basic Society Council
              </p>
              <p>Via the Office of Sustained Living</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3rem] text-emerald-500">
                IN STILLNESS · IN SERVICE · IN SUFFICIENCY
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
