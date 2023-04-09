// import Imag2 from "../../../components/Image2";
import Rectang18 from "../../../components/Rectangle18";
import ArticleOneImage from "./components/ArticleOneImage";

const LatestArticle = () => {
  return (
    <div className="article">
      <h1 className="article_h1">Check out our latest article</h1>
      <Rectang18 />
      <div>
        <ArticleOneImage />
        <h3 className="article__image1_h3">
          Disease detection, check up in the laboratory{" "}
        </h3>
        <p className="article__image1_p">
          In this case, the role of the health laboratory is very important to
          do a disease detection...
        </p>
        <h4 className="article__image1_h4">Read More</h4>
      </div>
      <div>
        <h3 className="article__image2_h3">
          Herbal medicines that are safe for consumption{" "}
        </h3>
        <p className="article__image2_p">
          Herbal medicine is very widely used at this time because of its very
          good for your health...
        </p>
        <h4 className="article__image2_h4">Read More</h4>
      </div>
      <div>
        <h3 className="article__image3_h3">
          Natural care for healthy facial skin{" "}
        </h3>
        <p className="article__image3_p">
          A healthy lifestyle should start from now and also for your skin
          health. There are some...
        </p>
        <h4 className="article__image3_h4">Read More</h4>
      </div>
      <div>
        <button className="article_button">View All</button>
      </div>
    </div>
  );
};
export default LatestArticle;
