Newbarcino F.C. - Club de Fútbol Formativo
Este repositorio contiene la evolución del diseño web del club, integrando maquetación avanzada y funcionalidades dinámicas mediante jQuery.

🛠 Especificaciones Técnicas
Estrategia de Diseño: Desktop First con adaptación progresiva mediante Media Queries.

Layout: Implementado con Flexbox para una distribución flexible de elementos.

Tipo de diseño: Responsive Adaptativo. El layout cambia significativamente en breakpoints específicos (480px y 768px).

📸 Multimedia Adaptativo (Práctica 6)
Se ha implementado la etiqueta <picture> para aplicar el concepto de Art Direction:

Optimización: Se sirven archivos de imagen distintos según el dispositivo para garantizar que los usuarios móviles descarguen versiones más ligeras.

Media Queries: Definidas correctamente para desktop, tablet y móvil, asegurando que las imágenes no se deformen ni sobresalgan de sus contenedores.

🚀 Implementación jQuery (Práctica 11)
Misión 1: Selectores Avanzados
Se han utilizado selectores de etiqueta (h2), clase (.logo) e ID (#hero-content) para establecer estilos visuales. Se aplicó el selector avanzado :even y :odd en las tarjetas de categorías para crear un diseño de bordes alternos (naranja y azul) coherente con la identidad del club.

Misión 2: Gestión del DOM (Punto Bonus)
Se ha implementado una funcionalidad de "Categorías de Interés". Al hacer clic en los títulos de las categorías, se añade dinámicamente una etiqueta a una lista de selección integrada en el diseño oscuro de la web.

Punto Bonus: Se utiliza delegación de eventos ($(document).on) para asegurar que el botón "Quitar" funcione correctamente en elementos generados dinámicamente.

Misión 3: Eventos Integrados
Ratón: Feedback visual en el logo mediante cambios de opacidad al pasar el cursor (hover).

Teclado: En el formulario de contacto, el sistema genera un saludo dinámico mientras el usuario escribe su nombre en tiempo real.

Formulario: Captura del evento submit para validar datos y mostrar una confirmación de envío profesional sin recargar la página.

Misión 4: Animaciones
Entrada Hero: El título principal utiliza .animate() para una transición de tamaño y opacidad al cargar la página.

Interacción: Se implementó .slideToggle() en las tarjetas de testimonios, permitiendo desplegar la información de forma suave al hacer clic.

Feedback: Uso de .fadeIn() y .fadeOut() en botones de llamada a la acción.

Misión 5: jQuery UI
Se ha integrado el widget Datepicker en el formulario de contacto. Esta herramienta permite a los padres seleccionar la fecha para la clase de prueba gratuita de manera intuitiva, garantizando la coherencia estética con el resto del sitio oscuro.
