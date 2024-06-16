import * as d3 from "d3";
import mapData from "./assets/Chofu-Polygons.geo.json";

export default function App() {
  const data = mapData;

  const width = 800;
  const height = 600;

  const projection = d3.geoMercator().fitSize([width, height], data);
  const path = d3.geoPath().projection(projection);

  return (
    <svg width={width} height={height}>
      {data.features.map((d, i) => (
        <path
          key={i}
          d={path(d)}
          fill="none"
          stroke="black"
          strokeWidth={0.5}
        />
      ))}
    </svg>
  );
}
