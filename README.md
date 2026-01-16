# 📝 Examen de Evaluación - Curso de LaTeX

Sistema de evaluación en línea para medir conocimientos sobre LaTeX. El sistema muestra preguntas de forma individual, registra las respuestas y calcula la puntuación en sistema vigesimal (0-20).

## 🌟 Características

- ✅ 20 preguntas sobre LaTeX (nivel básico a intermedio)
- 📊 Sistema de puntuación vigesimal (0-20)
- 🎯 Una pregunta a la vez (sin retroceso durante el examen)
- ⏱️ Tiempo global: 20 minutos para todo el examen
- ⚡ Tiempo límite individual por pregunta (30-45 segundos)
- 📋 Pantalla de revisión con resumen de todas las respuestas
- ✏️ Edición de respuestas permitida solo con tiempo restante
- 🔒 Sistema anti-plagio con doble temporizador
- 🎲 Preguntas variadas: opción múltiple, verdadero/falso
- 📈 Resultados instantáneos al finalizar
- 🔍 Revisión detallada de respuestas después del envío
- ☁️ Almacenamiento automático en Google Sheets
- 📱 Diseño responsive (funciona en móviles y tablets)
- 🎨 Interfaz moderna y fácil de usar

## 🚀 Configuración

### Paso 1: Crear Google Sheets y Apps Script

