

console.log("index.js opened");

function changeImage() {
  console.log("imgchng");
  let back= document.getElementById('homeid');
  if(back!=null)
  back.style.backgroundImage='url(./images/health6.jpg)'

}
setTimeout(changeImage,3000);
function loadpage(num) {

  console.log("happpyyy");
   window.open("delhiCharts.html?"+num,"_self");
  console.log(num);

};
//export {newvariable};

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
