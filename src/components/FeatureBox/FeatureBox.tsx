type FeatureBoxProps = {
  title: string;
  text: string;
  imageUrl: string;
};
export function FeatureBox({ title, text, imageUrl }: FeatureBoxProps) {
  return (
    <div className="featureBox">
      <img src={imageUrl} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
