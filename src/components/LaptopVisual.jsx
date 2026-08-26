import { motion } from "framer-motion";
import { Code2, Gauge, Sparkles } from "lucide-react";

const files = ["src", "components", "App.jsx", "Home.jsx", "About.jsx", "index.css"];

export default function LaptopVisual() {
  return (
    <motion.div
      className="laptop-scene"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <div className="laptop-glow" />

      <motion.div
        className="laptop"
        whileHover={{ rotateX: 2, rotateY: -4, y: -6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="laptop-screen">
          <div className="ide-topbar">
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
        <div className="laptop-base" />
      </motion.div>

      <motion.div className="floating-chip chip-code" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <Code2 size={18} /> Clean Code
      </motion.div>
      <motion.div className="floating-chip chip-score" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
        <Gauge size={18} /> <strong>98</strong> Performance
      </motion.div>
      <motion.div className="floating-chip chip-ui" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>
        <Sparkles size={18} /> Modern UI
      </motion.div>
    </motion.div>
  );
}
