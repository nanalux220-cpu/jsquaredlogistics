const COVER = 'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/a7da6e7f6542fa2303f2e7cb9044ea87.jpeg';

export default function Chapter() {
  return (
    <section
      className="chapter"
      id="overview"
      data-video="https://static.readdy.ai/video/0af12a1027d1d5372071bb53d7f5559b/2b83f4c358c728a9559e26a807ae5895.mp4"
      data-duration="14"
      data-poster={COVER}
      data-label="J Squared title sequence"
    >
      <div className="stage">
        <img
          className="plate"
          src={COVER}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          alt="Graphic designers at work in a Leeds studio, sketches and printed proofs on the desks."
        />
        <div className="veil" aria-hidden="true"></div>
        <div className="veil veil-light" aria-hidden="true"></div>

        <div className="beat" data-from="0" data-to="0.5" data-pos="left" data-depth="soft" data-tone="dark" data-motion="track">
          <p className="stamp">01 · Graphic design studio, Leeds</p>
          <h1
            className="hero-title"
            data-split="lines"
            dangerouslySetInnerHTML={{ __html: 'Innovation in the world<br>of <em class="accent">graphic</em> designs' }}
          />
          <p className="sub">
            Graphic design blends art and strategy to create impactful visuals that communicate, inspire, and connect brands with their audience.
          </p>
          <a className="btn cta" href="#about">More info <i className="ri-arrow-right-line"></i></a>
        </div>

        <div className="beat" data-from="0.5" data-to="1" data-pos="right" data-depth="soft" data-tone="light" data-motion="rise">
          <p className="stamp">02 · Aerial &amp; visual content</p>
          <h2
            data-split="lines"
            dangerouslySetInnerHTML={{ __html: 'Aerial graphic design<br>and <em class="accent">visual</em> content' }}
          />
          <p className="sub">
            We specialize in creating stunning aerial visuals and graphics, combining photography and design to elevate your brand&rsquo;s storytelling.
          </p>
          <a className="btn cta" href="#contact">Get in touch <i className="ri-arrow-right-line"></i></a>
          <ul className="chips" data-side="right">
            <li>Leeds based</li>
            <li>Clients worldwide</li>
            <li>Design + photography</li>
          </ul>
        </div>

        <div className="scroll-cue" aria-hidden="true"><span></span></div>
      </div>
    </section>
  );
}