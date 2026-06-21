import { sanityFetch } from "@workspace/sanity/live";
import {
  queryGlobalSeoSettings,
  queryNavbarData,
} from "@workspace/sanity/query";

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

export const getNavigationData = async () => {
  const [navbarData, settingsData] = await Promise.all([
    sanityFetch({ query: queryNavbarData }),
    sanityFetch({ query: queryGlobalSeoSettings }),
  ]);

  let cleanNavbar = rebrandData(navbarData.data);
  const cleanSettings = rebrandData(settingsData.data);

  if (cleanNavbar) {
    cleanNavbar.columns = [
      { _key: "nav-about", type: "link", name: "About Us", href: "/about" },
      { _key: "nav-project", type: "link", name: "Project", href: "/project" },
      { _key: "nav-blog", type: "link", name: "Blog", href: "/blog" }
    ];
    cleanNavbar.buttons = [
      { _key: "nav-work-with-us", label: "Work with us", href: "/work-with-us", variant: "primary" }
    ];
  }

  return { navbarData: cleanNavbar, settingsData: cleanSettings };
};
