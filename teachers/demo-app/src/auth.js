// Auth ធម្មតាបំផុត សម្រាប់ Demo Protected Route (Lesson 18)
// នៅ Lesson ក្រោយ យើងនឹងប្រើ Token ពី Backend API ពិតប្រាកដ
const KEY = "demo-user";

export function login(username) {
    localStorage.setItem(KEY, username);
}

export function logout() {
    localStorage.removeItem(KEY);
}

export function getUser() {
    return localStorage.getItem(KEY);
}

export function isLoggedIn() {
    return getUser() !== null;
}
