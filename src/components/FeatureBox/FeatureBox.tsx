type FeatureBoxProps = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};
export function FeatureBox({ id, title, text, imageUrl }: FeatureBoxProps) {
  return (
    <div key={id} className="featureBox">
      <img src={imageUrl} alt="" />
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
}
