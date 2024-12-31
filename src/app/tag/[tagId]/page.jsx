import { CategoriesPage } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: "تماشای دسته‌بندی‌ها",
};


export async function generateStaticParams() {
  const data = await getLocalData();

  if (!data || !data.categories) {
    throw new Error("اطلاعات دسته‌بندی‌ها موجود نیست.");
  }

  const category = data.categories;

  return category.map((category) => ({
    tagId: `${category.enName}`,
  }));
}

// کامپوننت اصلی صفحه
const Category = async ({ params }) => {
  const data = await getLocalData();

  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  }

  return (
    <div className="text-white">
      <CategoriesBanner data={data} eachCategory={params.tagId} />
      <CategoriesPage data={data} eachCategory={params.tagId} />
    </div>
  );
};

export default Category;