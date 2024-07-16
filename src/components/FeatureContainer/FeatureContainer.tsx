import data from "../../data/features.json";
import { FeatureBox } from "../FeatureBox/FeatureBox";

export function FeatureContainer() {
  return (
    <section className="featureContainer">
      <h2 className="title">Why choose EasyBank?</h2>
      <p className="featureText">
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br /> Control your finances like never before.
      </p>
      <div className="container">
        {data.map((data) => {
          return (
            <FeatureBox
              id={data.id}
              title={data.title}
              text={data.text}
              imageUrl={data.url}
            />
          );
        })}
      </div>
    </section>
  );
}
