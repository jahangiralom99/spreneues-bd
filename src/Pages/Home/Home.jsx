import Order from "../Order/Order";
import Banner from "./Banner";
import EntrepreneurPackage from "./EntrepreneurPackage";
import PackagePrice from "./PackagePrice";
import PDFVersion from "./PDFVersion";
import PrintVersion from "./PrintVersion";
import Profile from "./Profile";
import TipsBook from "./TipsBook";

const Home = () => {
  return (
    <div>
      <Banner />
      <EntrepreneurPackage />
      <PackagePrice />
      <PDFVersion />
      <PrintVersion />
      <Profile />
      <TipsBook />
      <Order/>
    </div>
  );
};

export default Home;
