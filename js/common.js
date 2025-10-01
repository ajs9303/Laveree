export const refresh = () => {
  if (
    window.location.pathname !== "/Laveree/index.html" &&
    window.location.pathname.startsWith("/Laveree/page/")
  ) {
    window.location.href = "/Laveree/index.html"; // 강제로 index.html로 이동
  }
};
