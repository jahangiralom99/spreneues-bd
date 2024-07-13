import Banner from "./Banner";
import EntrepreneurPackage from "./EntrepreneurPackage";
import PackagePrice from "./PackagePrice";
import PDFVersion from "./PDFVersion";

const Home = () => {
  return (
    <div>
      <Banner />
      <EntrepreneurPackage />
          <PackagePrice />
          <PDFVersion/>
    </div>
  );
};

export default Home;
