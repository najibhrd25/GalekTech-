import { sanityFetch } from "@workspace/sanity/live";
import { queryHomePageData } from "@workspace/sanity/query";

import { PageBuilder } from "@/components/pagebuilder";
import { getSEOMetadata } from "@/lib/seo";

function rebrandData(data: any) {
  if (!data) return data;
  try {
    const jsonStr = JSON.stringify(data);
    const replacedStr = jsonStr
      .replace(/VentureDen/g, "GalekTech")
      .replace(/Venture Pitch/g, "GalekTech")
      .replace(/VenturePitch/g, "GalekTech")
      .replace(/Venture/g, "GalekTech");
    return JSON.parse(replacedStr);
  } catch (e) {
    return data;
  }
}

async function fetchHomePageData() {
  const response = await sanityFetch({ query: queryHomePageData });
  if (response.data) {
    response.data = rebrandData(response.data);
  }
  return response;
}

export async function generateMetadata() {
  const { data } = await fetchHomePageData();
  return getSEOMetadata({
    title: data?.seoTitle ?? undefined,
    description: data?.seoDescription ?? undefined,
    slug: "/",
    contentId: data?._id,
    contentType: data?._type,
  });
}

export default async function Page() {
  const { data } = await fetchHomePageData();

  if (!data) {
    return <div>No home page data</div>;
  }

  return (
    <PageBuilder
      id={data._id}
      pageBuilder={data.pageBuilder ?? []}
      type={data._type}
    />
  );
}
