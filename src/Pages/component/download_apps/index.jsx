import Rectang12 from "../../../components/Rectangle12";
import VectorArr1 from "../../../components/VectorArrow1";
import DownloadIllustration from "../../../components/DownloadsIllustration";
const DownApps = () => {
  return (
    <div>
      <div>
        <h1 className="download_h1">Download our mobile apps</h1>
        <Rectang12 />
        <p className="download_p">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <div>
          <button className="download_button">
            <h3>Download</h3>
            <VectorArr1 />
          </button>
        </div>
      </div>
      <div>
        <DownloadIllustration />
      </div>
    </div>
  );
};
export default DownApps;
