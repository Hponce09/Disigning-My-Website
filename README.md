Disigning-My-Website
VERSIÓN ACTUAL

Este repositorio contiene múltiples versiones de diseño. La versión actualmente visible es la implementación de FLEXBOX(landing page)

Estrategia: Desktop First.

He elegido la estrategia Desktop First porque los estilos están optimizados para pantallas de escritorio, y utilice media queries para adaptar el diseño a dispositivos más pequeños (tablets y móviles).

Tipo de diseño: Responsive Adaptativo.

He implementado un diseño responsive adaptativo que utiliza breakpoints específicos (480px para móviles y 768px para tablets) donde el layout cambia significativamente en cada punto de ruptura. Por ejemplo, el menú de navegación pasa de ser horizontal en desktop a un menú hamburguesa desplegable en móvil. Este enfoque permite optimizar la experiencia de usuario para cada tipo de dispositivo con diseños específicos y adaptados a sus necesidades particulares.

Práctica 6 – Multimedia Adaptativo

Verifica tu resultado en distintos tamaños de ventana (móvil, tableta, escritorio). Hazte las siguientes preguntas:

¿He definido correctamente una media query para cada uno de los posibles dispositivos (desktop, tablet, móvil?

Si, he definidi correctamente las media query para cada uno.

Cuando cambio el tamaño de mi pantalla, ¿las imágenes se deforman?

No, estas no se deforman.

Cuando cambio el tamaño de mi pantalla, ¿las imágenes sobresalen del contenedor?

No, estas no se sobresalen del contenedor.


# Entrega Práctica 11:jQuery - Newbarcino F.C.

## Explicación de Misiones Implementadas

### Misión 1: Selectores
Se han utilizado selectores de etiqueta (`h2`), clase (`.logo`) e ID (`#hero-content`) para establecer estilos iniciales consistentes. Se usó el selector avanzado `:even` en las tarjetas de categorías para mejorar la legibilidad mediante un patrón de colores alternos.

### Misión 2: DOM y Punto Bonus
He implementado una "Lista de Interés". Cuando el usuario hace clic en el nombre de una categoría (Benjamín, Alevín, etc.), esta se añade a una lista dinámica al final de la sección. Se utilizó **eventos delegados** (`.on("click", ".btn-eliminar", ...)`) para permitir que los botones de eliminar funcionen incluso en elementos creados después de cargar la página.

### Misión 3: Eventos
1. **Ratón:** El logo cambia de brillo al pasar el puntero (`mouseenter/mouseleave`).
2. **Teclado:** En el formulario de contacto, se muestra un feedback en tiempo real de lo que el usuario escribe.
3. **Formulario:** El envío del formulario de contacto está controlado para mostrar un mensaje de éxito sin recargar la página.

### Misión 4: Animaciones
- Se usó `.animate()` para dar una entrada suave y de gran escala al título principal (Hero).
- Se implementó `.slideToggle()` en los testimonios para permitir a los usuarios contraer/expandir las opiniones de los padres.
- `.fadeIn/fadeOut` se aplica al video promocional al interactuar con el botón de inscripción.

### Misión 5: jQuery UI
Se integró el componente **Datepicker** en la página de contacto. Esto permite que los padres seleccionen una fecha exacta para la clase de prueba gratuita, mejorando la experiencia de usuario y evitando errores de formato de fecha.
