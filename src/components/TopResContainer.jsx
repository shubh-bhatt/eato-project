import TopResCard from "./TopResCard";
import { topResData } from "../../public/data/topResData";

const TopResContainer = () => {
  return (
    <div className="top-res-container">
      <div className="top-res-title">Top restaurant chains in India</div>
      <div className="top-restaurants">
        {topResData.map((res) => {
          return <TopResCard key={res.id} res={res} />;
        })}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default TopResContainer;
