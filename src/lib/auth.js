export function getToken() { return localStorage.getItem('its-id-token'); }
export function getUser() {
  const token = getToken();
  if (!token) return null;
  try { return JSON.parse(atob(token.split('.')[1])); } catch { return null; }
}
export function requireAuth(currentUrl) {
  if (!getToken()) {
    const id = import.meta.env.VITE_ITS_ID_URL || 'https://it-s-id.vercel.app';
    window.location.href = id + '/login?redirect=' + encodeURIComponent(currentUrl);
    return false;
  }
  return true;
}
