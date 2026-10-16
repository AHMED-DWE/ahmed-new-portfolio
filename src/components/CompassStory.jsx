import { BarChart3, ClipboardCheck, FileSpreadsheet, Filter, Layers, Palette, RefreshCw, ScanLine, ShieldCheck } from "lucide-react";

const marks = [
  ["blue", "Title Match", "The keyword appears in the product title"],
  ["green", "Relevant", "A keyword worth targeting"],
  ["yellow", "Partial", "Only partly relevant, needs a decision"],
  ["red", "Again", "A duplicate that was already marked"],
  ["purple", "Brand", "Brand words, labeled only once"],
  ["cyan", "Product Type", "Words that match the product type"],
];

const features = [
  [Palette, "Color-coded rows", "Every keyword row gets a mark, so you can see what to keep, check or skip without reading the whole table twice."],
  [ScanLine, "Analyze + Save", "One click analyzes the table and saves the marks. Colors come back after Cerebro redraws its rows."],
  [BarChart3, "Live stats", "Selected, Relevant, Partial and Again counts update while you work, so you always know where the list stands."],
  [Layers, "Listing and ASIN modes", "Work from a pasted product listing or from an ASIN, with the marketplace shown next to it."],
  [Filter, "Product type filter", "Choose which words the filter uses, add your own words, and restore the detected ones at any time."],
  [RefreshCw, "Auto re-analysis", "Change a filter or a setting and the results refresh on their own. No second click on Analyze."],
  [ClipboardCheck, "Top Relevance and Copy Green", "Jump to the most relevant keywords and copy only the green ones, ready to paste."],
  [FileSpreadsheet, "Sheet lookup", "Connect Google Sheets to look up keywords against your own sheet."],
  [ShieldCheck, "Accounts and access", "Email and Google sign-in on Supabase, with an admin panel to create accounts and manage who can use the extension."],
];

const settings = [
  ["Appearance", "Dark, light or system theme, accent colors and a compact layout."],
  ["Automation", "Auto-start on page change, restore after refresh, and remember a manual pause."],
  ["Keyword rules", "Match mode, match reasons and custom words remembered per product."],
  ["Highlight colors", "Change the color used for every highlight type."],
  ["History and backup", "Export or import a backup and review recent work."],
  ["Profiles", "Switch between settings profiles. Data stays on the device."],
];

const stack = ["JavaScript", "Chrome Extension", "Supabase", "React + Vite", "Git & GitHub"];

export default function CompassStory({ image, settingsImage }) {
  return (
    <div id="keywords-compass" className="compass-story section-anchor">
      <div className="compass-hero glass-card reveal">
        <div className="compass-copy">
          <p className="eyebrow">CASE STUDY</p>
          <h3>Keywords Compass</h3>
          <p className="compass-by">Chrome extension, product by Ahmed Kashif</p>
          <p>
            When you research Amazon keywords in Helium 10 Cerebro, you scroll through hundreds of rows and decide on each one. It is slow, and two people never decide the same way.
            Keywords Compass adds a panel on top of Cerebro that analyzes the table and marks every keyword, so the whole list can be sorted in minutes.
          </p>

          <ul className="mark-list">
            {marks.map(([tone, name, text]) => (
              <li key={name}><i className={`dot tone-${tone}`} aria-hidden="true" /><b>{name}</b><span>{text}</span></li>
            ))}
          </ul>
        </div>

        <figure className="compass-figure">
          <a href={image} target="_blank" rel="noopener noreferrer" aria-label="Open the extension preview in full size">
            <img src={image} alt="Keywords Compass side panel with Analyze + Save, stats and the product type filter" width="1400" height="933" loading="lazy" decoding="async" />
          </a>
          <figcaption>Extension design preview: the side panel and the product type filter.</figcaption>
        </figure>
      </div>

      <div className="feature-grid">
        {features.map(([Icon, title, text], i) => (
          <article className="feature-card glass-card spot reveal" style={{ "--i": i % 3 }} key={title}>
            <div className="service-icon"><Icon aria-hidden="true" /></div>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="compass-settings glass-card reveal">
        <figure className="compass-figure">
          <a href={settingsImage} target="_blank" rel="noopener noreferrer" aria-label="Open the settings preview in full size">
            <img src={settingsImage} alt="Keywords Compass settings screen with appearance, automation, keyword rules, connections and backup" width="1400" height="1050" loading="lazy" decoding="async" />
          </a>
          <figcaption>Settings design preview.</figcaption>
        </figure>

        <div className="compass-copy">
          <p className="eyebrow">SETTINGS</p>
          <h3>Made to fit your workflow</h3>
          <p>A full settings screen keeps the extension flexible, and changes are saved automatically.</p>
          <ul className="settings-list">
            {settings.map(([name, text]) => (
              <li key={name}><b>{name}</b><span>{text}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="compass-status glass-card reveal">
        <div>
          <h4>Where it stands</h4>
          <p>
            Version 1.6.7 with a luxury dark navy and gold interface, a light theme, and 22 automated tests passing.
            Next is a private beta with 3 to 5 real users, measuring time saved, errors, consistency and stability before a public release.
          </p>
        </div>
        <div>
          <h4>Built with</h4>
          <div className="tag-row">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </div>
  );
}
