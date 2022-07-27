function HtmlBox({ content, className }) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default HtmlBox;
