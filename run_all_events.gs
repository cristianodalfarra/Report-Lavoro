///////////////////////////////////////////////
// esecuzione degli script degli eventi.
///////////////////////////////////////////////


function prop (start,end) {
var scriptProperties = PropertiesService.getScriptProperties();
var newProperties = {start_date:start,end_date:end};
scriptProperties.setProperties(newProperties);
var test=1;
}



function run_report_1_events() 
{  
//  if (getLastNdays(0)=="2015-06-24")   {prop ("2014-01-01","2014-01-31");run_motori_events();do_report_events(3,5) } //jan2014
//  if (getLastNdays(0)=="2015-06-24")   {prop ("2014-02-01","2014-02-28");run_motori_events();do_report_events(3,6) } //feb2014
//  if (getLastNdays(0)=="2015-06-24")   {prop ("2014-03-01","2014-03-31");run_motori_events();do_report_events(3,7) } //mar2014
  
 // if (getLastNdays(0)=="2016-02-04")   { prop ("2015-01-01","2015-01-31");run_lavoro_events_2015();do_report_events_2015(3,5);} //
 // if (getLastNdays(0)=="2016-03-03")   { prop ("2015-02-01","2015-02-28");run_lavoro_events_2015();do_report_events_2015(3,6);} //
//  if (getLastNdays(0)=="2016-03-03")   { prop ("2015-03-01","2015-03-31");run_lavoro_events_2015();do_report_events_2015(3,7);} //
  if (getLastNdays(0)=="2016-03-03")   { prop ("2015-04-01","2015-04-30");run_lavoro_events_2015();do_report_events_2015(3,8);} //
  
  if (getLastNdays(0)=="2015-06-30")   {prop ("2015-05-01","2015-05-31");run_lavoro_events();do_report_events(3,9) } //may2015  //first tab=0
  if (getLastNdays(0)=="2015-07-03")   {prop ("2015-06-01","2015-06-30");run_lavoro_events();do_report_events(3,10) } //jun2015
  
  if (getLastNdays(0)=="2015-08-24")   {prop ("2015-07-01","2015-07-31");run_lavoro_events();do_report_events(3,11) } //jul2015
if (getLastNdays(0)=="2015-09-02")   {prop ("2015-08-01","2015-08-31");run_lavoro_events();do_report_events(3,12) } //aug2015
if (getLastNdays(0)=="2015-10-02")   {prop ("2015-09-01","2015-09-30");run_lavoro_events();do_report_events(3,13) } //sep2015
if (getLastNdays(0)=="2015-11-02")   {prop ("2015-10-01","2015-10-31");run_lavoro_events();do_report_events(3,14) } //oct2015
if (getLastNdays(0)=="2015-12-02")   {prop ("2015-11-01","2015-11-30");run_lavoro_events();do_report_events(3,15) } //nov2015
if (getLastNdays(0)=="2016-01-02")   {prop ("2015-12-01","2015-12-31");run_lavoro_events();do_report_events(3,16) } //dec2015
  
  
  if (getLastNdays(0)=="2015-02-02")   { prop ("2016-01-01","2016-01-31");run_lavoro_events();do_report_events(3,17);} //
    
if (getLastNdays(0)=="2016-03-02")   { prop ("2016-02-01","2016-02-29");run_lavoro_events();do_report_events(3,18);} //
if (getLastNdays(0)=="2016-04-02")   { prop ("2016-03-01","2016-03-31");run_lavoro_events();do_report_events(3,19);} //
if (getLastNdays(0)=="2016-05-02")   { prop ("2016-04-01","2016-04-30");run_lavoro_events();do_report_events(3,20);} //
if (getLastNdays(0)=="2016-06-02")   { prop ("2016-05-01","2016-05-31");run_lavoro_events();do_report_events(3,21);} //
if (getLastNdays(0)=="2016-07-02")   { prop ("2016-06-01","2016-06-30");run_lavoro_events();do_report_events(3,22);} //  
if (getLastNdays(0)=="2016-08-02")   { prop ("2016-07-01","2016-07-31");run_lavoro_events();do_report_events(3,23);} //    
 if (getLastNdays(0)=="2016-09-02")   { prop ("2016-08-01","2016-08-31");run_lavoro_events();do_report_events(3,24);} //     
  if (getLastNdays(0)=="2016-10-02")   { prop ("2016-09-01","2016-09-30");run_lavoro_events();do_report_events(3,25);} //     
  if (getLastNdays(0)=="2016-11-07")   { prop ("2016-10-01","2016-10-31");run_lavoro_events();do_report_events(3,26);} //     
  if (getLastNdays(0)=="2016-12-02")   { prop ("2016-11-01","2016-11-30");run_lavoro_events();do_report_events(3,27);} //
  
  if (getLastNdays(0)=="2017-01-11")   {prop ("2016-12-01","2016-12-31");run_lavoro_events();do_report_events(3,28);} //    
 
if (getLastNdays(0)=="2017-02-06")   { prop ("2017-01-01","2017-01-31");run_lavoro_events();do_report_events(3,29);} //feb2017
if (getLastNdays(0)=="2017-05-02")   {  prop ("2017-02-01","2017-02-28");run_lavoro_events();do_report_events(3,30);} //feb2017
if (getLastNdays(0)=="2017-05-22")   {  prop ("2017-03-01","2017-03-31");run_lavoro_events();do_report_events(3,31);} //
if (getLastNdays(0)=="2017-05-23")   {  prop ("2017-04-01","2017-04-30");run_lavoro_events();do_report_events(3,32);} //
if (getLastNdays(0)=="2017-06-02")   {  prop ("2017-05-01","2017-05-31");run_lavoro_events();do_report_events(3,33);} //
if (getLastNdays(0)=="2017-07-02")   { prop ("2017-06-01","2017-06-30");run_lavoro_events();do_report_events(3,34);} //  
if (getLastNdays(0)=="2017-08-02")   {  prop ("2017-07-01","2017-07-31");run_lavoro_events();do_report_events(3,35);} //    
 if (getLastNdays(0)=="2017-09-02")   {  prop ("2017-08-01","2017-08-31");run_lavoro_events();do_report_events(3,36);} //     
  if (getLastNdays(0)=="2017-10-02")   {  prop ("2017-09-01","2017-09-30");run_lavoro_events();do_report_events(3,37);} //     
  if (getLastNdays(0)=="2017-11-07")   {  prop ("2017-10-01","2017-10-31");run_lavoro_events();do_report_events(3,38);} //     
  if (getLastNdays(0)=="2017-12-02")   {  prop ("2017-11-01","2017-11-30");run_lavoro_events();do_report_events(3,39);} //
}


