# Newbarcino F.C. - Club de Fútbol Formativo
Este repositorio contiene la evolución del diseño web del club, integrando maquetación avanzada y funcionalidades dinámicas mediante jQuery.

# 🛠 Especificaciones Técnicas
Estrategia de Diseño: Desktop First con adaptación progresiva mediante Media Queries.

Layout: Implementado con Flexbox para una distribución flexible de elementos.

# Tipo de diseño: 

Responsive Adaptativo. El layout cambia significativamente en breakpoints específicos (480px y 768px).

# 📸 Multimedia Adaptativo (Práctica 6)
Se ha implementado la etiqueta <picture> para aplicar el concepto de Art Direction:

# Optimización: 
Se sirven archivos de imagen distintos según el dispositivo para garantizar que los usuarios móviles descarguen versiones más ligeras.

# Media Queries: 

Definidas correctamente para desktop, tablet y móvil, asegurando que las imágenes no se deformen ni sobresalgan de sus contenedores.

# Entrega Práctica 11:jQuery

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