1. **Crear una nueva hoja de cálculo en Google Sheets:**
   - Ve a [Google Sheets](https://sheets.google.com)
   - Crea una nueva hoja de cálculo
   - Nómbrala como "Resultados Examen LaTeX" (o el nombre que prefieras)

2. **Abrir el editor de Google Apps Script:**
   - En la hoja de cálculo, ve a `Extensiones` → `Apps Script`
   - Borra el contenido predeterminado del archivo `Code.gs`

3. **Copiar el código del backend:**
   - Abre el archivo `google-apps-script.gs` de este proyecto
   - Copia todo su contenido
   - Pégalo en el editor de Apps Script
   - Guarda el proyecto (Ctrl + S o Cmd + S)

4. **Implementar como aplicación web:**
   - Haz clic en el botón `Implementar` (arriba a la derecha)
   - Selecciona `Nueva implementación`
   - En "Tipo", selecciona `Aplicación web`
   - Configura:
     - **Descripción:** "API Examen LaTeX"
     - **Ejecutar como:** Tu cuenta
     - **Quién tiene acceso:** Cualquier persona
   - Haz clic en `Implementar`
   - **IMPORTANTE:** Copia la URL de la aplicación web que se genera

5. **Autorizar el script:**
   - Es posible que Google te pida autorizar el script
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado" → "Ir a [nombre del proyecto]"
   - Haz clic en "Permitir"

### Paso 2: Configurar el Frontend

1. **Editar el archivo `script.js`:**
   - Abre el archivo `script.js`
   - Busca la línea 2:
     ```javascript
     GOOGLE_SCRIPT_URL: 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI',
     ```
   - Reemplaza `'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'` con la URL que copiaste en el paso anterior
   - Guarda el archivo

### Paso 3: Publicar en GitHub Pages

1. **Crear un repositorio en GitHub:**
   - Ve a [GitHub](https://github.com) e inicia sesión
   - Haz clic en el botón `+` (arriba a la derecha) → `New repository`
   - Nombra tu repositorio (ej: "examen-latex")
   - Marca la casilla "Public"
   - Haz clic en `Create repository`

2. **Subir los archivos:**
   
   **Opción A - Usando GitHub Web:**
   - En la página de tu nuevo repositorio, haz clic en `uploading an existing file`
   - Arrastra y suelta estos archivos:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Haz clic en `Commit changes`

   **Opción B - Usando Git en terminal:**
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial commit - Examen LaTeX"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/examen-latex.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - Ve a `Settings` (Configuración) de tu repositorio
   - En el menú lateral, haz clic en `Pages`
   - En "Source", selecciona `main` branch
   - Haz clic en `Save`
   - Espera unos minutos y tu sitio estará disponible en:
     `https://TU_USUARIO.github.io/examen-latex/`

## 📋 Estructura de Archivos

```
examen-latex/
│
├── index.html              # Estructura HTML del examen
├── styles.css              # Estilos y diseño responsive
├── script.js               # Lógica del cliente y preguntas
├── google-apps-script.gs   # Backend de Google Apps Script
└── README.md               # Este archivo
```

## 🎓 Personalizar las Preguntas

Para modificar las preguntas del examen:

1. Abre el archivo `script.js`
2. Busca el arreglo `QUESTIONS` (aproximadamente línea 7)
3. Modifica, agrega o elimina preguntas siguiendo este formato:

```javascript
{
    id: 1,
    question: '¿Texto de tu pregunta?',
    type: 'multiple',  // 'multiple' o 'boolean' (verdadero/falso)
    timeLimit: 45,     // Tiempo en segundos (30-60 recomendado)
    options: [
        'Opción A',
        'Opción B',
        'Opción C',
        'Opción D'
    ],
    correct: 0  // Índice de la respuesta correcta (0 = primera opción)
}
```

**Tipos de preguntas:**
- `multiple`: Preguntas de opción múltiple (2-4 opciones)
- `boolean`: Verdadero/Falso (automáticamente usa opciones ['Verdadero', 'Falso'])

**Tiempos recomendados:**
- Preguntas simples (V/F): 30 segundos
- Preguntas básicas: 35-40 segundos
- Preguntas que requieren análisis: 45-60 segundos

## 📊 Estructura de Datos en Google Sheets

El sistema crea automáticamente dos hojas:

### Hoja 1: Resultados_Examen_LaTeX
Columnas:
- Fecha y Hora
- Apellidos
- Nombres
- Email
- Código
- Puntuación (0-20)
- Respuestas Correctas
- Total Preguntas
- Porcentaje (%)
- Duración
- P1, P2, P3... P20 (resultado de cada pregunta)

### Hoja 2: Respuestas_Detalladas
Columnas:
- Fecha
- Apellidos
- Nombres
- Email
- Código
- Pregunta #
- Tipo (multiple/boolean)
- Tiempo (seg)
- Pregunta
- Respuesta del Usuario
- Respuesta Correcta
- ¿Correcta?

## 🎨 Personalizar Colores y Estilos

Para cambiar los colores del sitio, edita las variables CSS en `styles.css` (líneas 8-16):

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --success-color: #27ae60;
    --danger-color: #e74c3c;
    --warning-color: #f39c12;
    /* ... más colores ... */
}
```

## 📈 Ver Estadísticas

Para generar estadísticas automáticas en Google Sheets:

1. Ve a tu Google Apps Script
2. Selecciona la función `createStatistics` en el menú desplegable
3. Haz clic en el botón `Ejecutar`
4. Se creará una nueva hoja llamada "Estadísticas" con:
   - Total de exámenes
   - Puntuación promedio
   - Puntuación más alta y más baja
   - Cantidad de aprobados/desaprobados
   - Porcentaje de aprobación

## 🔧 Solución de Problemas

### El examen no envía los resultados

1. Verifica que la URL de Google Apps Script en `script.js` sea correcta
2. Asegúrate de haber implementado el script como "Aplicación web"
3. Verifica que el acceso sea "Cualquier persona"
4. Revisa la consola del navegador (F12) para ver errores

### Los datos no aparecen en Google Sheets

1. Ve al editor de Apps Script
2. Haz clic en `Ejecuciones` (menú lateral)
3. Revisa si hay errores en las ejecuciones recientes
4. Verifica que hayas autorizado los permisos necesarios

### El sitio no se ve bien en GitHub Pages

1. Asegúrate de que los tres archivos (HTML, CSS, JS) estén en la raíz del repositorio
2. Verifica que los nombres de los archivos sean exactamente: `index.html`, `styles.css`, `script.js`
3. Espera unos minutos después de activar GitHub Pages

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (versiones recientes)
- ✅ Dispositivos móviles (iOS y Android)
- ✅ Tablets

## 🔒 Privacidad y Seguridad

- Los datos se almacenan únicamente en tu Google Sheets
- Solo tú tienes acceso a los resultados (según los permisos de tu hoja)
- No se utilizan cookies ni tracking de terceros
- La conexión con Google Apps Script usa HTTPS

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo, modificarlo y distribuirlo libremente para fines educativos.

## 🤝 Contribuciones

Si deseas mejorar este proyecto:

1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Haz commit de tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la sección "Solución de Problemas"
2. Verifica que hayas seguido todos los pasos de configuración
3. Abre un Issue en GitHub describiendo tu problema

---

**Desarrollado para el Curso de LaTeX** 📚

¡Buena suerte a todos los estudiantes! 🎓
