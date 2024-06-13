import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  return <div>{t("signIn.content")}</div>;
};
export default SignIn;
