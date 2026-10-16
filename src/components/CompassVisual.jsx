/* Screenshot of the Keywords Compass extension (file lives in /public). */
export default function CompassVisual({ image, alt, width = 1400, height = 933 }) {
  return (
    <img
      className="project-shot"
      src={image}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}
