


function run_lavoro_events() {
  try {

    var firstProfile = getFirstProfile_events();
  
    
    clear_sheet(2);
    clear_sheet(3);
    
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'acquisti');}
    else { printempty_events('risposta', 'acquisti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'acquisti');}
    else { printempty_events('risposta_cliente', 'acquisti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'acquisti');}
    else { printempty_events('telefono', 'acquisti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'acquisti');}
    else { printempty_events('telefono_cliente', 'acquisti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'acquisti');}
    else { printempty_events('form esterno', 'acquisti'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'amministrazione');}
    else { printempty_events('risposta', 'amministrazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'amministrazione');}
    else { printempty_events('risposta_cliente', 'amministrazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'amministrazione');}
    else { printempty_events('telefono', 'amministrazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'amministrazione');}
    else { printempty_events('telefono_cliente', 'amministrazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'amministrazione');}
    else { printempty_events('form esterno', 'amministrazione'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'animazione');}
    else { printempty_events('risposta', 'animazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'animazione');}
    else { printempty_events('risposta_cliente', 'animazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'animazione');}
    else { printempty_events('telefono', 'animazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'animazione');}
    else { printempty_events('telefono_cliente', 'animazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'animazione');}
    else { printempty_events('form esterno', 'animazione'); }
    
     //
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'architetti');}
    else { printempty_events('risposta', 'architetti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'architetti');}
    else { printempty_events('risposta_cliente', 'architetti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'architetti');}
    else { printempty_events('telefono', 'architetti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'architetti');}
    else { printempty_events('telefono_cliente', 'architetti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'architetti');}
    else { printempty_events('form esterno', 'architetti'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'ristorazione');}
    else { printempty_events('risposta', 'ristorazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'ristorazione');}
    else { printempty_events('risposta_cliente', 'ristorazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'ristorazione');}
    else { printempty_events('telefono', 'ristorazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'ristorazione');}
    else { printempty_events('telefono_cliente', 'ristorazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'ristorazione');}
    else { printempty_events('form esterno', 'ristorazione'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'commessi');}
    else { printempty_events('risposta', 'commessi'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'commessi');}
    else { printempty_events('risposta_cliente', 'commessi'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'commessi');}
    else { printempty_events('telefono', 'commessi'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'commessi');}
    else { printempty_events('telefono_cliente', 'commessi'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'commessi');}
    else { printempty_events('form esterno', 'commessi'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'customer');}
    else { printempty_events('risposta', 'customer'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'customer');}
    else { printempty_events('risposta_cliente', 'customer'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'customer');}
    else { printempty_events('telefono', 'customer'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'customer');}
    else { printempty_events('telefono_cliente', 'customer'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'customer');}
    else { printempty_events('form esterno', 'customer'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'docenti');}
    else { printempty_events('risposta', 'docenti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'docenti');}
    else { printempty_events('risposta_cliente', 'docenti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'docenti');}
    else { printempty_events('telefono', 'docenti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'docenti');}
    else { printempty_events('telefono_cliente', 'docenti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'docenti');}
    else { printempty_events('form esterno', 'docenti'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'estetica');}
    else { printempty_events('risposta', 'estetica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'estetica');}
    else { printempty_events('risposta_cliente', 'estetica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'estetica');}
    else { printempty_events('telefono', 'estetica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'estetica');}
    else { printempty_events('telefono_cliente', 'estetica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'estetica');}
    else { printempty_events('form esterno', 'estetica'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'hostess');}
    else { printempty_events('risposta', 'hostess'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'hostess');}
    else { printempty_events('risposta_cliente', 'hostess'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'hostess');}
    else { printempty_events('telefono', 'hostess'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'hostess');}
    else { printempty_events('telefono_cliente', 'hostess'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'hostess');}
    else { printempty_events('form esterno', 'hostess'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'informatica');}
    else { printempty_events('risposta', 'informatica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'informatica');}
    else { printempty_events('risposta_cliente', 'informatica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'informatica');}
    else { printempty_events('telefono', 'informatica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'informatica');}
    else { printempty_events('telefono_cliente', 'informatica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'informatica');}
    else { printempty_events('form esterno', 'informatica'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'ingegneri');}
    else { printempty_events('risposta', 'ingegneri'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'ingegneri');}
    else { printempty_events('risposta_cliente', 'ingegneri'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'ingegneri');}
    else { printempty_events('telefono', 'ingegneri'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'ingegneri');}
    else { printempty_events('telefono_cliente', 'ingegneri'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'ingegneri');}
    else { printempty_events('form esterno', 'ingegneri'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavori-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'lavori');}
    else { printempty_events('risposta', 'lavori'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'lavoricasa');}
    else { printempty_events('risposta_cliente', 'lavoricasa'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'lavoricasa');}
    else { printempty_events('telefono', 'lavoricasa'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'lavoricasa');}
    else { printempty_events('telefono_cliente', 'lavoricasa'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'lavoricasa');}
    else { printempty_events('form esterno', 'lavoricasa'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'management');}
    else { printempty_events('risposta', 'management'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'management');}
    else { printempty_events('risposta_cliente', 'management'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'management');}
    else { printempty_events('telefono', 'management'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'management');}
    else { printempty_events('telefono_cliente', 'management'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'management');}
    else { printempty_events('form esterno', 'management'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'grafica');}
    else { printempty_events('risposta', 'grafica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'grafica');}
    else { printempty_events('risposta_cliente', 'grafica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'grafica');}
    else { printempty_events('telefono', 'grafica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'grafica');}
    else { printempty_events('telefono_cliente', 'grafica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'grafica');}
    else { printempty_events('form esterno', 'grafica'); }
    
    //
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'medicina');}
    else { printempty_events('risposta', 'medicina'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'medicina');}
    else { printempty_events('risposta_cliente', 'medicina'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'medicina');}
    else { printempty_events('telefono', 'medicina'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'medicina');}
    else { printempty_events('telefono_cliente', 'medicina'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'medicina');}
    else { printempty_events('form esterno', 'medicina'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'operai');}
    else { printempty_events('risposta', 'operai'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'operai');}
    else { printempty_events('risposta_cliente', 'operai'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'operai');}
    else { printempty_events('telefono', 'operai'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'operai');}
    else { printempty_events('telefono_cliente', 'operai'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'operai');}
    else { printempty_events('form esterno', 'operai'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'sales');}
    else { printempty_events('risposta', 'sales'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'sales');}
    else { printempty_events('risposta_cliente', 'sales'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'sales');}
    else { printempty_events('telefono', 'sales'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'sales');}
    else { printempty_events('telefono_cliente', 'sales'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'sales');}
    else { printempty_events('form esterno', 'sales'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'trasporti');}
    else { printempty_events('risposta', 'trasporti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'trasporti');}
    else { printempty_events('risposta_cliente', 'trasporti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'trasporti');}
    else { printempty_events('telefono', 'trasporti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'trasporti');}
    else { printempty_events('telefono_cliente', 'trasporti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'trasporti');}
    else { printempty_events('form esterno', 'trasporti'); }
    
    //altre-offerte
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'altre');}
    else { printempty_events('risposta', 'altre'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'altre');}
    else { printempty_events('risposta_cliente', 'altre'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'altre');}
    else { printempty_events('telefono', 'altre'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'altre');}
    else { printempty_events('telefono_cliente', 'altre'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'altre');}
    else { printempty_events('form esterno', 'altre'); }
    
    
    
    
    //offerte-di-lavoro-estero
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro-estero;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-estero-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'offerte-di-lavoro-estero');}
    else { printempty_events('risposta', 'offerte-di-lavoro-estero'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro-estero;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-estero-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'offerte-di-lavoro-estero');}
    else { printempty_events('risposta_cliente', 'offerte-di-lavoro-estero'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro-estero;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-estero-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'offerte-di-lavoro-estero');}
    else { printempty_events('telefono', 'offerte-di-lavoro-estero'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro-estero;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-estero-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'offerte-di-lavoro-estero');}
    else { printempty_events('telefono_cliente', 'offerte-di-lavoro-estero'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro-estero;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-estero-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'offerte-di-lavoro-estero');}
    else { printempty_events('form esterno', 'offerte-di-lavoro-estero'); }
    
    //macro
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'offerte-di-lavoro');}
    else { printempty_events('risposta', 'offerte-di-lavoro'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'offerte-di-lavoro');}
    else { printempty_events('risposta_cliente', 'offerte-di-lavoro'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'offerte-di-lavoro');}
    else { printempty_events('telefono', 'offerte-di-lavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'offerte-di-lavoro');}
    else { printempty_events('telefono_cliente', 'offerte-di-lavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'offerte-di-lavoro');}
    else { printempty_events('form esterno', 'offerte-di-lavoro'); }
    
    // overall
    /*
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'overall');}
    else { printempty_events('risposta', 'overall'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'overall');}
    else { printempty_events('risposta_cliente', 'altre'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'altre');}
    else { printempty_events('telefono', 'overall'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'overall');}
    else { printempty_events('telefono_cliente', 'overall'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost;ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'overall');}
    else { printempty_events('form esterno', 'overall'); }
    
    */
    
 
  
  } catch(error) {
    Browser.msgBox(error.message);
  }
}
    
///////////////////////////////////////////////////
function run_lavoro_events_2015() {
  try {

    var firstProfile = getFirstProfile_events();
  
    
    clear_sheet(2);
    clear_sheet(3);
    
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'acquisti');}
    else { printempty_events('risposta', 'acquisti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'acquisti');}
    else { printempty_events('risposta_cliente', 'acquisti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'acquisti');}
    else { printempty_events('telefono', 'acquisti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'acquisti');}
    else { printempty_events('telefono_cliente', 'acquisti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~acquisti;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'acquisti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'acquisti');}
    else { printempty_events('form esterno', 'acquisti'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'amministrazione');}
    else { printempty_events('risposta', 'amministrazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'amministrazione');}
    else { printempty_events('risposta_cliente', 'amministrazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'amministrazione');}
    else { printempty_events('telefono', 'amministrazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'amministrazione');}
    else { printempty_events('telefono_cliente', 'amministrazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~amministrazione;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'amministrazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'amministrazione');}
    else { printempty_events('form esterno', 'amministrazione'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'animazione');}
    else { printempty_events('risposta', 'animazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'animazione');}
    else { printempty_events('risposta_cliente', 'animazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'animazione');}
    else { printempty_events('telefono', 'animazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'animazione');}
    else { printempty_events('telefono_cliente', 'animazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~animazione;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'animazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'animazione');}
    else { printempty_events('form esterno', 'animazione'); }
    
     //
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'architetti');}
    else { printempty_events('risposta', 'architetti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'architetti');}
    else { printempty_events('risposta_cliente', 'architetti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'architetti');}
    else { printempty_events('telefono', 'architetti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'architetti');}
    else { printempty_events('telefono_cliente', 'architetti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~architetti;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'architetti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'architetti');}
    else { printempty_events('form esterno', 'architetti'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'ristorazione');}
    else { printempty_events('risposta', 'ristorazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'ristorazione');}
    else { printempty_events('risposta_cliente', 'ristorazione'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'ristorazione');}
    else { printempty_events('telefono', 'ristorazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'ristorazione');}
    else { printempty_events('telefono_cliente', 'ristorazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ristorazione;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ristorazione-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'ristorazione');}
    else { printempty_events('form esterno', 'ristorazione'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'commessi');}
    else { printempty_events('risposta', 'commessi'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'commessi');}
    else { printempty_events('risposta_cliente', 'commessi'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'commessi');}
    else { printempty_events('telefono', 'commessi'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'commessi');}
    else { printempty_events('telefono_cliente', 'commessi'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~commessi;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'commessi-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'commessi');}
    else { printempty_events('form esterno', 'commessi'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'customer');}
    else { printempty_events('risposta', 'customer'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'customer');}
    else { printempty_events('risposta_cliente', 'customer'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'customer');}
    else { printempty_events('telefono', 'customer'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'customer');}
    else { printempty_events('telefono_cliente', 'customer'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~customer;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'customer-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'customer');}
    else { printempty_events('form esterno', 'customer'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'docenti');}
    else { printempty_events('risposta', 'docenti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'docenti');}
    else { printempty_events('risposta_cliente', 'docenti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'docenti');}
    else { printempty_events('telefono', 'docenti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'docenti');}
    else { printempty_events('telefono_cliente', 'docenti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~docenti;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'docenti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'docenti');}
    else { printempty_events('form esterno', 'docenti'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'estetica');}
    else { printempty_events('risposta', 'estetica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'estetica');}
    else { printempty_events('risposta_cliente', 'estetica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'estetica');}
    else { printempty_events('telefono', 'estetica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'estetica');}
    else { printempty_events('telefono_cliente', 'estetica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~estetica;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'estetica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'estetica');}
    else { printempty_events('form esterno', 'estetica'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'hostess');}
    else { printempty_events('risposta', 'hostess'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'hostess');}
    else { printempty_events('risposta_cliente', 'hostess'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'hostess');}
    else { printempty_events('telefono', 'hostess'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'hostess');}
    else { printempty_events('telefono_cliente', 'hostess'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~hostess;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'hostess-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'hostess');}
    else { printempty_events('form esterno', 'hostess'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'informatica');}
    else { printempty_events('risposta', 'informatica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'informatica');}
    else { printempty_events('risposta_cliente', 'informatica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'informatica');}
    else { printempty_events('telefono', 'informatica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'informatica');}
    else { printempty_events('telefono_cliente', 'informatica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~informatica;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'informatica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'informatica');}
    else { printempty_events('form esterno', 'informatica'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'ingegneri');}
    else { printempty_events('risposta', 'ingegneri'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'ingegneri');}
    else { printempty_events('risposta_cliente', 'ingegneri'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'ingegneri');}
    else { printempty_events('telefono', 'ingegneri'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'ingegneri');}
    else { printempty_events('telefono_cliente', 'ingegneri'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~ingegneri;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'ingegneri-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'ingegneri');}
    else { printempty_events('form esterno', 'ingegneri'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavori-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'lavori');}
    else { printempty_events('risposta', 'lavori'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'lavoricasa');}
    else { printempty_events('risposta_cliente', 'lavoricasa'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'lavoricasa');}
    else { printempty_events('telefono', 'lavoricasa'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'lavoricasa');}
    else { printempty_events('telefono_cliente', 'lavoricasa'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~telelavoro;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoricasa-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'lavoricasa');}
    else { printempty_events('form esterno', 'lavoricasa'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'management');}
    else { printempty_events('risposta', 'management'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'management');}
    else { printempty_events('risposta_cliente', 'management'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'management');}
    else { printempty_events('telefono', 'management'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'management');}
    else { printempty_events('telefono_cliente', 'management'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~management;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'management-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'management');}
    else { printempty_events('form esterno', 'management'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'grafica');}
    else { printempty_events('risposta', 'grafica'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'grafica');}
    else { printempty_events('risposta_cliente', 'grafica'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'grafica');}
    else { printempty_events('telefono', 'grafica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'grafica');}
    else { printempty_events('telefono_cliente', 'grafica'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~grafica;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'grafica-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'grafica');}
    else { printempty_events('form esterno', 'grafica'); }
    
    //
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'medicina');}
    else { printempty_events('risposta', 'medicina'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'medicina');}
    else { printempty_events('risposta_cliente', 'medicina'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'medicina');}
    else { printempty_events('telefono', 'medicina'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'medicina');}
    else { printempty_events('telefono_cliente', 'medicina'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~medicina;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'medicina-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'medicina');}
    else { printempty_events('form esterno', 'medicina'); }
    
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'operai');}
    else { printempty_events('risposta', 'operai'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'operai');}
    else { printempty_events('risposta_cliente', 'operai'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'operai');}
    else { printempty_events('telefono', 'operai'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'operai');}
    else { printempty_events('telefono_cliente', 'operai'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~operai;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'operai-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'operai');}
    else { printempty_events('form esterno', 'operai'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'sales');}
    else { printempty_events('risposta', 'sales'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'sales');}
    else { printempty_events('risposta_cliente', 'sales'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'sales');}
    else { printempty_events('telefono', 'sales'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'sales');}
    else { printempty_events('telefono_cliente', 'sales'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~sales;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sales-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'sales');}
    else { printempty_events('form esterno', 'sales'); }
    
    //
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'trasporti');}
    else { printempty_events('risposta', 'trasporti'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'trasporti');}
    else { printempty_events('risposta_cliente', 'trasporti'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'trasporti');}
    else { printempty_events('telefono', 'trasporti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'trasporti');}
    else { printempty_events('telefono_cliente', 'trasporti'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~magazzinieri;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'trasporti-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'trasporti');}
    else { printempty_events('form esterno', 'trasporti'); }
    
    //altre-offerte
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'altre');}
    else { printempty_events('risposta', 'altre'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'altre');}
    else { printempty_events('risposta_cliente', 'altre'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'altre');}
    else { printempty_events('telefono', 'altre'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'altre');}
    else { printempty_events('telefono_cliente', 'altre'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory=~altre;ga:eventCategory=~offerte;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'altre');}
    else { printempty_events('form esterno', 'altre'); }
    
    //macro
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'offerte-di-lavoro');}
    else { printempty_events('risposta', 'offerte-di-lavoro'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'offerte-di-lavoro');}
    else { printempty_events('risposta_cliente', 'offerte-di-lavoro'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'offerte-di-lavoro');}
    else { printempty_events('telefono', 'offerte-di-lavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'offerte-di-lavoro');}
    else { printempty_events('telefono_cliente', 'offerte-di-lavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventCategory==offerte-di-lavoro;ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'offerte-di-lavoro-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'offerte-di-lavoro');}
    else { printempty_events('form esterno', 'offerte-di-lavoro'); }
    
    
    
    
    // overall
    /*
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'overall');}
    else { printempty_events('risposta', 'overall'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'altre-risposta_cliente');    outputToSpreadsheet_tot_events(results,'risposta_cliente', 'overall');}
    else { printempty_events('risposta_cliente', 'altre'); }
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'altre');}
    else { printempty_events('telefono', 'overall'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~telefono;ga:eventaction=~cliente');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-telefono_cliente');    outputToSpreadsheet_tot_events(results,'telefono_cliente', 'overall');}
    else { printempty_events('telefono_cliente', 'overall'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:eventCategory',firstProfile,'ga:eventaction=~rispost;ga:eventaction=~formesterno,ga:eventaction=~lys');
    if (results!=undefined) {outputToSpreadsheet_events(results,'overall-form esterno');    outputToSpreadsheet_tot_events(results,'form esterno', 'overall');}
    else { printempty_events('form esterno', 'overall'); }
    
    */
    
 
  
  } catch(error) {
    Browser.msgBox(error.message);
  }
}
    




function do_report_events (tab_source,tab_dest) {   //stampa report

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[tab_source]; //new
  var events=sheet.getRange(1, 3, 110, 1).getValues();
  //sheet.getRange(2, 1, 1, 1).setValues([data]); 
 Logger.log(events);
  Logger.log(events[2][0]);
  
 var sheet_dest = ss.getSheets()[tab_dest]; //new


var i=0;
 for (var row = 3; row< 25; ++row) //nr righe-1

   {
      var  lung=110; //lunghezza array
       sheet_dest.getRange(row, 7, 1, 1).setValue(events[i][0]); //risposta
       sheet_dest.getRange(row, 8, 1, 1).setValue(events[i+1][0]); //risposta cliente
       sheet_dest.getRange(row, 10, 1, 1).setValue(events[i+2][0]); //telefono 
       sheet_dest.getRange(row, 11, 1, 1).setValue(events[i+3][0]); //telefono cliente
       sheet_dest.getRange(row, 13, 1, 1).setValue(events[i+4][0]); //form esterno
    
     if (i+5<lung-1) {i=i+5}
     
     }
   }


function do_report_events_2015 (tab_source,tab_dest) {   //stampa report

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[tab_source]; //new
  var events=sheet.getRange(1, 3, 110, 1).getValues();
  //sheet.getRange(2, 1, 1, 1).setValues([data]); 
 Logger.log(events);
  Logger.log(events[2][0]);
  
 var sheet_dest = ss.getSheets()[tab_dest]; //new


var i=0;
 for (var row = 3; row< 24; ++row) //nr righe-1

   {
      var  lung=110; //lunghezza array
       sheet_dest.getRange(row, 7, 1, 1).setValue(events[i][0]); //risposta
       sheet_dest.getRange(row, 8, 1, 1).setValue(events[i+1][0]); //risposta cliente
       sheet_dest.getRange(row, 10, 1, 1).setValue(events[i+2][0]); //telefono 
       sheet_dest.getRange(row, 11, 1, 1).setValue(events[i+3][0]); //telefono cliente
       sheet_dest.getRange(row, 13, 1, 1).setValue(events[i+4][0]); //form esterno
    
     if (i+5<lung-1) {i=i+5}
     
     }
   }



function test_events()
{

  do_report_events(3,5);
}


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function getFirstProfile_events() {
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

function printempty_events(testo_evento,testo_camp) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo_evento);
  sheet.getRange(row, 2, 1, 1).setValue(testo_camp);
}



function getReportDataForProfile_events(tipo,firstProfile,filters) {

  var profileId = "51871756";  // profilo 'OFFERTE DI LAVORO' che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
 // var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
 // var endDate = getLastNdays(1);      // Today.

var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
Logger.log(startDate);
  Logger.log(endDate);
  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-ga:totalEvents',       // Sort by sessions descending, then keyword.
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
      'ga:totalEvents', // Comma seperated list of metrics.
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
function outputToSpreadsheet_events(results,testo_filtro) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[2]; //new
  
 
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

function outputToSpreadsheet_tot_headers_events(results) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  
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

function outputToSpreadsheet_tot_events(results,testo_action,testo_camp) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  // sheet.getRange(row, 2).setValues([data]);
  sheet.getRange(row, 2, 1, 2).setValues([data]);
sheet.getRange(row, 1, 1, 1).setValue(testo_action);
  sheet.getRange(row, 2, 1, 1).setValue(testo_camp);
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  
  