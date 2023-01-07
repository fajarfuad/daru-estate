export function autoLogout() {
  localStorage.removeItem("loginSession");
  localStorage.removeItem("permissions");
  localStorage.removeItem("recoveryEmail");
  localStorage.removeItem("countdown");
  window.location.href = "/login";
}
