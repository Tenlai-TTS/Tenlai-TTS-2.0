const list = document.getElementById('collections');
let playingAudio;

function el(parent, tag, text = '', className = '') {
  const node = document.createElement(tag);
  node.textContent = text;
  node.className = className;
  parent.append(node);
  return node;
}

function clock(seconds) {
  return Math.floor(seconds / 60) + ':' + String(Math.floor(seconds % 60)).padStart(2, '0');
}

// Create the media element only when this clip is used.
function player(parent, path, label, context) {
  const box = el(parent, 'div', '', 'player');
  if (label) el(box, 'span', label, 'player-label');
  const bar = el(box, 'div', '', 'bar');
  const play = el(bar, 'button', '', 'toggle');
  play.type = 'button';
  const name = [context, label].filter(Boolean).join(' · ');
  const seek = el(bar, 'input');
  const duration = clipDurations[path];
  seek.type = 'range';
  seek.min = 0; seek.max = duration; seek.step = 0.01; seek.value = 0;
  seek.setAttribute('aria-label', 'Seek ' + name);
  const time = el(bar, 'span', '', 'time');
  let audio;
  let pendingTime = 0;

  function progress(value) {
    seek.value = value;
    seek.style.setProperty('--progress', (100 * value / duration) + '%');
    time.textContent = clock(value || duration);
    seek.setAttribute('aria-valuetext', clock(value) + ' of ' + clock(duration));
  }
  function state(active) {
    play.classList.toggle('active', active);
    play.setAttribute('aria-label', (active ? 'Pause ' : 'Play ') + name);
  }
  function load() {
    if (audio) return audio;
    audio = new Audio(path);
    audio.addEventListener('loadedmetadata', () => { audio.currentTime = pendingTime; });
    audio.addEventListener('timeupdate', () => progress(audio.currentTime));
    audio.addEventListener('play', () => state(true));
    audio.addEventListener('pause', () => state(false));
    audio.addEventListener('ended', () => { state(false); progress(0); });
    return audio;
  }
  seek.addEventListener('input', () => {
    pendingTime = Number(seek.value);
    progress(pendingTime);
    if (audio && audio.readyState >= 1) audio.currentTime = pendingTime;
  });
  play.addEventListener('click', () => {
    const clip = load();
    if (!clip.paused) return clip.pause();
    if (playingAudio && playingAudio !== clip) playingAudio.pause();
    playingAudio = clip;
    clip.play().catch(error => {
      if (error.name !== 'AbortError') { state(false); time.textContent = 'Error'; }
    });
  });
  state(false);
  progress(0);
}

function transcript(parent, text) {
  if (text) el(parent, 'p', 'Reference text · ' + text, 'transcript');
}

function characterSamples(section, samples) {
  for (const character of new Set(samples.map(s => s.character))) {
    const variants = samples.filter(s => s.character === character);
    const first = variants[0];
    const header = el(section, 'header', '', 'character-head');
    el(header, 'h3', character);
    player(header, first.clips[0][1], 'Reference', character);
    transcript(header, first.prompt);
    for (const sample of variants) {
      const row = el(section, 'article', '', 'variant-row');
      el(row, 'span', sample.variant, 'variant');
      el(row, 'p', sample.text);
      player(row, sample.clips[1][1], '', character + ' · ' + sample.variant);
    }
  }
}

function accentSamples(section, samples) {
  section.id = "accent-control";
  for (const source of ['Mandarin', 'English']) {
    const pairs = samples.filter(s => s.source === source);
    const target = pairs[0].target;
    const block = el(section, 'section', '', 'accent-block');
    el(block, 'h3', source + ' reference → ' + target + ' speech');
    for (const sample of pairs) {
      const row = el(block, 'article', '', 'accent-row');
      el(row, 'p', sample.text, 'target-text');
      const compare = el(row, 'div', '', 'comparison');
      const clips = new Map(sample.clips);
      player(compare, clips.get('Reference'), 'Reference · ' + source, sample.text);
      player(compare, clips.get('Source-language accent'), 'Non-native · ' + source + ' accent', sample.text);
      player(compare, clips.get('Target-language accent'), 'Native · ' + target + ' accent', sample.text);
      transcript(row, sample.prompt);
    }
  }
}

const sftStyleEnglish = {
  "开心": "happy",
  "安慰": "comforting",
  "不平": "indignant",
  "厌恶": "disgusted",
  "故事": "storytelling",
  "文白夹杂": "classical and modern Chinese",
  "中英混": "Mandarin–English code-switching",
  "英文开心": "happy in English",
  "英文生气": "angry in English"
};

function standardSamples(section, group) {
  let speaker = '';
  for (const [index, sample] of group.samples.entries()) {
    let title = group.name === 'Zero-shot cloning' ? '' : sample.name;
    if (group.name === 'Target-speaker SFT') {
      const [who, style] = sample.name.split(' · ');
      if (speaker !== who) el(section, 'h3', who);
      speaker = who;
      title = sftStyleEnglish[style] ? style + ' · ' + sftStyleEnglish[style] : style;
    }
    const row = el(section, 'article', '', 'sample');
    const text = el(row, 'div', '', 'copy');
    if (title) el(text, 'p', title, 'variant');
    if (sample.text) el(text, 'p', sample.text);
    transcript(text, sample.prompt);
    const tracks = el(row, 'div', '', 'tracks');
    sample.clips.forEach(([label, path]) => player(tracks, path, label, group.name + ', sample ' + (index + 1)));
  }
}

for (const group of collections) {
  const section = el(list, 'section', '', 'collection');
  el(section, 'h2', group.name);
  if (group.name === 'Languages & dialects') characterSamples(section, group.samples);
  else if (group.name === 'Accent control') accentSamples(section, group.samples);
  else standardSamples(section, group);
}
