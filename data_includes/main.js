PennController.Sequence( "instructions", randomize("practice_trial"), "start_exp", randomize("without_precursor") , randomize("with_precursor"), "exp_end");
PennController.ResetPrefix(null);

PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/mp3_test.zip");
// PennController.AddHost("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/");


PennController("instructions",

    newTextInput("worker_id", "Please enter your MTurk worker ID")
        .settings.log()
        .settings.lines(0)
        .settings.size(400, 50)
        .print()
    ,

    newButton("enter_id", "Continue")
        .print()
        .wait()
        .remove()
    ,

    getTextInput("worker_id")
        .remove()
    ,

    newText("instrutions", "<p> There are two parts to this experiment. In the first part, you will be listening to isolated speech sounds. In the second part of the experiment these speech sounds will be preceded by a sequence of tones. Your task is to judge whether the speech sounds like it begins with <b> D </b> or a <b> G </b>. </p><p> Let us start with a few practice trials </p>" )
        .settings.size(800, 100)
        .print()
    ,
    
    newButton("start_practice", "Begin practice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getText("instrutions")
        .remove()
    
);


PennController.Template( PennController.defaultTable.filter("Block","practice_trial") ,
    row => PennController( "practice_trial" ,
    
    newAudio("practice", row.fname)
        .play()
        .wait()
    ,    
    
    newScale("judgment",    "D", "G")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.before( getText("green") )
        .print()
        .wait()
    )

    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);



PennController("start_exp",


    newText("begin_exp", "<p> You are done with the practice trials. Begin the experiment when you are ready.  </p>" )
        .settings.size(800, 100)
        .print()
    ,
    
    newButton("start_experiment", "Begin experiment")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getText("begin_exp")
    
);


PennController.Template( PennController.defaultTable.filter("Block","without_precursor") ,
    row => PennController( "without_precursor" ,
    
    newAudio("noprecursor", row.fname)
        .play()
        .wait()
    ,    
    
    newScale("judgment",    "D", "G")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.before( getText("green") )
        .print()
        .wait()
    )
    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);




PennController.Template( PennController.defaultTable.filter("Block","with_precursor") ,
    row => PennController( "with_precursor" ,
    
    newAudio("precursor", row.fname)
        .play()
        .wait()
    ,    
    
    newScale("judgment",    "D", "G")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.before( getText("green") )
        .print()
        .wait()
    )
    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)

);

PennController("exp_end",
    
    newText("End", "You are done!")
        .print(),


    newButton("end_button", "Done")
        .print()
        .wait()
        .remove()
    
);


