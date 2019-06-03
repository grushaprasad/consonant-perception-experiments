PennController.ResetPrefix(null);
PennController.AddHost("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/");

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
