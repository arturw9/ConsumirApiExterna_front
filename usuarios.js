document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://localhost:7115/Usuarios/Listar"; 
    const usuariosContainer = document.getElementById("usuarios-container");

    async function fetchUsuarios() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache', 
                }
            });
            
            if (!response.ok) {
                const errorText = await response.text(); 
                throw new Error(`Erro ao buscar os usuários: ${response.status} - ${errorText}`);
            }

            const usuarios = await response.json(); 
            console.log("Dados recebidos da API:", usuarios); 
            renderUsuarios(usuarios);
        } catch (error) {
            console.error("Erro ao buscar os usuários:", error); 
            usuariosContainer.innerHTML = `<p>Erro ao carregar usuários. Tente novamente mais tarde.</p>`;
        }
    }

    function renderUsuarios(usuarios) {
        if (!usuarios || usuarios.length === 0) {
            usuariosContainer.innerHTML = "<p>Nenhum usuário encontrado.</p>";
            return;
        }

        const usuariosHtml = usuarios.map((usuario) => `
            <div class="usuario-card">
                <h3>${usuario.name?.title} ${usuario.name?.first} ${usuario.name?.last}</h3>
                <p><strong>Email:</strong> ${usuario.email || "Não disponível"}</p>
                <p><strong>Telefone:</strong> ${usuario.phone || "Não disponível"}</p>
                <p><strong>Celular:</strong> ${usuario.cell || "Não disponível"}</p>
                <p><strong>Nacionalidade:</strong> ${usuario.nat || "Não disponível"}</p>
                ${usuario.picture?.thumbnail ? `<img src="${usuario.picture.thumbnail}" alt="Foto de ${usuario.name?.first}" />` : ""}
                <button class="editar-btn" onclick="window.location.href='editar-usuario.html?id=${usuario.idUsuario}&gender=${encodeURIComponent(usuario.gender)}&name=${encodeURIComponent(usuario.name.title)} ${encodeURIComponent(usuario.name.first)} ${encodeURIComponent(usuario.name.last)}&email=${encodeURIComponent(usuario.email)}&phone=${encodeURIComponent(usuario.phone)}&cell=${encodeURIComponent(usuario.cell)}&nat=${encodeURIComponent(usuario.nat)}&title=${encodeURIComponent(usuario.name.title)}&first=${encodeURIComponent(usuario.name.first)}&last=${encodeURIComponent(usuario.name.last)}&streetNumber=${encodeURIComponent(usuario.location?.street?.number)}&streetName=${encodeURIComponent(usuario.location?.street?.name)}&city=${encodeURIComponent(usuario.location?.city)}&state=${encodeURIComponent(usuario.location?.state)}&country=${encodeURIComponent(usuario.location?.country)}&postcode=${encodeURIComponent(usuario.location?.postcode)}&latitude=${encodeURIComponent(usuario.location?.coordinates?.latitude)}&longitude=${encodeURIComponent(usuario.location?.coordinates?.longitude)}&offset=${encodeURIComponent(usuario.location?.timezone?.offset)}&description=${encodeURIComponent(usuario.location?.timezone?.description)}&uuid=${encodeURIComponent(usuario.login?.uuid)}&username=${encodeURIComponent(usuario.login?.username)}&password=${encodeURIComponent(usuario.login?.password)}&salt=${encodeURIComponent(usuario.login?.salt)}&md5=${encodeURIComponent(usuario.login?.md5)}&sha1=${encodeURIComponent(usuario.login?.sha1)}&sha256=${encodeURIComponent(usuario.login?.sha256)}&registeredDate=${encodeURIComponent(usuario.registered?.date)}&registeredAge=${encodeURIComponent(usuario.registered?.age)}&pictureLarge=${encodeURIComponent(usuario.picture?.large)}&pictureMedium=${encodeURIComponent(usuario.picture?.medium)}&pictureThumbnail=${encodeURIComponent(usuario.picture?.thumbnail)}&idName=${encodeURIComponent(usuario.id?.name)}&idValue=${encodeURIComponent(usuario.id?.value)}&birthdayDate=${encodeURIComponent(usuario.dateOfBirth?.date || '')}&birthdayAge=${encodeURIComponent(usuario.dateOfBirth?.age || '')}'">Editar</button>
            </div>
        `).join("");

        usuariosContainer.innerHTML = usuariosHtml;
    }

    fetchUsuarios();

    window.onpageshow = function (event) {
        if (!event.persisted) {
            fetchUsuarios(); 
        }
    };
});