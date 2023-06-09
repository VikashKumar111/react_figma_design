import "./App.css";
import Header from "./Pages/component/header";
import HealthProvider from "./Pages/component/healthcare_providers";
import Services from "./Pages/component/our_services";
import DownApps from "./Pages/component/download_apps";
import Testimonials from "./Pages/component/testimonials";
import LatestArticle from "./Pages/component/latest_article";
import Footer from "./Pages/component/footer";
function App() {
  return (
    <div>
      <Header />
      <Services />
      <HealthProvider />
      <DownApps />
      <Testimonials />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
