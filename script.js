$(document).ready(isReady);

function isReady(e){
    $('.toggleMenu').click(menuWeg);
    $('.addTaskButton').click(addTask);
}

function menuWeg(e){
    e.preventDefault();
  var ifvisible = $('.controls').hasClass('invisible');
    
 if (!ifvisible){
     $('.controls').addClass('invisible');
     $('.toggleMenu').html(">");
 }else{
      $('.controls').removeClass('invisible');
     $('.toggleMenu').html("<");
 }
}

function addTask(e){
    e.preventDefault();
    console.log("task submitted");
    
    var task = $('.taskClass').val();
    var description = $('.descriptionClass').val();
    console.log(task + description);
    
    if(!task && !description){
       $('.taskClass').addClass('redBorder');
        $('.descriptionClass').addClass('redBorder');
       
    } else {
        $('.taskClass').removeClass('redBorder');
        $('.descriptionClass').removeClass('redBorder');
        
     var task = $  ('<div class="task"><a class="remove" href="#">X</a><h1> ' + task + ' </h1><p> ' + description + ' </p></div>')
     
     task.find('.remove').click(removeTask);
      $('.taskContainer').append(task);
    }
    
}

function removeTask( e ){
    e.preventDefault();
    $(e.currentTarget).parent().remove();
}



'<div class="task"><a class="remove" href="#">X</a><h1> *** </h1><p> *** </p></div>'