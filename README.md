# Tenlai-TTS 2.0

Academic demo page for **End-to-End Training for Continuous-Representation LLM-Based Text-to-Speech**.

The initial page contains the paper title and abstract. Audio demos are intentionally omitted until the samples are ready. The abstract follows the active (uncommented) manuscript text retrieved on 2026-11-21; editorial suggestions from the chat are not substituted automatically.

## Preview

No build step or package installation is required. Open `index.html` directly, or serve the repository:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Edit

- `index.html`: paper title, abstract, and semantic page structure. A comment after the abstract marks where future audio sections can be added.
- `styles.css`: responsive layout, colors, typography, accessibility, and print styles.
- `assets/signal.svg`: decorative waveform, not an experimental visualization.
- `assets/fonts.css` and `assets/fonts/`: self-hosted DM Sans and Instrument Serif fonts with their SIL Open Font License files. The page does not request external font services.

All asset links are relative, so the page works under a repository subpath, including a future GitHub Pages deployment. No trackers, external scripts, or runtime JavaScript are used. This change does not publish the page or modify the online paper.
