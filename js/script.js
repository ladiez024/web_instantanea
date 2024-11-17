// Crear el enlace para cargar Bootstrap CSS dinámicamente
var link = document.createElement("link");
link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
link.rel = "stylesheet";
link.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
link.crossOrigin = "anonymous";
document.head.appendChild(link);


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    let sectionsLoaded = 0;

    // Cargar la primera sección al iniciar
    loadSection(`/html/section${sectionsLoaded + 1}.html`);

    // Detectar el desplazamiento para cargar nuevas secciones
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            sectionsLoaded++;
            loadSection(`/html/section${sectionsLoaded + 1}.html`);
        }
    });

    function loadSection(file) {
        fetch(file)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    console.log(`No se pudo cargar ${file}`);
                }
            })
            .then(data => {
                if (data) {
                    content.innerHTML += data;
                }
            })
            .catch(error => console.error("Error al cargar la sección:", error));
    }
});
