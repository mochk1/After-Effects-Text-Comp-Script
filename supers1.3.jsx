

{
   function myScript(thisObj){
      function myScript_buildUI(thisObj){
         var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "SUPER MASTER", undefined, {resizeable:true, closeButton: false,multiline:true}, );

         res = "group{orientation:'column',\
                        groupOne: Group{orientation:'column',\
                        Text1: EditText{preferredSize:[200, 300], properties:{multiline: true, align:'right'}},\
               },\
               groupThree: Group{orientation:'row',\
               goButton: Button{text:'GO!'},\
                closeButton: Button{text:'Close'},\
               },\
         }";

         myPanel.grp = myPanel.add(res);

         //Defaults


              myPanel.grp.groupThree.goButton.onClick = function() {
             makesupers();
             }   
               
         
        myPanel.grp.groupThree.closeButton.onClick = function() {
            myPanel.close();
            }
        
        
    function makesupers() {
      app.beginUndoGroup("SUPER MASTER"); // undo from here
            var myComp;
                        var myComp = app.project.selection[0];  // the selected comp
                        var text = myPanel.grp.groupOne.Text1.text;  // the text input
                        var lines = text.split(/[\n\r]/);                        // splits the text to i lines
                            for (var l = 0; l<= lines.length; l++){      // loop through lines
                                if ((lines[l+1]!="")&&(lines[l+1]!=" ")) {       // checks if line has no empty characters
                                    myComp.layer("TEXT").property("ADBE Text Properties").property("ADBE Text Document").setValue(lines[0]);  // sets the first comp text to the first line from array
                                    myComp.layer("TEXT").property("ADBE Text Properties").property("ADBE Text Document").setValue(lines[l+1]); // sets the rest of the lines from text array
                
              myComp.duplicate();
              
              
              } 
          
}

        app.endUndoGroup(); // undo to here

   }

         
         
         myPanel.layout.layout(true);

         return myPanel;
      }
   
   
      var myScriptPal = myScript_buildUI(thisObj);

      if (myScriptPal != null && myScriptPal instanceof Window){
         myScriptPal.center();
         myScriptPal.show();
      }

   }
   myScript(this);
}




