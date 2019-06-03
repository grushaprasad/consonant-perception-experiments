PennController.ResetPrefix(null);
PennController.AddHost("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/");


PennController.Template( PennController.defaultTable.filter("Block","1") ,
    row => PennController( "1" ,
        newButton("validation", "Continue")
        .print()
        .wait()
        .remove()
    ,
    
    newAudio("test sentence", "dg09_1_lowmid.mp3")
        .play()
        .wait()
    ,    
    
    newScale("judgment",    "D", "G")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.before( getText("green") )
        .print()
        .wait()

    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);


PennController(
    newButton("validation", "Continue")
        .print()
        .wait()
        .remove()
    ,
    
    newAudio("test sentence", "dg09_1_lowmid.mp3")
        .play()
        .wait()
    ,    
    
    newScale("judgment",    "D", "G")
        .settings.log()
        .settings.labelsPosition("top")  // Position the labels
        .settings.before( getText("green") )
        .print()
        .wait()
);
