import { getLocalData } from "@/lib/localdata";
import MainBannerSlider from "./slider";

const MainBanner = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  const movies = data.movies;

  return <section>
    <MainBannerSlider movies={movies} />
  </section> ;
};

export default MainBanner;