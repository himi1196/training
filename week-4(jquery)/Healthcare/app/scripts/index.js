

// change image on home page
function changeImage() {

  $('#homeid').css('background-image','url(./images/health6.jpg)');
}

setTimeout(changeImage,1500);

//open the generic page where charts will be displayed

function loadpage(num) {
   window.open("delhiCharts.html?"+num,"_self");
};

// to provide a number to the clicked part

$('.delhi').click(function (event) {
  var id =event.target.id;

  if(id==='north'){
    loadpage(1);
  }
  if(id==='south'){
    loadpage(2);
  }
  if(id==='east'){
    loadpage(3);
  }
  if(id==='west'){
    loadpage(4);
  }

})

//export {newvariablfe};

/* export const something=(()=>{
  var w;
  return {
    loadpage : function (num) {
      w=window.open("delhiCharts.html");
      return num;
    }
  }
})();
*/
