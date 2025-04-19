const API_BASE = "http://localhost:8000";

const AuthController = {
  async signUp(name, email, password) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await res.json(); // 👈 move outside if-else
  
      if (res.ok) {
        console.log("Signup successful:", data);
        return { success: true };
      } else {
        console.error("Signup error:", data.detail);
        return { success: false, message: data.detail };
      }
    } catch (err) {
      console.error("Signup fetch error:", err);
      return { success: false };
    }
  },
  

  async signIn(email, password) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        // Save token in cookie or localStorage
        document.cookie = `token=${data.token}; path=/`;
        window.location.href = "/"; // Redirect to home page on successful login
        return { success: true };
      } else {
        const data = await res.json();
        console.error("Login error:", data.detail);
        return { success: false, message: data.detail };
      }
    } catch (err) {
      console.error("Login fetch error:", err);
      return { success: false };
    }
  },
  async logout() {
    try {
      const res = await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        credentials: "include", // 👈 to include cookie
      });
  
      if (res.ok) {
        // Optional: remove token from cookie manually if needed
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (err) {
      console.error("Logout error:", err);
      return { success: false };
    }
  }
};

export default AuthController;
