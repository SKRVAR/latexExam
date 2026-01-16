// Google Apps Script - Backend para el Examen de LaTeX
// Este archivo debe copiarse en Google Apps Script (script.google.com)

// Nombre de la hoja de cálculo donde se guardarán los resultados
const SHEET_NAME = 'Resultados_Examen_LaTeX';

/**
 * Función doPost - Maneja las peticiones POST desde el formulario web
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Guardar en Google Sheets
    saveToSheet(data);
    
    // Enviar email de confirmación (opcional)
    // sendConfirmationEmail(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success', 
        message: 'Resultados guardados correctamente' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error en doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función doGet - Permite realizar pruebas GET
 */
function doGet(e) {
  return ContentService
    .createTextOutput('API del Examen de LaTeX funcionando correctamente')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Guardar datos en Google Sheets
 */
function saveToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Si la hoja no existe, crearla
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    createHeader(sheet);
  }
  
  // Preparar fila de datos principales
  const row = [
    new Date(data.timestamp),
    data.lastname,
    data.firstname,
    data.email,
    data.code,
    parseFloat(data.score),
    parseInt(data.correctAnswers),
    parseInt(data.totalQuestions),
    parseFloat(data.percentage),
    formatDuration(parseInt(data.duration))
  ];
  
  // Agregar respuestas individuales
  data.answers.forEach((answer, index) => {
    row.push(answer.isCorrect ? 'Correcta' : 'Incorrecta');
  });
  
  // Añadir fila
  sheet.appendRow(row);
  
  // Guardar respuestas detalladas en otra hoja
  saveDetailedAnswers(ss, data);
  
  // Aplicar formato
  formatSheet(sheet);
}

/**
 * Crear encabezado de la hoja principal
 */
function createHeader(sheet) {
  const headers = [
    'Fecha y Hora',
    'Apellidos',
    'Nombres',
    'Email',
    'Código',
    'Puntuación (0-20)',
    'Respuestas Correctas',
    'Total Preguntas',
    'Porcentaje (%)',
    'Duración'
  ];
  
  // Agregar columnas para cada pregunta
  for (let i = 1; i <= 20; i++) {
    headers.push(`P${i}`);
  }
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Formato del encabezado
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Congelar primera fila
  sheet.setFrozenRows(1);
}

/**
 * Guardar respuestas detalladas en hoja separada
 */
function saveDetailedAnswers(ss, data) {
  const detailSheetName = 'Respuestas_Detalladas';
  let detailSheet = ss.getSheetByName(detailSheetName);
  
  if (!detailSheet) {
    detailSheet = ss.insertSheet(detailSheetName);
    const detailHeaders = [
      'Fecha',
      'Apellidos',
      'Nombres',
      'Email',
      'Código',
      'Pregunta #',
      'Tipo',
      'Tiempo (seg)',
      'Pregunta',
      'Respuesta del Usuario',
      'Respuesta Correcta',
      '¿Correcta?'
    ];
    detailSheet.getRange(1, 1, 1, detailHeaders.length).setValues([detailHeaders]);
    
    // Formato
    const headerRange = detailSheet.getRange(1, 1, 1, detailHeaders.length);
    headerRange.setBackground('#34a853');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    detailSheet.setFrozenRows(1);
  }
  
  // Agregar cada respuesta
  data.answers.forEach((answer, index) => {
    const detailRow = [
      new Date(data.timestamp),
      data.lastname,
      data.firstname,
      data.email,
      data.code,
      answer.questionId,
      answer.questionType || 'multiple',
      answer.timeLimit || 45,
      answer.question,
      answer.userAnswer,
      answer.correctAnswer,
      answer.isCorrect ? 'Sí' : 'No'
    ];
    detailSheet.appendRow(detailRow);
  });
  
  // Ajustar columnas
  detailSheet.autoResizeColumns(1, 12);
}

/**
 * Aplicar formato a la hoja
 */
function formatSheet(sheet) {
  const lastRow = sheet.getLastRow();
  
  if (lastRow > 1) {
    // Formato de columnas específicas
    const scoreRange = sheet.getRange(2, 6, lastRow - 1, 1);
    scoreRange.setNumberFormat('0.00');
    
    const percentRange = sheet.getRange(2, 9, lastRow - 1, 1);
    percentRange.setNumberFormat('0.00"%"');
    
    // Formato condicional para puntuaciones
    applyConditionalFormatting(sheet, lastRow);
  }
  
  // Ajustar ancho de columnas
  sheet.autoResizeColumns(1, 10);
}

/**
 * Aplicar formato condicional a las puntuaciones
 */
