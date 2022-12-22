import Filters from "../components/Startups/Filters.js";
import StartupPreview from "../components/Startups/StartupPreview.js";
import StartupsCSS from "./styles/Startups.module.css";

function Startups() {
  return (
    <div className={StartupsCSS.startups}>
      <Filters className={StartupsCSS.filters} />
      <div className={StartupsCSS.startupPreviews}>
        <StartupPreview />
        <StartupPreview />
        <StartupPreview />
        <StartupPreview />
        <StartupPreview />
        <StartupPreview />
      </div>
    </div>
  );
}

export default Startups;
