
function changeImage() {

  $('#homeid').css('background-image','url(./images/health6.jpg)');
}

setTimeout(changeImage,1500);

function loadpage(num) {
   window.open("delhiCharts.html?"+num,"_self");
};

$('.delhi').click(function (event) {
  var id =event.target.id;
  console.log(id);
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
