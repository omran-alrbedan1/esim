const requirements = [
  ['1', 'eSIM Support', 'Your device must support eSIM technology.'],
  ['2', 'Carrier Unlocked', 'Your phone should not be locked to a specific mobile carrier.'],
  ['3', 'Latest Software', 'Make sure your device is updated to the latest available software version.'],
  ['4', 'Internet Connection', 'An internet connection is required to download and install your eSIM profile.'],
] as const;

export function DeviceRequirements() {
  return (
    <section className="mx-auto mt-16 max-w-[1180px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8b35c8]">Before you purchase</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Important Requirements</h2>
        <div className="mx-auto mt-4 h-0.5 w-14 bg-[#ff8b77]" />
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {requirements.map(([number, title, copy]) => (
          <article className="relative rounded-[22px] border border-[#cbaee6] bg-[#f4e9fb] p-5 pt-9 text-center shadow-[0_12px_30px_rgba(80,42,126,0.08)]" key={title}>
            <span className="absolute left-1/2 top-0 grid h-10 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-[#a977d0] bg-white text-sm font-extrabold text-[#684086]">
              {number}
            </span>
            <h3 className="font-extrabold text-[#684086]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6d5c86]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}