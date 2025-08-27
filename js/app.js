 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var footerOffset = $('footer').offset().top - window.innerHeight;
    
    if (scroll > footerOffset) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

let token = null;

// Registro
document.querySelector("#registroModal form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = e.target.querySelector("input[placeholder='Digite seu usuário']").value;
  const senha = e.target.querySelector("input[placeholder='Digite sua senha']").value;
  const endereco = e.target.querySelector("input[placeholder='Digite seu endereço']").value;
  const nascimento = e.target.querySelector("input[type='date']").value;

  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nome,
      email: `${nome}@teste.com`, // só exemplo, pode adicionar campo de email também
      password: senha,
      address: endereco,
      age: nascimento ? new Date().getFullYear() - new Date(nascimento).getFullYear() : null
    })
  });

  const data = await res.json();
  alert(data.message || "Erro no registro");
});


document.querySelector(".card form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = e.target.querySelector("input[placeholder='Digite seu usuário']").value;
  const senha = e.target.querySelector("input[placeholder='Digite sua senha']").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: usuario, password: senha })
  });

  const data = await res.json();

  if (data.token) {
    token = data.token;
    alert("Login realizado com sucesso!");
  } else {
    alert(data.error || "Erro no login");
  }
});

async function getProfile() {
  if (!token) {
    alert("Faça login primeiro!");
    return;
  }

  const res = await fetch("http://localhost:5000/profile", {
    headers: { Authorization: "Bearer " + token }
  });

  const data = await res.json();
  console.log(data);
  alert("Perfil carregado no console!");
}
