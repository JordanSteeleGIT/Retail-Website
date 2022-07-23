import React, { FC } from "react";

type MainBannerProps = {
  header: string;
  paragraph: string;
  buttonText: string;
};

const MainBanner: FC<MainBannerProps> = ({ header, paragraph, buttonText }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <h1>{header}</h1>
          <p>{paragraph}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
