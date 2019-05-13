//question / vraag 1.1 step 2
//'<span>***WORD FOR TYPING EXERCISE HERE***</span>'

//question / vraag 1.1 step 3
//'<span class="noItems">No more exercise words. Try to click some of the buttons below.</span>'

var arr = [ 'CSS', 'HTML', 'Javascript' ];

$(document).ready(doStuff);

function doStuff()
{
    createExercises();
    $('.inputfield').keyup(keyPressed);
    
    
}

function createExercises(e)
{
    $('.exercises').empty();
    
    var exercisewords = $('<span>'+ arr[0] +'</span><span>'+ arr[1] +'</span><span>'+ arr[2] +'</span>');
    $('.exercises').append(exercisewords);
    
    if(!arr)
        {
         var noExercise = $('<span class="noItems">No more exercise words. Try to click some of the buttons below.</span>');
         $('.exercises').append(noExercise);
        }
    
}

function keyPressed( e )
{
   var inputText =  $('.inputfield').val();
   if(inputText == arr[0])
       {
           console.log("ja");
           
           //var buttontext = inputText;
           var button = $('<button>'+ inputText +'</button>');
           $(button).click(buttonClicked);
           $('.buttons').append(button);
           $('.inputfield').val(' ');
           arr.shift();
           createExercises();
       }
    
    

    
}

function buttonClicked( e )
{
   var inputText =  $(e.currentTarget).html();
   arr.push(inputText);
   createExercises();
   $(e.currentTarget).remove();
    
    //het werkt allemaal, maar soms moet je het woord 2x opnieuw typen.
    
}



