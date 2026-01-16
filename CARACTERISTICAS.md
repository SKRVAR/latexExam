# 🔒 Características del Sistema de Evaluación

## Sistema Anti-Plagio

El examen incluye varios mecanismos para garantizar la integridad académica:

### ⏱️ Doble Sistema de Temporizadores

#### 1. Tiempo Global (20 minutos)
- **Total para todo el examen**: 1200 segundos (20 minutos)
- Comienza al iniciar el examen
- Se mantiene activo durante todo el proceso
- El tiempo restante se muestra en la pantalla de revisión
- Si se agota, el examen se envía automáticamente

#### 2. Tiempo Límite por Pregunta
Cada pregunta tiene un tiempo límite específico basado en su complejidad:
- **Preguntas Verdadero/Falso**: 30 segundos
- **Preguntas de opción múltiple básicas**: 35-40 segundos
- **Preguntas que requieren análisis**: 45 segundos

**Funcionamiento:**
1. Al cargar cada pregunta, inicia un contador regresivo individual
2. El temporizador cambia de color según el tiempo restante:
   - Verde (>20 seg): Tiempo suficiente
   - Amarillo (11-20 seg): Advertencia
   - Rojo parpadeante (<10 seg): Tiempo crítico
3. Si el tiempo se agota, el examen avanza automáticamente a la siguiente pregunta
4. Este tiempo es independiente del tiempo global

### 🚫 Navegación Controlada

- **No retroceso durante el examen**: El botón "Anterior" está deshabilitado
- **Una pregunta a la vez**: Solo se muestra una pregunta en pantalla
- **Progresión lineal obligatoria**: Debes responder o esperar que expire el tiempo
- **Revisión final controlada**: Solo después de responder todas las preguntas

### 📋 Pantalla de Revisión/Resumen

Después de completar las 20 preguntas, se muestra una pantalla especial:

1. **Resumen de todas las respuestas**: Vista completa de todas tus respuestas
2. **Tiempo restante visible**: Muestra cuánto tiempo queda de los 20 minutos
3. **Edición condicional**: 
   - ✅ Puedes modificar respuestas SI hay tiempo restante
   - ❌ No puedes modificar SI el tiempo se agotó
4. **Contador de respuestas**: Muestra cuántas preguntas has respondido
5. **Indicadores visuales**:
   - Verde: Pregunta respondida
   - Amarillo: Pregunta sin responder

#### Cómo Editar en la Revisión
- Haz clic en cualquier pregunta del resumen
- Se abrirá esa pregunta específica
- Modifica tu respuesta
- Haz clic en "Volver al Resumen"
- Puedes editar tantas preguntas como quieras mientras haya tiempo

### 📊 Registro Completo

El sistema registra en Google Sheets:
- Tiempo total del examen (máximo 20 minutos)
- Tiempo global utilizado
- Fecha y hora exacta de inicio y finalización
- Cada respuesta individual
- Información completa del estudiante (apellidos, nombres, código)
- Si se agotó el tiempo global o se envió antes

## Flujo del Examen

### 1️⃣ Fase Inicial: Responder Preguntas (Modo Secuencial)
```
Inicio → Pregunta 1 (30-45s) → Pregunta 2 (30-45s) → ... → Pregunta 20 (30-45s) → Revisión
```
- **No puedes retroceder**: Solo avanzar
- **Tiempo individual**: Cada pregunta tiene su límite
- **Tiempo global**: Sigue corriendo (20 minutos totales)
- **Avance automático**: Si se acaba el tiempo de la pregunta

### 2️⃣ Fase de Revisión: Modificar Respuestas (Modo Flexible)
```
Resumen → Click en pregunta → Editar → Volver al Resumen → Repetir (si hay tiempo)
```
- **Tiempo restante visible**: Muestra minutos:segundos del total de 20 min
- **Navegación libre**: Puedes ir a cualquier pregunta
- **Sin tiempo individual**: Solo importa el tiempo global restante
- **Edición múltiple**: Cambia tantas respuestas como quieras

### 3️⃣ Envío Final
- Hacer clic en "Enviar Examen Final"
- O automático si se agota el tiempo global
- Confirmación si hay preguntas sin responder

## Ejemplo de Uso del Tiempo

**Escenario 1: Estudiante Rápido**
- Responde las 20 preguntas en 12 minutos
- Le quedan 8 minutos para revisar
- Puede modificar cualquier respuesta durante esos 8 minutos
- Decide enviar a los 15 minutos (5 min restantes sin usar)

**Escenario 2: Estudiante que Usa Todo el Tiempo**
- Responde las 20 preguntas en 18 minutos
- Le quedan 2 minutos para revisar
- Modifica 3 preguntas en esos 2 minutos
- El examen se envía automáticamente a los 20 minutos

**Escenario 3: Estudiante Lento**
- Responde 15 preguntas en 18 minutos
- Solo le quedan 2 minutos
- Las últimas 5 preguntas se responden con tiempo justo
- Llega a la revisión con 0 minutos restantes
- No puede modificar nada, solo enviar

## Tipos de Preguntas

### 1. Opción Múltiple (type: 'multiple')
- 2-4 opciones de respuesta
- Ideal para evaluar conocimiento de comandos, sintaxis y conceptos
- Ejemplo:
  ```
  ¿Cuál comando se usa para crear una sección?
  A) \header{título}
  B) \section{título}
  C) \title{título}
  D) \heading{título}
  ```

### 2. Verdadero/Falso (type: 'boolean')
- Solo dos opciones: Verdadero o Falso
- Útil para evaluar comprensión de conceptos
- Ejemplo:
  ```
  El comando \textbf{} sirve para poner texto en cursiva.
  Verdadero / Falso
  ```

