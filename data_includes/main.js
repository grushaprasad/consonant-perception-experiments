PennController.Sequence( "instructions", randomize("practice_trial1"), "start_exp1", randomize("without_precursor"), "end_part1", randomize("practice_trial2"), "start_exp2", randomize("with_precursor"), "demographic", "exp_end");

PennController.ResetPrefix(null);

//PennController.PreloadZip("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/mp3_test.zip");
PennController.AddHost("https://consonant-perception-exp1.s3.us-east-2.amazonaws.com/");


PennController("instructions",

    newTextInput("worker_id", "Please enter your MTurk worker ID")
        .settings.css("font-size", "larger")
        .settings.log()
        .settings.lines(0)
        .settings.size(400, 50)
        .print()
    ,

    newButton("enter_id", "Continue")
        .settings.css("font-size", "larger")
        .print()
        .wait()
        .remove()
    ,

    getTextInput("worker_id")
        .remove()
    ,

    newText("instrutions", "<p> There are two parts to this experiment. In the first part, you will be listening to isolated speech sounds. In the second part, each speech sound will be preceded by a sequence of tones. In both parts of the experiment, your task is to judge whether the speech sound begins with <b> D </b> or <b> G </b>. </p><p> Let us start with a few practice trials </p>" )
        .settings.size(800, 100)
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newButton("start_practice1", "Begin practice")
        .settings.css("font-size", "larger")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,

    getText("instrutions")
        .remove()
    
);


PennController.Template( PennController.defaultTable.filter("Block","practice_trial1") ,
    row => PennController( "practice_trial1" ,
    
    newText("Question", "Which sound do you hear at the beginning of the syllable?")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newTimer("jitter", 500)
        .start()
        .wait()
    ,
        
    
    newAudio("practice", row.fname)
        .play()
        .wait()
    ,    
    
    
    newCanvas("consonants", 820, 600)
        .settings.add(   300, 50, 
            newImage("D", "D.jpg") 
                .settings.size(50,50))
        .settings.add( 475, 50, 
            newImage("G", "G.png")
                .settings.size(50,50))
        .print()
    ,
    newSelector("consonant")
        .settings.log()
        .settings.add( getImage("D") , getImage("G") )
        .wait()
    ,

    getCanvas("consonants")
        .remove()
    ,
    
    newTimer("ITI", 1000)
        .start()
        .wait()
    
    )

    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);



PennController("start_exp1",


    newText("begin_exp", "<p> You are done with the practice trials. Begin the first part of the experiment when you are ready.  </p>" )
        .settings.center()
        .settings.css("font-size", "larger")
        .settings.size(800, 100)
        .print()
    ,
    
    newButton("start_experiment", "Begin experiment")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
        .wait()
        .remove()
    ,

    getText("begin_exp")
        .remove()
    
);


PennController.Template( PennController.defaultTable.filter("Block","without_precursor") ,
    row => PennController( "without_precursor" ,
    
    
    newText("Question", "Which sound do you hear at the beginning of the syllable?")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newTimer("jitter", 500)
        .start()
        .wait()
    ,

    newAudio("noprecursor", row.fname)
        .play()
        .wait()
    ,    
    
    newCanvas("consonants", 820, 600)
        .settings.add(   300, 50, 
            newImage("D", "D.jpg") 
                .settings.size(50,50))
        .settings.add( 475, 50, 
            newImage("G", "G.png")
                .settings.size(50,50))
        .print()
    ,

    newSelector("consonant")
        .settings.log()
        .settings.add( getImage("D") , getImage("G") )
        .wait()
    ,
    
    getCanvas("consonants")
        .remove()
    ,

    newTimer("ITI", 1000)
        .start()
        .wait()
    
    )
    
    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);


PennController("end_part1",


    newText("end_part1_text", "<p> You are done with the first part of the experiment. As a reminder, in the next part, each speech sound will be preceded by a sequence of tones. Your task is still the same. You need to judge whether the speech sound begins with <b> D </b> or <b> G </b>. Let us start with a few practice trials." )
        .settings.center()
        .settings.css("font-size", "larger")
        .settings.size(800, 100)
        .print()
    ,
    
    newButton("start_practice2", "Begin practice")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
        .wait()
        .remove()
    ,

    getText("end_part1_text")
        .remove()
    
);


PennController.Template(PennController.defaultTable.filter("Block","practice_trial2") ,
    row => PennController( "practice_trial2" ,
    
    newText("Question", "Which sound do you hear at the beginning of the syllable?")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newTimer("jitter", 500)
        .start()
        .wait()
    ,
        
    
    newAudio("practice2", row.fname)
        .play()
        .wait()
    ,    
    
    
    newCanvas("consonants", 820, 600)
        .settings.add(   300, 50, 
            newImage("D", "D.jpg") 
                .settings.size(50,50))
        .settings.add( 475, 50, 
            newImage("G", "G.png")
                .settings.size(50,50))
        .print()
    ,

    newSelector("consonant")
        .settings.log()
        .settings.add( getImage("D") , getImage("G") )
        .wait()
    ,

    getCanvas("consonants")
        .remove()
    ,
    
    newTimer("ITI", 1000)
        .start()
        .wait()
    
    )

    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)
);


PennController("start_exp2",


    newText("begin_exp2", "<p> You are done with the practice trials. Begin the second part of the experiment when you are ready.  </p>" )
        .settings.center()
        .settings.css("font-size", "larger")
        .settings.size(800, 100)
        .print()
    ,
    
    newButton("start_experiment", "Continue experiment")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
        .wait()
        .remove()
    ,

    getText("begin_exp2")
        .remove()
    
);



PennController.Template( PennController.defaultTable.filter("Block","with_precursor") ,
    row => PennController( "with_precursor" ,
    
    newText("Question", "Which sound do you hear at the beginning of the syllable?")
        .settings.center()
        .settings.css("font-size", "larger")
        .print()
    ,
    
    newTimer("jitter", 500)
        .start()
        .wait()
    ,
        

    newAudio("precursor", row.fname)
        .play()
        .wait()
    ,    
    
    newCanvas("consonants", 820, 600)
        .settings.add(   300, 50, 
            newImage("D", "D.jpg") 
                .settings.size(50,50))
        .settings.add( 475, 50, 
            newImage("G", "G.png")
                .settings.size(50,50))
        .print()
    ,
    newSelector("consonant")
        .settings.log()
        .settings.add( getImage("D") , getImage("G") )
        .wait()
    ,
    
    getCanvas("consonants")
        .remove()
    ,
    
    newTimer("ITI", 1000)
        .start()
        .wait()
    
    )

    .log("continuum_member", row.continuum_member)
    .log("condition", row.condition)
    .log("itemnum", row.itemnum)
    .log("Group", row.Group)
    .log("Block", row.Block)

);

PennController("demographic",

    newHtml("demographics", "demographic.html")
        .settings.log()
        .print()
    ,

    newButton("continue", "Finish experiment")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("demographics").test.complete()
                .failure( getHtml("demographics").warn() )
        )
);

PennController.SendResults();

PennController("exp_end", 
    newText("end", "Thank you for participating in this experiment. Your survey code is GJsw5uYoPQa")
        .print()
    ,

    newTimer("forever", 1)
        .wait()            // Timer never started: will wait forever
)
.setOption("countsForProgressBar",false);
