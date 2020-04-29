let isProd = false;
export const UrlBase = () => {
  return isProd
    ? "http://softio-001-site1.btempurl.com/"
    : "https://localhost:44303/";
};
