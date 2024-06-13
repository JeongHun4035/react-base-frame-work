import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import Home from "@/pages/Home";
import CalendarEx from "@/demo/CalendarEx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/full-calendar",
      element: <CalendarEx />,
    },
  ]);

  return (
    <RouterProvider
      router={router}
      // fallbackElement={<RouterProgress />}
      future={{ v7_startTransition: true }} // UI 업데이트를 비동기적으로 처리하여 응답성 향상
      // future={{ v7_partialHydration: true }} //부분 하이드레이션으로 초기 로딩 속도와 성능 향상
      // future={{ v7_normalizeFormMethod: true }} //폼 데이터 전송 메서드를 표준화하여 일관성 향상
      // future={{ v7_fetcherPersist: true }} // 데이터 페칭 상태를 유지하여 네트워크 요청 최소화
      // future={{ v7_relativeSplatPath: true }} //상대 경로에서 와일드카드 경로 지원으로 라우팅 유연성 증대
    />
  );
};

export default Router;