function applyConditionalFormatting(sheet, lastRow) {
  const scoreRange = sheet.getRange(2, 6, lastRow - 1, 1);
  
  // Regla 1: Puntuación >= 18 (Excelente) - Verde
  const rule1 = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(18)
    .setBackground('#d9ead3')
    .setRanges([scoreRange])
    .build();
  
  // Regla 2: Puntuación >= 14 (Bueno) - Verde claro
  const rule2 = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(14, 17.99)
    .setBackground('#b6d7a8')
    .setRanges([scoreRange])
    .build();
  
  // Regla 3: Puntuación >= 11 (Aprobado) - Amarillo
  const rule3 = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(11, 13.99)
    .setBackground('#fff2cc')
    .setRanges([scoreRange])
    .build();
  
  // Regla 4: Puntuación < 11 (Desaprobado) - Rojo
  const rule4 = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(11)
    .setBackground('#f4cccc')
    .setRanges([scoreRange])
    .build();
  
  const rules = sheet.getConditionalFormatRules();
  rules.push(rule1, rule2, rule3, rule4);
  sheet.setConditionalFormatRules(rules);
}

/**
 * Formatear duración de segundos a mm:ss
 */
function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Enviar email de confirmación (opcional)
 */
function sendConfirmationEmail(data) {
  const subject = 'Confirmación - Examen de LaTeX completado';
  const body = `
Hola ${data.firstname} ${data.lastname},

Hemos recibido tu examen de LaTeX. Aquí están tus resultados:

📊 Puntuación: ${data.score}/20
✓ Respuestas correctas: ${data.correctAnswers}/${data.totalQuestions}
📈 Porcentaje: ${data.percentage}%
🎓 Código de estudiante: ${data.code}

Gracias por participar.

Saludos cordiales.
  `;
  
  try {
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: body
    });
  } catch (error) {
    Logger.log('Error al enviar email: ' + error.toString());
  }
}

/**
 * Crear estadísticas generales (función adicional)
 */
function createStatistics() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  let statsSheet = ss.getSheetByName('Estadísticas');
  
  if (!statsSheet) {
    statsSheet = ss.insertSheet('Estadísticas');
  } else {
    statsSheet.clear();
  }
  
  const lastRow = sheet.getLastRow();
  
  if (lastRow < 2) {
    statsSheet.getRange('A1').setValue('No hay datos suficientes para generar estadísticas');
    return;
  }
  
  // Encabezados
  statsSheet.getRange('A1').setValue('ESTADÍSTICAS DEL EXAMEN');
  statsSheet.getRange('A1').setFontSize(14).setFontWeight('bold');
  
  // Calcular estadísticas
  const scoresRange = sheet.getRange(2, 5, lastRow - 1, 1);
  
  statsSheet.getRange('A3').setValue('Total de exámenes:');
  statsSheet.getRange('B3').setValue(lastRow - 1);
  
  statsSheet.getRange('A4').setValue('Puntuación promedio:');
  statsSheet.getRange('B4').setFormula(`=AVERAGE('${SHEET_NAME}'!F2:F${lastRow})`);
  statsSheet.getRange('B4').setNumberFormat('0.00');
  
  statsSheet.getRange('A5').setValue('Puntuación más alta:');
  statsSheet.getRange('B5').setFormula(`=MAX('${SHEET_NAME}'!F2:F${lastRow})`);
  statsSheet.getRange('B5').setNumberFormat('0.00');
  
  statsSheet.getRange('A6').setValue('Puntuación más baja:');
  statsSheet.getRange('B6').setFormula(`=MIN('${SHEET_NAME}'!F2:F${lastRow})`);
  statsSheet.getRange('B6').setNumberFormat('0.00');
  
  statsSheet.getRange('A7').setValue('Aprobados (≥11):');
  statsSheet.getRange('B7').setFormula(`=COUNTIF('${SHEET_NAME}'!F2:F${lastRow},">=11")`);
  
  statsSheet.getRange('A8').setValue('Desaprobados (<11):');
  statsSheet.getRange('B8').setFormula(`=COUNTIF('${SHEET_NAME}'!F2:F${lastRow},"<11")`);
  
  statsSheet.getRange('A9').setValue('Porcentaje de aprobación:');
  statsSheet.getRange('B9').setFormula(`=B7/(B7+B8)*100`);
  statsSheet.getRange('B9').setNumberFormat('0.00"%"');
  
  // Formato
  statsSheet.getRange('A3:A9').setFontWeight('bold');
  statsSheet.autoResizeColumns(1, 2);
}

/**
 * Función para probar la conexión
 */
function testConnection() {
  Logger.log('Conexión exitosa con Google Apps Script');
  return 'OK';
}
