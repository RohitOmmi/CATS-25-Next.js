const apiBasePath = "https://guprojects.gitam.edu/catscms2/api/";

export const apiHeaders = {
  "Content-Type": "application/json",
  Authorization: "8efgh5gyujk",
};

export const apis = {
  homeSlider: `${apiBasePath}fetch-homeslider`,
  services: `${apiBasePath}fetch-allservices`,
  servicesL2: `${apiBasePath}fetch-l2services`,
  servicesL3: `${apiBasePath}fetch-l3services`,
  allNews: `${apiBasePath}fetch-allnews`,
  allNewsCategories: `${apiBasePath}fetch-news-categories`,
  newsByCategories: `${apiBasePath}fetchnewsby-categoryslug`,
  newsDetails: `${apiBasePath}fetch-newsinner`,
  allEvents: `${apiBasePath}fetch-allevents`,
  search: `${apiBasePath}search-keyword`,
};
