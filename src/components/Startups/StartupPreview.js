import StartupPreviewCSS from "./StartupsStyles/StartupPreview.module.css";


const StartupPreview = () => {
  return (
    <div className={StartupPreviewCSS.container}>
      <div className={StartupPreviewCSS.header}>
        <div className={StartupPreviewCSS.logo}>logo</div>
        <div className={StartupPreviewCSS.name}>Figma</div>
        <button className={StartupPreviewCSS.viewMoreBtn}>View more</button>
      </div>
      <div className={StartupPreviewCSS.description}>
        Figma is a cloud-based design tool that is similar to Sketch in
        functionality and features, but with big differences that make Figma
        better for team collaboration.
      </div>
    </div>
  );
};

export default StartupPreview;
