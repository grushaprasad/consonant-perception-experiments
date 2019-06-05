PennController.Sequence( randomize("noprecursor") , randomize("precursor") );
PennController.ResetPrefix(null);

PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/ogg.zip");
// PennController.AddHost("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/");


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


PennController(
    
    newText("End", "You are done!")
        .print(),


    newButton("end_button", "Done")
        .print()
        .wait()
        .remove()
    
);


PennController(

    newText("instrutions", "Instrutions")
        .print(),
    
    newButton("start", "Continue")
        .print()
        .wait()
        .remove()
    
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



