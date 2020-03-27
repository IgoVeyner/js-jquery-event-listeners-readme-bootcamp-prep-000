//define functions here
function getIt(){
  alert('Hey!');
}

function frameIt(){
  //var ele = document.querySelectorAll("img");
  //ele.classList.add('tasty');
  $(document).ready(function(){
    $('img').toggleClass('tasty');
  });
}

function pressIt(){
  alert('G key was pressed');
}

function submitIt(){
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){
// call functions here
  $('p').on('click', getIt);
  
  $('img').on('load', frameIt);
  
  $('form').on('submit', submitIt);
  
  $('input').on('keydown', function(key){
    if (key === 103){
      pressIt;
    }
  });
});
