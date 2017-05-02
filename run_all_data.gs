///////////////////////////////////////////////
// esecuzione degli script delle metriche base.
///////////////////////////////////////////////

function prop (start,end) {
var scriptProperties = PropertiesService.getScriptProperties();
var newProperties = {start_date:start,end_date:end};
scriptProperties.setProperties(newProperties);
var test=1;
}




//var START_DATE = "2015-06-01"   ///--------------------vale per tutti gli script
//var END_DATE = "2015-06-22"     ///--------------------vale per tutti gli script  





function run_report_1_data() 
{  
 // if (getLastNdays(0)=="2015-06-24")   {clear_sheet(0);  prop ("2014-01-01","2014-01-31");run_motori();do_report_data(1,5);} //jan2014 
 // if (getLastNdays(0)=="2015-06-24")   {clear_sheet(0);  prop ("2014-02-01","2014-02-28");run_motori();do_report_data(1,6);} //feb2014
 // if (getLastNdays(0)=="2015-06-24")   {clear_sheet(0);  prop ("2014-03-01","2014-03-31");run_motori();do_report_data(1,7);} //feb2014
  
  
//  if (getLastNdays(0)=="2016-02-04")   {clear_sheet(0);  prop ("2015-01-01","2015-01-31");run_lavoro_2015();do_report_data_2015(1,5);} //
 if(getLastNdays(0)=="2016-03-03")   {clear_sheet(0);  prop ("2015-02-01","2015-02-28");run_lavoro_2015();do_report_data_2015(1,6);} //
 // if (getLastNdays(0)=="2016-02-04")   {clear_sheet(0);  prop ("2015-03-01","2015-03-31");run_lavoro_2015();do_report_data_2015(1,7);} //
 // if (getLastNdays(0)=="2016-02-04")   {clear_sheet(0);  prop ("2015-04-01","2015-04-30");run_lavoro_2015();do_report_data_2015(1,8);} //
  
  
  if (getLastNdays(0)=="2015-06-29")   {clear_sheet(0);  prop ("2015-05-01","2015-05-31");run_lavoro();do_report_data(1,9);} //may2015
  if (getLastNdays(0)=="2015-07-03")   {clear_sheet(0);  prop ("2015-06-01","2015-06-30");run_lavoro();do_report_data(1,10);} //jun2015
  
  if (getLastNdays(0)=="2015-08-02")   {clear_sheet(0);  prop ("2015-07-01","2015-07-31");run_lavoro();do_report_data(1,11);} //jul2015
if (getLastNdays(0)=="2015-09-02")   {clear_sheet(0);  prop ("2015-08-01","2015-08-31");run_lavoro();do_report_data(1,12);} //aug2015
if (getLastNdays(0)=="2015-10-02")   {clear_sheet(0);  prop ("2015-09-01","2015-09-30");run_lavoro();do_report_data(1,13);} //sept2015
if (getLastNdays(0)=="2015-11-02")   {clear_sheet(0);  prop ("2015-10-01","2015-10-31");run_lavoro();do_report_data(1,14);} //oct2015
if (getLastNdays(0)=="2015-12-02")   {clear_sheet(0);  prop ("2015-11-01","2015-11-30");run_lavoro();do_report_data(1,15);} //nov2015
if (getLastNdays(0)=="2016-01-02")   {clear_sheet(0);  prop ("2015-12-01","2015-12-31");run_lavoro();do_report_data(1,16);} //dec2015

if (getLastNdays(0)=="2015-02-02")   {clear_sheet(0);  prop ("2016-01-01","2016-01-31");run_lavoro();do_report_data(1,17);} //jan2016
  if (getLastNdays(0)=="2016-02-03")   {clear_sheet(0);  prop ("2016-02-01","2016-02-29");run_lavoro();do_report_data(1,18);} //feb2016
  
  
  
  
if (getLastNdays(0)=="2016-03-02")   {clear_sheet(0);  prop ("2016-02-01","2016-02-29");run_lavoro();do_report_data(1,18);} //feb2016
if (getLastNdays(0)=="2016-04-02")   {clear_sheet(0);  prop ("2016-03-01","2016-03-31");run_lavoro();do_report_data(1,19);} //
if (getLastNdays(0)=="2016-05-02")   {clear_sheet(0);  prop ("2016-04-01","2016-04-30");run_lavoro();do_report_data(1,20);} //
if (getLastNdays(0)=="2016-06-02")   {clear_sheet(0);  prop ("2016-05-01","2016-05-31");run_lavoro();do_report_data(1,21);} //
if (getLastNdays(0)=="2016-07-02")   {clear_sheet(0);  prop ("2016-06-01","2016-06-30");run_lavoro();do_report_data(1,22);} //  
if (getLastNdays(0)=="2016-08-02")   {clear_sheet(0);  prop ("2016-07-01","2016-07-31");run_lavoro();do_report_data(1,23);} //    
 if (getLastNdays(0)=="2016-09-02")   {clear_sheet(0);  prop ("2016-08-01","2016-08-31");run_lavoro();do_report_data(1,24);} //     
  if (getLastNdays(0)=="2016-10-02")   {clear_sheet(0);  prop ("2016-09-01","2016-09-30");run_lavoro();do_report_data(1,25);} //     
  if (getLastNdays(0)=="2016-11-07")   {clear_sheet(0);  prop ("2016-10-01","2016-10-31");run_lavoro();do_report_data(1,26);} //     
  if (getLastNdays(0)=="2016-12-02")   {clear_sheet(0);  prop ("2016-11-01","2016-11-30");run_lavoro();do_report_data(1,27);} //    
  
  if (getLastNdays(0)=="2017-01-11")   {clear_sheet(0);  prop ("2016-12-01","2016-12-31");run_lavoro();do_report_data(1,28);} //    
  
  
  if (getLastNdays(0)=="2017-02-06")   {clear_sheet(0);  prop ("2017-01-01","2017-01-31");run_lavoro();do_report_data(1,29);} //feb2017
if (getLastNdays(0)=="2017-05-02")   {clear_sheet(0);  prop ("2017-02-01","2017-02-28");run_lavoro();do_report_data(1,30);} //feb2017
if (getLastNdays(0)=="2017-05-22")   {clear_sheet(0);  prop ("2017-03-01","2017-03-31");run_lavoro();do_report_data(1,31);} //
if (getLastNdays(0)=="2017-05-22")   {clear_sheet(0);  prop ("2017-04-01","2017-04-30");run_lavoro();do_report_data(1,32);} //
if (getLastNdays(0)=="2017-06-02")   {clear_sheet(0);  prop ("2017-05-01","2017-05-31");run_lavoro();do_report_data(1,33);} //
if (getLastNdays(0)=="2017-07-02")   {clear_sheet(0);  prop ("2017-06-01","2017-06-30");run_lavoro();do_report_data(1,34);} //  
if (getLastNdays(0)=="2017-08-02")   {clear_sheet(0);  prop ("2017-07-01","2017-07-31");run_lavoro();do_report_data(1,35);} //    
 if (getLastNdays(0)=="2017-09-02")   {clear_sheet(0);  prop ("2017-08-01","2017-08-31");run_lavoro();do_report_data(1,36);} //     
  if (getLastNdays(0)=="2017-10-02")   {clear_sheet(0);  prop ("2017-09-01","2017-09-30");run_lavoro();do_report_data(1,37);} //     
  if (getLastNdays(0)=="2017-11-07")   {clear_sheet(0);  prop ("2017-10-01","2017-10-31");run_lavoro();do_report_data(1,38);} //     
  if (getLastNdays(0)=="2017-12-02")   {clear_sheet(0);  prop ("2017-11-01","2017-11-30");run_lavoro();do_report_data(1,39);} //
   
  
}  