
  

function run_lavoro() {
  try {

    var firstProfile = getFirstProfile();
           
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/acquisti-logistica');
    if (results!=undefined) {    clear_sheet(0)  // only first time
        outputToSpreadsheet(results,'acquisti-logistica'); // scrive dati del profilo nello sheet3
    clear_sheet(1) // only first time
        outputToSpreadsheet_tot_headers(results); // scrive headers e totali  del profilo nello sheet4
      outputToSpreadsheet_tot(results,'acquisti-logistica');}
     else { printempty('acquisti-logistica'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/amministrazione-contabilita-segreteria');
    if (results!=undefined)  {   outputToSpreadsheet(results,'amministrazione-contabilita-segreteria');  outputToSpreadsheet_tot(results,'amministrazione-contabilita-segreteria'); }
    else { printempty('amministrazione-contabilita-segreteria'); }
    
   
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/animazione-turistica');
    if (results!=undefined)  {   outputToSpreadsheet(results,'animazione-turistica');  outputToSpreadsheet_tot(results,'animazione-turistica'); }
    else { printempty('animazione-turistica'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/architetti-geometri-disegnatori-industriali');
    if (results!=undefined)  {   outputToSpreadsheet(results,'architetti-geometri-disegnatori-industriali');  outputToSpreadsheet_tot(results,'architetti-geometri-disegnatori-industriali'); }
    else { printempty('architetti-geometri-disegnatori-industriali'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/bar-ristorazione');
    if (results!=undefined)  {   outputToSpreadsheet(results,'bar-ristorazione');  outputToSpreadsheet_tot(results,'bar-ristorazione'); }
    else { printempty('bar-ristorazione'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/commessi-cassieri-responsabili-negozio');
    if (results!=undefined)  {   outputToSpreadsheet(results,'commessi-cassieri-responsabili-negozio');  outputToSpreadsheet_tot(results,'commessi-cassieri-responsabili-negozio'); }
    else { printempty('commessi-cassieri-responsabili-negozio'); }

    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/customer-service-call-center-telemarketing');
    if (results!=undefined)  {   outputToSpreadsheet(results,'customer-service-call-center-telemarketing');  outputToSpreadsheet_tot(results,'customer-service-call-center-telemarketing'); }
    else { printempty('customer-service-call-center-telemarketing'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/docenti-formazion-risorsumane');
    if (results!=undefined)  {   outputToSpreadsheet(results,'docenti-formazion-risorsumane');  outputToSpreadsheet_tot(results,'docenti-formazion-risorsumane'); }
    else { printempty('docenti-formazion-risorsumane'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/estetica-fitness');
    if (results!=undefined)  {   outputToSpreadsheet(results,'estetica-fitness');  outputToSpreadsheet_tot(results,'estetica-fitness'); }
    else { printempty('estetica-fitness'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/hostess-modelli-attori');
    if (results!=undefined)  {   outputToSpreadsheet(results,'hostess-modelli-attori');  outputToSpreadsheet_tot(results,'hostess-modelli-attori'); }
    else { printempty('hostess-modelli-attori'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/informatica-telecomunicazioni');
    if (results!=undefined)  {   outputToSpreadsheet(results,'informatica-telecomunicazioni');  outputToSpreadsheet_tot(results,'informatica-telecomunicazioni'); }
    else { printempty('informatica-telecomunicazioni'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/ingegneri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'ingegneri');  outputToSpreadsheet_tot(results,'ingegneri'); }
    else { printempty('ingegneri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/lavori-da-casa-telelavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'lavori-da-casa-telelavoro');  outputToSpreadsheet_tot(results,'lavori-da-casa-telelavoro'); }
    else { printempty('lavori-da-casa-telelavoro'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/management-direzione-quadri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'management-direzione-quadri');  outputToSpreadsheet_tot(results,'management-direzione-quadri'); }
    else { printempty('management-direzione-quadri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/marketing-comunicazione-grafica');
    if (results!=undefined)  {   outputToSpreadsheet(results,'marketing-comunicazione-grafica');  outputToSpreadsheet_tot(results,'marketing-comunicazione-grafica'); }
    else { printempty('marketing-comunicazione-grafica'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/medicina-salute-assistenza');
    if (results!=undefined)  {   outputToSpreadsheet(results,'medicina-salute-assistenza');  outputToSpreadsheet_tot(results,'medicina-salute-assistenza'); }
    else { printempty('medicina-salute-assistenza'); }
  
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/operai-produzione-qualita');
    if (results!=undefined)  {   outputToSpreadsheet(results,'operai-produzione-qualita');  outputToSpreadsheet_tot(results,'operai-produzione-qualita'); }
    else { printempty('operai-produzione-qualita'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/sales-agenti-promoter-commerciali');
    if (results!=undefined)  {   outputToSpreadsheet(results,'sales-agenti-promoter-commerciali');  outputToSpreadsheet_tot(results,'sales-agenti-promoter-commerciali'); }
    else { printempty('sales-agenti-promoter-commerciali'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/trasporti-magazzinieri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'trasporti-magazzinieri');  outputToSpreadsheet_tot(results,'trasporti-magazzinieri'); }
    else { printempty('trasporti-magazzinieri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/altre-offerte-di-lavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'altre-offerte-di-lavoro');  outputToSpreadsheet_tot(results,'altre-offerte-di-lavoro'); }
    else { printempty('altre-offerte-di-lavoro'); }
  
    //offerte-di-lavoro-estero
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/offerte-di-lavoro-estero');
    if (results!=undefined)  {   outputToSpreadsheet(results,'offerte-di-lavoro-estero');  outputToSpreadsheet_tot(results,'offerte-di-lavoro-estero'); }
    else { printempty('offerte-di-lavoro-estero'); }
    
    // offerte lavoro genico
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/offerte-di-lavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'offerte-di-lavoro');  outputToSpreadsheet_tot(results,'offerte-di-lavoro'); }
    else { printempty('offerte-di-lavoro'); }
    
    
   
  
    //overall
    var results = getReportDataForProfile('ga:channelGrouping',firstProfile,'ga:channelGrouping!=(none)');
    if (results!=undefined)  {   outputToSpreadsheet(results,'overall');  outputToSpreadsheet_tot(results,'overall'); }
    else { printempty('overall'); }
    
    
    
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}


///////////////

function run_lavoro_2015() {
  try {

    var firstProfile = getFirstProfile();
           
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/acquisti-logistica');
    if (results!=undefined) {    clear_sheet(0)  // only first time
        outputToSpreadsheet(results,'acquisti-logistica'); // scrive dati del profilo nello sheet3
    clear_sheet(1) // only first time
        outputToSpreadsheet_tot_headers(results); // scrive headers e totali  del profilo nello sheet4
      outputToSpreadsheet_tot(results,'acquisti-logistica');}
     else { printempty('acquisti-logistica'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/amministrazione-contabilita-segreteria');
    if (results!=undefined)  {   outputToSpreadsheet(results,'amministrazione-contabilita-segreteria');  outputToSpreadsheet_tot(results,'amministrazione-contabilita-segreteria'); }
    else { printempty('amministrazione-contabilita-segreteria'); }
    
   
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/animazione-turistica');
    if (results!=undefined)  {   outputToSpreadsheet(results,'animazione-turistica');  outputToSpreadsheet_tot(results,'animazione-turistica'); }
    else { printempty('animazione-turistica'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/architetti-geometri-disegnatori-industriali');
    if (results!=undefined)  {   outputToSpreadsheet(results,'architetti-geometri-disegnatori-industriali');  outputToSpreadsheet_tot(results,'architetti-geometri-disegnatori-industriali'); }
    else { printempty('architetti-geometri-disegnatori-industriali'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/bar-ristorazione');
    if (results!=undefined)  {   outputToSpreadsheet(results,'bar-ristorazione');  outputToSpreadsheet_tot(results,'bar-ristorazione'); }
    else { printempty('bar-ristorazione'); }
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/commessi-cassieri-responsabili-negozio');
    if (results!=undefined)  {   outputToSpreadsheet(results,'commessi-cassieri-responsabili-negozio');  outputToSpreadsheet_tot(results,'commessi-cassieri-responsabili-negozio'); }
    else { printempty('commessi-cassieri-responsabili-negozio'); }

    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/customer-service-call-center-telemarketing');
    if (results!=undefined)  {   outputToSpreadsheet(results,'customer-service-call-center-telemarketing');  outputToSpreadsheet_tot(results,'customer-service-call-center-telemarketing'); }
    else { printempty('customer-service-call-center-telemarketing'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/docenti-formazion-risorsumane');
    if (results!=undefined)  {   outputToSpreadsheet(results,'docenti-formazion-risorsumane');  outputToSpreadsheet_tot(results,'docenti-formazion-risorsumane'); }
    else { printempty('docenti-formazion-risorsumane'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/estetica-fitness');
    if (results!=undefined)  {   outputToSpreadsheet(results,'estetica-fitness');  outputToSpreadsheet_tot(results,'estetica-fitness'); }
    else { printempty('estetica-fitness'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/hostess-modelli-attori');
    if (results!=undefined)  {   outputToSpreadsheet(results,'hostess-modelli-attori');  outputToSpreadsheet_tot(results,'hostess-modelli-attori'); }
    else { printempty('hostess-modelli-attori'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/informatica-telecomunicazioni');
    if (results!=undefined)  {   outputToSpreadsheet(results,'informatica-telecomunicazioni');  outputToSpreadsheet_tot(results,'informatica-telecomunicazioni'); }
    else { printempty('informatica-telecomunicazioni'); }
    
    
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/ingegneri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'ingegneri');  outputToSpreadsheet_tot(results,'ingegneri'); }
    else { printempty('ingegneri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/lavori-da-casa-telelavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'lavori-da-casa-telelavoro');  outputToSpreadsheet_tot(results,'lavori-da-casa-telelavoro'); }
    else { printempty('lavori-da-casa-telelavoro'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/management-direzione-quadri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'management-direzione-quadri');  outputToSpreadsheet_tot(results,'management-direzione-quadri'); }
    else { printempty('management-direzione-quadri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/marketing-comunicazione-grafica');
    if (results!=undefined)  {   outputToSpreadsheet(results,'marketing-comunicazione-grafica');  outputToSpreadsheet_tot(results,'marketing-comunicazione-grafica'); }
    else { printempty('marketing-comunicazione-grafica'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/medicina-salute-assistenza');
    if (results!=undefined)  {   outputToSpreadsheet(results,'medicina-salute-assistenza');  outputToSpreadsheet_tot(results,'medicina-salute-assistenza'); }
    else { printempty('medicina-salute-assistenza'); }
  
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/operai-produzione-qualita');
    if (results!=undefined)  {   outputToSpreadsheet(results,'operai-produzione-qualita');  outputToSpreadsheet_tot(results,'operai-produzione-qualita'); }
    else { printempty('operai-produzione-qualita'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/sales-agenti-promoter-commerciali');
    if (results!=undefined)  {   outputToSpreadsheet(results,'sales-agenti-promoter-commerciali');  outputToSpreadsheet_tot(results,'sales-agenti-promoter-commerciali'); }
    else { printempty('sales-agenti-promoter-commerciali'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/trasporti-magazzinieri');
    if (results!=undefined)  {   outputToSpreadsheet(results,'trasporti-magazzinieri');  outputToSpreadsheet_tot(results,'trasporti-magazzinieri'); }
    else { printempty('trasporti-magazzinieri'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/altre-offerte-di-lavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'altre-offerte-di-lavoro');  outputToSpreadsheet_tot(results,'altre-offerte-di-lavoro'); }
    else { printempty('altre-offerte-di-lavoro'); }
  
    var results = getReportDataForProfile('ga:pagePath',firstProfile,'ga:pagePath=~/offerte-di-lavoro');
    if (results!=undefined)  {   outputToSpreadsheet(results,'offerte-di-lavoro');  outputToSpreadsheet_tot(results,'offerte-di-lavoro'); }
    else { printempty('offerte-di-lavoro'); }
    
    
   
  
    //overall
    var results = getReportDataForProfile('ga:channelGrouping',firstProfile,'ga:channelGrouping!=(none)');
    if (results!=undefined)  {   outputToSpreadsheet(results,'overall');  outputToSpreadsheet_tot(results,'overall'); }
    else { printempty('overall'); }
    
    
    
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}



function do_report_data (tab_source,tab_dest) {  

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[tab_source]; //new
  var data=sheet.getRange(2, 1, 23, 6).getValues();
  //sheet.getRange(2, 1, 1, 1).setValues([data]); 
 Logger.log(data);
  Logger.log(data[2][0]);
  
 var sheet_dest = ss.getSheets()[tab_dest]; //new
 
  //sheet.getRange(rowstart, 3, 1, col).setValues([data]);
sheet_dest.getRange(3, 2, 1, 1).setValue(data[0][0]);
sheet_dest.getRange(4, 2, 1, 1).setValue(data[1][0]);
sheet_dest.getRange(5, 2, 1, 1).setValue(data[2][0]);  
sheet_dest.getRange(6, 2, 1, 1).setValue(data[3][0]);  
sheet_dest.getRange(7, 2, 1, 1).setValue(data[4][0]);  
sheet_dest.getRange(8, 2, 1, 1).setValue(data[5][0]); 
  sheet_dest.getRange(9, 2, 1, 1).setValue(data[6][0]);   
  sheet_dest.getRange(10, 2, 1, 1).setValue(data[7][0]);
  sheet_dest.getRange(11, 2, 1, 1).setValue(data[8][0]); 
  sheet_dest.getRange(12, 2, 1, 1).setValue(data[9][0]); 
  sheet_dest.getRange(13, 2, 1, 1).setValue(data[10][0]); 
  sheet_dest.getRange(14, 2, 1, 1).setValue(data[11][0]); 
  sheet_dest.getRange(15, 2, 1, 1).setValue(data[12][0]); 
  sheet_dest.getRange(16, 2, 1, 1).setValue(data[13][0]); 
  sheet_dest.getRange(17, 2, 1, 1).setValue(data[14][0]); 
  sheet_dest.getRange(18, 2, 1, 1).setValue(data[15][0]); 
  sheet_dest.getRange(19, 2, 1, 1).setValue(data[16][0]); 
  sheet_dest.getRange(20, 2, 1, 1).setValue(data[17][0]); 
  sheet_dest.getRange(21, 2, 1, 1).setValue(data[18][0]); 
  sheet_dest.getRange(22, 2, 1, 1).setValue(data[19][0]); 
  sheet_dest.getRange(23, 2, 1, 1).setValue(data[20][0]); 
  sheet_dest.getRange(24, 2, 1, 1).setValue(data[21][0]); 
  sheet_dest.getRange(25, 2, 1, 1).setValue(data[22][0]); 

 for (var row = 3; row<26; ++row) 
 {
  sheet_dest.getRange(row, 3, 1, 1).setValue(data[row-3][1]); //sessions
   sheet_dest.getRange(row, 4, 1, 1).setValue(data[row-3][2]); //pagesession
   sheet_dest.getRange(row, 5, 1, 1).setValue(data[row-3][5]); //bounce
   sheet_dest.getRange(row, 6, 1, 1).setValue(data[row-3][4]); //% new
  }
  
}


function do_report_data_2015 (tab_source,tab_dest) {  

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[tab_source]; //new
  var data=sheet.getRange(2, 1, 23, 6).getValues();
  //sheet.getRange(2, 1, 1, 1).setValues([data]); 
 Logger.log(data);
  Logger.log(data[2][0]);
  
 var sheet_dest = ss.getSheets()[tab_dest]; //new
 
  //sheet.getRange(rowstart, 3, 1, col).setValues([data]);
sheet_dest.getRange(3, 2, 1, 1).setValue(data[0][0]);
sheet_dest.getRange(4, 2, 1, 1).setValue(data[1][0]);
sheet_dest.getRange(5, 2, 1, 1).setValue(data[2][0]);  
sheet_dest.getRange(6, 2, 1, 1).setValue(data[3][0]);  
sheet_dest.getRange(7, 2, 1, 1).setValue(data[4][0]);  
sheet_dest.getRange(8, 2, 1, 1).setValue(data[5][0]); 
  sheet_dest.getRange(9, 2, 1, 1).setValue(data[6][0]);   
  sheet_dest.getRange(10, 2, 1, 1).setValue(data[7][0]);
  sheet_dest.getRange(11, 2, 1, 1).setValue(data[8][0]); 
  sheet_dest.getRange(12, 2, 1, 1).setValue(data[9][0]); 
  sheet_dest.getRange(13, 2, 1, 1).setValue(data[10][0]); 
  sheet_dest.getRange(14, 2, 1, 1).setValue(data[11][0]); 
  sheet_dest.getRange(15, 2, 1, 1).setValue(data[12][0]); 
  sheet_dest.getRange(16, 2, 1, 1).setValue(data[13][0]); 
  sheet_dest.getRange(17, 2, 1, 1).setValue(data[14][0]); 
  sheet_dest.getRange(18, 2, 1, 1).setValue(data[15][0]); 
  sheet_dest.getRange(19, 2, 1, 1).setValue(data[16][0]); 
  sheet_dest.getRange(20, 2, 1, 1).setValue(data[17][0]); 
  sheet_dest.getRange(21, 2, 1, 1).setValue(data[18][0]); 
  sheet_dest.getRange(22, 2, 1, 1).setValue(data[19][0]); 
  sheet_dest.getRange(23, 2, 1, 1).setValue(data[20][0]); 
  sheet_dest.getRange(24, 2, 1, 1).setValue(data[21][0]); 
  

 for (var row = 3; row<25; ++row) 
 {
  sheet_dest.getRange(row, 3, 1, 1).setValue(data[row-3][1]); //sessions
   sheet_dest.getRange(row, 4, 1, 1).setValue(data[row-3][2]); //pagesession
   sheet_dest.getRange(row, 5, 1, 1).setValue(data[row-3][5]); //bounce
   sheet_dest.getRange(row, 6, 1, 1).setValue(data[row-3][4]); //% new
  }
  
}




function test()
{
do_report_data(1,5);
}



function printempty(testo) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo);
}

function printempty_events(testo) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo);
}

function getFirstProfile() {
  var accounts = Analytics.Management.Accounts.list();
  if (accounts.getItems()) {
    var firstAccountId = accounts.getItems()[0].getId();

    var webProperties = Analytics.Management.Webproperties.list(firstAccountId);
    if (webProperties.getItems()) {

      var firstWebPropertyId = webProperties.getItems()[0].getId();
      var profiles = Analytics.Management.Profiles.list(firstAccountId, firstWebPropertyId);

      if (profiles.getItems()) {
        var firstProfile = profiles.getItems()[0];
        return firstProfile;

      } else {
        throw new Error('No views (profiles) found.');
      }
    } else {
      throw new Error('No webproperties found.');
    }
  } else {
     throw new Error('No accounts found.');
  }
}

function clear_sheet(sheet_num) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[sheet_num]; //data
  // SpreadsheetApp.getActiveSheet().deleteRows(1, 10000);
  
 // var rowsToKeep = 0; //CHANGE TO YOUR DESIRED NUMBER OF ROWS TO KEEP.
  //var rows = sheet.getLastRow();
  //var numToDelete = rows - rowsToKeep  -1;
  //sheet.deleteRows(2, numToDelete);
  
  var doc = SpreadsheetApp.getActiveSpreadsheet();
var sheet = doc.getSheets()[sheet_num]; //data
  sheet.getDataRange().clear()
  
   //sheet.getRange('a1:G10000').clearContent();
   //sheet.clear();
};






function getReportDataForProfile(tipo,firstProfile,filters) {

  var profileId = "51871756";  // MOTORI profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
  //var startDate = getLastNdays(30);   // last 30 days.
  //var endDate = getLastNdays(1);      // 0=Today.

  
 var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
  
  //var startDate = START_DATE;  // 1 weeks (a fortnight) ago.
  //var endDate = END_DATE;      // Today.

   //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
 print_info(startDate,endDate);
  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-ga:sessions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'ga:sessions,ga:pageviewsPerSession,ga:avgSessionDuration,ga:percentNewSessions,ga:bounceRate', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}

function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}
//===============================================


//===============================================
function outputToSpreadsheet(results,testo_filtro) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; //new
  
 
  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, headerNames.length)
      .setValues([headerNames]);

  sheet.getRange(row,1,1,1).setValue(testo_filtro); //////////////----
  sheet.getRange(row,1,1,1).setFontSize(18)
  
  // Print the rows of data.
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, results.getRows().length, headerNames.length)
      .setValues(results.getRows());
  
  

 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  sheet.getRange(row, 2, 1, col).setValues([data]);
  
  
  
//=======================================================================================
  
}  // 

function outputToSpreadsheet_tot_headers(results) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  
  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  
  
  
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, headerNames.length)
      .setValues([headerNames]);

 

//Print the total Value
// var data = [];
// var totals = results.totalsForAllResults;
// for (var i = 1, header; header = results.columnHeaders[i]; i++) {
//  data.push(results.totalsForAllResults[header.name]);
//}
// var row = sheet.getLastRow()+1;
// var col = sheet.getLastColumn()-1;
//  sheet.getRange(row, 2, 1, col).setValues([data]);
//===============================================

    
}  
  
  
//=======================================================================================

function outputToSpreadsheet_tot(results,testo) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  sheet.getRange(row, 2, 1, col).setValues([data]);
sheet.getRange(row, 1, 1, 1).setValue(testo);
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  
  



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function print_info(startd,endd) {
var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[4]; //new
  var row = sheet.getLastRow();

  sheet.getRange(1, 1, 1, 1).setValue('startdate');
  sheet.getRange(1, 2, 1, 1).setValue(startd);
  sheet.getRange(2, 1, 1, 1).setValue('enddate');
  sheet.getRange(2, 2, 1, 1).setValue(endd);
}




function cloneGoogleSheet(mese) {
  
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheetByName('JAN 2016').copyTo(ss);
   ss.setActiveSheet(sheet);
  sheet.getRange(1, 1,1,1).setValue(mese);
  SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(mese);
  

}

function duplicatesh()
{ 
  
  cloneGoogleSheet("FEB 2016");
  cloneGoogleSheet("MAR 2016");
  cloneGoogleSheet("APR 2016");
  cloneGoogleSheet("MAY 2016");
  cloneGoogleSheet("JUN 2016");
  cloneGoogleSheet("JUL 2016");
  cloneGoogleSheet("AUG 2016");
  cloneGoogleSheet("SEP 2016");
  cloneGoogleSheet("OCT 2016");
  cloneGoogleSheet("NOV 2016");
  cloneGoogleSheet("DEC 2016");
}
