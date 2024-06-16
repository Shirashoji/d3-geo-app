import Map from "./components/vis/Map";
import mapData from "./assets/Chofu-Polygons.geo.json";

export default function App() {
  return <Map mapData={mapData} />;
}
