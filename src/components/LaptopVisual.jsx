import { Code2, Gauge, Sparkles } from "lucide-react";

const files = ["src", "components", "App.jsx", "Home.jsx", "About.jsx", "index.css"];

export default function LaptopVisual() {
  return (
    <div className="laptop-scene reveal" role="img" aria-label="Code editor illustration">
      <div className="laptop-glow" aria-hidden="true" />

      <div className="laptop" data-cursor="hover">
        <div className="laptop-screen">
          <div className="ide-topbar" aria-hidden="true">
            <div className="window-dots"><span /><span /><span /></div>
            <span className="ide-tab">App.jsx</span>
          </div>

          <div className="ide-layout" aria-hidden="true">
            <aside className="ide-sidebar">
              <strong>EXPLORER</strong>
              {files.map((file, index) => (
                <span key={file} className={index < 2 ? "folder" : file === "App.jsx" ? "active-file" : ""}>
                  {index < 2 ? "▾" : "◇"} {file}
                </span>
              ))}
            </aside>

            <div className="ide-editor">
              <div><em>1</em><code><b className="pink">import</b> React <b className="pink">from</b> <i className="green">"react"</i>;</code></div>
              <div><em>2</em><code><b className="pink">import</b> Home <b className="pink">from</b> <i className="green">"./pages/Home"</i>;</code></div>
              <div><em>3</em><code /></div>
              <div><em>4</em><code><b className="blue">const</b> skills = [<i className="green">"React"</i>, <i className="green">"Tailwind"</i>];</code></div>
              <div><em>5</em><code /></div>
              <div><em>6</em><code><b className="pink">export default function</b> <b className="yellow">Portfolio</b>() {'{'}</code></div>
              <div><em>7</em><code>  <b className="pink">return</b> (</code></div>
              <div><em>8</em><code>    <b className="blue">&lt;main</b> <span className="cyan">className</span>=<i className="green">"portfolio"</i><b className="blue">&gt;</b></code></div>
              <div><em>9</em><code>      <b className="blue">&lt;Home</b> <b className="blue">/&gt;</b></code></div>
              <div><em>10</em><code>      {'{'}skills.<span className="cyan">map</span>((skill) =&gt; (</code></div>
              <div><em>11</em><code>        <b className="blue">&lt;span&gt;</b>{'{'}skill{'}'}<b className="blue">&lt;/span&gt;</b></code></div>
              <div><em>12</em><code>      )){'}'}</code></div>
              <div><em>13</em><code>    <b className="blue">&lt;/main&gt;</b></code></div>
              <div><em>14</em><code>  );</code></div>
              <div><em>15</em><code>{'}'}<span className="typing-caret" /></code></div>
            </div>
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true" />
      </div>

      <div className="floating-chip chip-code float-soft-up"><Code2 size={18} aria-hidden="true" /> Clean Code</div>
      <div className="floating-chip chip-score float-soft-down"><Gauge size={18} aria-hidden="true" /> <strong>98</strong> Performance</div>
      <div className="floating-chip chip-ui float-soft-slow"><Sparkles size={18} aria-hidden="true" /> Modern UI</div>
    </div>
  );
}
