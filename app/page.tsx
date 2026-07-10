"use client";

import { useMemo, useState } from "react";

const styles = [
  "Editorial noir",
  "Prismatic glass",
  "Korean cyberpunk",
  "Soft product light",
  "Botanical sci-fi",
  "Archive film",
];

const outputs = [
  {
    title: "Halo Market",
    prompt: "street market under floating cyan signage",
    ratio: "16:9",
    seed: "8412",
    className: "art art-market",
  },
  {
    title: "Glass Orchard",
    prompt: "transparent greenhouse orbiting a quiet moon",
    ratio: "4:5",
    seed: "1930",
    className: "art art-orchard",
  },
  {
    title: "Signal Runner",
    prompt: "single rider crossing rainlit data streets",
    ratio: "1:1",
    seed: "4527",
    className: "art art-runner",
  },
  {
    title: "Amber Engine",
    prompt: "solar machine room with brass reflections",
    ratio: "3:2",
    seed: "7701",
    className: "art art-engine",
  },
];

const moods = ["Cinematic", "Precise", "Dreamlike"];

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState(styles[1]);
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState(
    "A fashion editorial in Seoul at midnight, luminous fabric, rain on black stone, ultra-detailed, controlled neon, quiet confidence",
  );

  const progress = useMemo(() => {
    if (!isGenerating) {
      return 72;
    }

    return 88;
  }, [isGenerating]);

  return (
    <main className="studio-shell">
      <section className="hero-panel" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Workspace">
          <a className="brand" href="#page-title" aria-label="Lumen Forge home">
            <span className="brand-mark" aria-hidden="true" />
            Lumen Forge
          </a>
          <div className="topbar-actions">
            <button className="ghost-button" type="button">
              Explore
            </button>
            <button className="ghost-button" type="button">
              Jobs
            </button>
            <button className="account-button" type="button">
              Pro
            </button>
          </div>
        </nav>

        <div className="workbench">
          <div className="copy-stack">
            <p className="eyebrow">WIS-5 creative workspace</p>
            <h1 id="page-title">Shape the next frame.</h1>
            <p className="lede">
              Prompt, tune, and remix cinematic image directions in one fast
              surface.
            </p>
          </div>

          <div className="live-preview" aria-label="Live generation preview">
            <div className="preview-header">
              <span>Live canvas</span>
              <span className="status-dot">Drafting light maps</span>
            </div>
            <div className="preview-art" />
            <div className="preview-footer">
              <span>{selectedStyle}</span>
              <span>{selectedMood}</span>
            </div>
          </div>
        </div>

        <form
          className="prompt-composer"
          onSubmit={(event) => {
            event.preventDefault();
            setIsGenerating(true);
            window.setTimeout(() => setIsGenerating(false), 1200);
          }}
        >
          <label htmlFor="prompt">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={4}
          />

          <div className="chip-row" aria-label="Style presets">
            {styles.map((style) => (
              <button
                aria-pressed={selectedStyle === style}
                className="style-chip"
                key={style}
                onClick={() => setSelectedStyle(style)}
                type="button"
              >
                {style}
              </button>
            ))}
          </div>

          <div className="control-row">
            <label className="select-control">
              <span>Model</span>
              <select defaultValue="lumen-v6">
                <option value="lumen-v6">Lumen v6</option>
                <option value="lumen-raw">Lumen Raw</option>
                <option value="lumen-fast">Lumen Fast</option>
              </select>
            </label>
            <label className="select-control">
              <span>Ratio</span>
              <select defaultValue="16:9">
                <option value="16:9">16:9</option>
                <option value="4:5">4:5</option>
                <option value="1:1">1:1</option>
              </select>
            </label>
            <div className="segmented" aria-label="Mood">
              {moods.map((mood) => (
                <button
                  aria-pressed={selectedMood === mood}
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  type="button"
                >
                  {mood}
                </button>
              ))}
            </div>
            <button className="generate-button" type="submit">
              {isGenerating ? "Generating" : "Generate"}
            </button>
          </div>
        </form>
      </section>

      <section className="studio-grid" aria-label="Generation workspace">
        <aside className="queue-panel" aria-labelledby="queue-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Queue</p>
              <h2 id="queue-title">4 active drafts</h2>
            </div>
            <span className="mono-pill">GPU 02</span>
          </div>

          <div className="job-card active">
            <div className="job-topline">
              <span>Editorial noir set</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-track" aria-label={`${progress}% complete`}>
              <span style={{ width: `${progress}%` }} />
            </div>
            <p>Rendering reflections, fabric edges, and rain scatter.</p>
          </div>

          <div className="queue-list">
            <button type="button">
              <span>Lock seed</span>
              <span>8412</span>
            </button>
            <button type="button">
              <span>Chaos</span>
              <span>18</span>
            </button>
            <button type="button">
              <span>Stylize</span>
              <span>620</span>
            </button>
          </div>
        </aside>

        <section className="gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">Recent generations</p>
              <h2 id="gallery-title">Pick a direction, then push it.</h2>
            </div>
            <button className="ghost-button" type="button">
              Sort: Fresh
            </button>
          </div>

          <div className="image-grid">
            {outputs.map((output) => (
              <article className="image-card" key={output.title} tabIndex={0}>
                <div className={output.className} aria-hidden="true" />
                <div className="image-card-body">
                  <div>
                    <h3>{output.title}</h3>
                    <p>{output.prompt}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Ratio</dt>
                      <dd>{output.ratio}</dd>
                    </div>
                    <div>
                      <dt>Seed</dt>
                      <dd>{output.seed}</dd>
                    </div>
                  </dl>
                  <div className="card-actions">
                    <button type="button">Vary</button>
                    <button type="button">Upscale</button>
                    <button type="button">Remix</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