## Temas Evaluados (Nivel Básico-Intermedio)

### ✅ Estructura de Documentos
- Comando `\documentclass`
- Entornos `\begin{document}` y `\end{document}`
- Comandos básicos de organización

### ✅ Formato de Texto
- Negrita: `\textbf{}`
- Cursiva: `\textit{}`, `\emph{}`
- Comentarios con `%`

### ✅ Listas
- Listas numeradas: `enumerate`
- Listas con viñetas: `itemize`

### ✅ Matemáticas
- Ecuaciones en línea: `$...$`
- Ecuaciones display: `$$...$$` o `\[...\]`
- Paquete `amsmath`

### ✅ Figuras y Tablas
- Paquete `graphicx`
- Comando `\includegraphics`
- Entorno `tabular`

### ✅ Espaciado y Diseño
- Comando `\newpage`
- Comando `\vspace`
- Entorno `center`

### ✅ Referencias y Etiquetas
- Comando `\label{}`
- Comando `\ref{}`

### ✅ Elementos Especiales
- Entorno `verbatim` para código
- Comando `\maketitle`
- Comando `\tableofcontents`

## Configuración del Tiempo

Para ajustar los tiempos límite, edita el archivo `script.js`:

```javascript
{
    id: 1,
    question: 'Tu pregunta aquí',
    type: 'multiple',
    timeLimit: 45,  // Cambia este valor (en segundos)
    options: [...],
    correct: 0
}
```

**Recomendaciones:**
- No menos de 20 segundos (muy estresante)
- No más de 90 segundos (permite consultas externas)
- Óptimo: 30-45 segundos por pregunta

## Sistema de Puntuación

### Escala Vigesimal (0-20)

La puntuación se calcula:
```
Puntuación = (Respuestas Correctas / Total de Preguntas) × 20
```

### Categorías de Resultados

| Puntuación | Categoría | Color | Retroalimentación |
|------------|-----------|-------|-------------------|
| 18-20 | Excelente | Verde oscuro | Dominio sobresaliente |
| 14-17.99 | Bueno | Verde claro | Buen conocimiento |
| 11-13.99 | Aprobado | Amarillo | Conocimientos básicos |
| 0-10.99 | Desaprobado | Rojo | Necesita reforzar |

## Datos Recopilados

### Información del Estudiante
- **Apellidos** (obligatorio)
- **Nombres** (obligatorio)
- **Email** (obligatorio, validado)
- **Código de estudiante** (obligatorio)

### Datos del Examen
- Fecha y hora de inicio
- Fecha y hora de finalización
- Duración total
- Respuestas individuales
- Puntuación final
- Porcentaje de acierto

### Datos Detallados por Pregunta
- Número de pregunta
- Tipo de pregunta
- Tiempo límite asignado
- Texto de la pregunta
- Respuesta del estudiante
- Respuesta correcta
- Si fue correcta o incorrecta

## Privacidad y Seguridad

- ✅ Todos los datos se almacenan en tu Google Sheets privado
- ✅ Solo tú tienes acceso a los resultados
- ✅ No se usan cookies de terceros
- ✅ Conexión HTTPS con Google Apps Script
- ✅ No se almacenan datos en el navegador después del envío

## Análisis de Resultados

Una vez que los estudiantes completen el examen, puedes:

1. **Ver resultados individuales** en la hoja "Resultados_Examen_LaTeX"
2. **Analizar respuestas por pregunta** en "Respuestas_Detalladas"
3. **Generar estadísticas** ejecutando la función `createStatistics()` en Apps Script
4. **Exportar datos** a CSV/Excel para análisis adicional
5. **Crear gráficos** usando las herramientas de Google Sheets

## Recomendaciones para el Instructor

### Antes del Examen
- ✅ Prueba el examen tú mismo
- ✅ Verifica que todos los enlaces funcionen
- ✅ Confirma que la URL de Google Apps Script esté configurada
- ✅ Revisa que las preguntas sean apropiadas para el nivel
- ✅ Informa a los estudiantes sobre el sistema de tiempo límite

### Durante el Examen
- ✅ Monitorea la hoja de Google Sheets para ver quién ha completado
- ✅ Ten preparado soporte técnico por si hay problemas
- ✅ Asegúrate de que los estudiantes tengan buena conexión a internet

### Después del Examen
- ✅ Genera las estadísticas
- ✅ Revisa si hay patrones en las respuestas incorrectas
- ✅ Identifica temas que necesitan refuerzo
- ✅ Proporciona retroalimentación a los estudiantes

## Personalización Adicional

### Cambiar Mensajes de Retroalimentación

En `script.js`, función `showResults()`:

```javascript
if (appState.score >= 18) {
    feedback = 'Tu mensaje personalizado para excelente';
} else if (appState.score >= 14) {
    feedback = 'Tu mensaje personalizado para bueno';
}
// ... etc
```

### Modificar Colores del Sistema

En `styles.css`:

```css
:root {
    --primary-color: #2c3e50;    /* Color principal */
    --secondary-color: #3498db;  /* Color secundario */
    --success-color: #27ae60;    /* Color de éxito */
    --danger-color: #e74c3c;     /* Color de peligro */
}
```

### Agregar Logo o Imágenes

En `index.html`, dentro del `welcome-screen`:

```html
<img src="tu-logo.png" alt="Logo" class="logo">
<h1>Evaluación del Curso de LaTeX</h1>
```

---

**Última actualización:** Enero 2026
