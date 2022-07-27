import "./ImageContainer.css";
function ImageContainer({ type, source, altText, marginType }) {
  if (marginType) {
    type += " " + marginType;
    // 'add_margin' - adds top and bottom margin
  }

  return (
    <div className={type}>
      <img src={source} alt={altText} />
    </div>
  );
}

export default ImageContainer;
