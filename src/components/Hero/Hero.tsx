import { RequestButton } from "../RequestButton/RequestButton";

export function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="heroTitle">Next generation digital banking</h1>
        <p className="heroText">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestButton />
      </div>
      <div>
        <img
          className="contentImage"
          src="/image-mockups copy.png"
          alt="Mobile Promo Image"
        />
      </div>
    </section>
  );
}
