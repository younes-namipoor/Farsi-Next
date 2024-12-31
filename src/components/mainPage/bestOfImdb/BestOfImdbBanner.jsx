"use client";
import { useSelector } from "react-redux";

const BestOfImdbBanner = () => {
  const bestOfImdb = useSelector((state) => state.bestOfImdb.initValue);
  const clickedId = useSelector((state) => state.bestOfImdb.clickedId);
  
  // فیلتر کردن و بررسی که آیا نتیجه‌ای برمی‌گرداند
  const clickedItem = bestOfImdb.find(({ id }) => id === clickedId);

  // بررسی اینکه آیا clickedItem موجود است یا خیر
  if (!clickedItem) {
    return <div>No item found.</div>; // اگر هیچ داده‌ای یافت نشد، پیامی نشان می‌دهیم
  }

  const { banner, faName } = clickedItem;

  return (
    <div className={"flex justify-end w-full h-full bg-gradient-banner overflow-hidden absolute top-0"}>
      <div className={"w-full h-full bg-gradient-banner absolute"}></div>
      <div className={"w-full h-full bg-gradient-banner2 absolute"}></div>
      <div className={"w-full h-full bg-gradient-banner3 absolute"}></div>
      <img className={"w-11/12 h-full md:h-fit"} src={banner} alt={faName} />
    </div>
  );
};

export default BestOfImdbBanner;