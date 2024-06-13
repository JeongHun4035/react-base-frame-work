import { useTranslation } from "react-i18next";

const RouterProgress = () => {
  const { t } = useTranslation();
  return <div>{t("common.content")}</div>;
};

export default RouterProgress;
