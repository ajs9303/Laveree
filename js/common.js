export const refresh = () => {
  if (
    window.location.pathname !== "/laveree/index.html" &&
    window.location.pathname.startsWith("/laveree/page/")
  ) {
    window.location.href = "/laveree/index.html"; // 강제로 index.html로 이동
  }
};
