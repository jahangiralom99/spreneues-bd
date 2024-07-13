import Banner from "./Banner";
import EntrepreneurPackage from "./EntrepreneurPackage";
import PackagePrice from "./PackagePrice";
import PDFVersion from "./PDFVersion";
import PrintVersion from "./PrintVersion";

const Home = () => {
  return (
    <div>
      <Banner />
      <EntrepreneurPackage />
      <PackagePrice />
      <PDFVersion />
      <PrintVersion />
    </div>
  );
};

export default Home;
