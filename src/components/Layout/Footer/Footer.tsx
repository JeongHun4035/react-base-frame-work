import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return <footer>{t("footer.content")}</footer>;
};

export default Footer;
