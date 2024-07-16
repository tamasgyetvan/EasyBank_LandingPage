type FeatureBoxProps = {
  title: string;
  text: string;
  imageUrl: string;
};
export function FeatureBox({ title, text, imageUrl }: FeatureBoxProps) {
  return (
    <div className="featureBox">
      <img className="promoSvg" src={imageUrl} alt="" />
      <h3 className="promoTitle">{title}</h3>
      <p className="promoText">{text}</p>
    </div>
  );
}
