document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const res = await fetch("https://sistema-gastos-694972193726.southamerica-east1.run.app/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, senha })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("usuarioLogado", JSON.stringify(data));
      window.location.href = "home.html";
    } else {
      const msg = await res.text();
      alert("Login falhou: " + msg);
    }
  } catch (err) {
    console.error(err);
    alert("Erro ao conectar com o servidor.");
  }
});
