
this.addEventListener('DOMContentLoaded', function()
{
  //set height of landing page image on page load
  S('.cur-page-bg-image').height = `${this.innerHeight}px`;


  
  this.addEventListener("resize", () =>
  {
    S('.cur-page-bg-image').height = `${window.innerHeight}px`;
  });
});