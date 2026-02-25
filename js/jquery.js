/*
 * Nombre y Apellidos: [Harold Andres Ponce Pachon]
 * Misiones completadas: 1, 2, 3, 4, 5 y Punto Bonus.
 * * EXPLICACIÓN DE BLOQUES:
 * - Selección: Cambia estilos a los h2, el logo y aplica un color diferente a categorías alternas.
 * - DOM: Permite al usuario añadir categorías a una "Lista de Interés" y borrarlas.
 * - Eventos: Gestiona el brillo del logo (ratón), feedback en el nombre (teclado) y validación (formulario).
 * - Animaciones: Crea un efecto de entrada en el título y despliegue en los testimonios.
 * - jQuery UI: Activa un calendario profesional para elegir la fecha de la clase de prueba.
*/

$(document).ready(function() {

    // MISIÓN 1: Selección de Elementos
    $("h2").css("color", "#2c3e50"); // Por etiqueta
    $(".logo").css("font-weight", "bold"); // Por clase
    $("#hero-content").css("border-bottom", "4px solid #FFB800"); // Por ID

    // Selector avanzado para las tarjetas (hijos directos de #tarjetas)
    $("#tarjetas > div:even").css("background-color", "#f8f9fa"); // Las posiciones 0 y 2 (1ª y 3ª)
    $("#tarjetas > div:odd").css("background-color", "#e9ecef");  // Las posiciones 1 y 3 (2ª y 4ª)

// --- MISIÓN 2 & PUNTO BONUS: Adición y Supresión (Versión Integrada) ---

// 1. Inyectamos el contenedor SIN fondo blanco, totalmente integrado
if ($("#tarjetas").length > 0) {
    $("#tarjetas").after(`
        <div id="mi-seleccion" style="text-align:center; padding:40px 20px; background: transparent; margin: 0; border-top: 1px solid rgba(243, 156, 18, 0.3);">
            <h3 style="color: #FFB800; text-transform: uppercase; letter-spacing: 3px; font-size: 1.5rem; margin-bottom: 10px;">Mis Categorías de Interés</h3>
            <p style="color: #bbb; font-size: 0.85rem; margin-bottom: 25px; font-style: italic;">Haz clic en el nombre de una categoría para añadirla a tu lista</p>
            <ul id="lista-inscripcion" style="list-style:none; padding:0; display:flex; flex-wrap:wrap; justify-content:center; gap:15px;">
            </ul>
        </div>
    `);
}

// 2. AÑADIR: Al hacer clic en el nombre (h4)
$("#tarjetas h4").css("cursor", "pointer").on("click", function() {
    let nombreCategoria = $(this).text();
    
    if ($("#lista-inscripcion:contains('" + nombreCategoria + "')").length === 0) {
        $("#lista-inscripcion").append(`
            <li style="background: transparent; color:#FFB800; border: 2px solid #FFB800; padding:8px 15px; display:flex; align-items:center; gap:15px; font-weight:bold; transition: all 0.3s ease;">
                ${nombreCategoria}
                <button class="btn-borrar" style="background:#FFB800; color:#000; border:none; padding:2px 10px; cursor:pointer; font-weight:bold; font-size: 10px;">
                    QUITAR
                </button>
            </li>
        `);
    }
});

// 3. BORRAR: Delegación de eventos (Mantiene la coherencia)
$(document).on("click", ".btn-borrar", function() {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
});

    // --- MISIÓN 3: Gestión de Eventos (.on) ---
    // Ratón: Hover sobre el logo
    $(".logo").on("mouseenter", function() { $(this).css("opacity", "0.7"); });
    $(".logo").on("mouseleave", function() { $(this).css("opacity", "1"); });

    // Teclado: Feedback visual en el input de nombre (en contacto)
    $("input[name='name']").on("keyup", function() {
        let texto = $(this).val();
        if(!$("#msg-feedback").length) $(this).after('<span id="msg-feedback" style="display:block; font-size:12px;"></span>');
        $("#msg-feedback").text("Hola, " + texto + ". ¡Casi listo!");
    });

    // Formulario: Simulación de envío
    $(".formato").on("submit", function(e) {
        e.preventDefault();
        alert("¡Formulario enviado con éxito!");
    });

    // --- MISIÓN 4: Animaciones ---
    // .animate con propiedades personalizadas
    $("#hero-content h1").animate({ fontSize: "2.5rem", opacity: "1" }, 1000);

    // .slideDown / .slideUp en testimonios
    $(".testimonio-card").on("click", function() {
        $(this).find("p").slideToggle();
    });

    // .fadeIn / .fadeOut
    $(".btn-cta").hover(function() {
        $(this).fadeOut(100).fadeIn(100);
    });

    // --- MISIÓN 5: jQuery UI (Plug-in Datepicker) ---

    if($("input[name='texto']").length) {
        $("input[name='texto']").before('<input type="text" id="datepicker" placeholder="Fecha para clase de prueba">');
        $("#datepicker").datepicker();
    }
});