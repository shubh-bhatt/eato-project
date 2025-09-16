import TopResCard from "./TopResCard";
import { useEffect, useState } from "react";

const TopResContainer = () => {
  const [topResData, setTopResData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://eato-project-six.vercel.app/data/topResData.json"
        );
        const data = await res.json();
        setTopResData(data);
      } catch (err) {
        console.error("Failed to fetch restaurants:", err);
      }
    };
    fetchData();
  }, []);

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
