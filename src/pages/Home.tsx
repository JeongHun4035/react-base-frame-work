import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <div>{t("home.content")}</div>;
};
export default Home;
