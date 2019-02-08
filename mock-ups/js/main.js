
'use strict';

//selectors: will save from typing longs words over and over again
const Q = document.querySelector.bind(document);
const QAll = document.querySelectorAll.bind(document);


//initialize popovers
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});


this.addEventListener('DOMContentLoaded', function()
{
  let actualNavBgColor = S('.nav-wrapper').background,
      nav1 = QAll('.navbar')[0],
      nav2 = QAll('.navbar')[1],
      navHeight = nav1.offsetHeight ? nav1.offsetHeight : nav2.offsetHeight,
      nav = nav1.offsetHeight ? nav1 : nav2;
  nav = nav.style;


  //onscroll function handles height-resizing and background fading of navbar on scroll of page
  this.addEventListener('scroll', function()
  {
    if (Q('.cur-page-top-bg-image'))
      scrollFunc()
  });
  
  function scrollFunc()
  {
    if (window.scrollY < navHeight)
    {
      if (/collapsed/.test(Q('.navbar-toggler').className))
        S('.nav-wrapper').background = 'rgba(0, 0, 0, 0)';
      nav.paddingTop = '25px';
      nav.paddingBottom = '25px';
      nav.boxShadow = 'none';
    }
    else if (window.scrollY < Q('.cur-page-top-bg-image').offsetHeight - navHeight)
    {
      if (/collapsed/.test(Q('.navbar-toggler').className))
        S('.nav-wrapper').background = 'rgba(0, 0, 0, 0.65)';
      nav.paddingTop = '16px';
      nav.paddingBottom = '16px';
      nav.boxShadow = 'none';
    }
    else
    {
      if (/collapsed/.test(Q('.navbar-toggler').className))
        S('.nav-wrapper').background = 'rgba(0, 0, 0, 0.95)';
      nav.paddingTop = '8px';
      nav.paddingBottom = '8px';
      nav.boxShadow = '0 2px 15px #000';
    }
    
    if (/collapsed/.test(Q('.navbar-toggler').className))
      actualNavBgColor = S('.nav-wrapper').background;
  }
  if (Q('.cur-page-top-bg-image'))
    scrollFunc(); //call function on load of page



  this.addEventListener("resize", resizeFunc);
  
  function resizeFunc()
  { 
    // reset nav values on window resize
    navHeight = nav1.offsetHeight ? nav1.offsetHeight : nav2.offsetHeight,
      nav = nav1.offsetHeight ? nav1 : nav2;
    nav = nav.style;
    
    //call 'onscroll' function everytime window is resized to reset nav styles accordingly
    if (Q('.cur-page-top-bg-image'))
      scrollFunc();

    //hide dropdown in case of a window resize to avoid displaying both navbars for PCs and mobiles at the same time
    if (!/collapsed/.test(Q('.navbar-toggler').className))
      Q('.navbar-toggler').click();
  };



  //for mobile: collapses nav-links dropdown on click of any where on page if dropdown is not collapsed
  Q('body').addEventListener('click', (e) =>
  {
    if (!/collapsed/.test(Q('.navbar-toggler').className))
      Q('.navbar-toggler').click();

    if (Q('.popover'))
      if (!/nav-avatar|avatar-icon/.test(e.target.className))
        Q('.nav-for-PCs .nav-avatar').click();
  });


  
  //changes navbar background color on click of nav toggler
  Q('.navbar-toggler').onclick = function () 
  {
    //shows/hides dark bg-overlay on click of navbar-toggler button
    if (/collapsed/.test(this.className))
      Q(".dark-bg-overlay").classList.remove("hide"),
      Q(".dark-bg-overlay").classList.add("show"),
      S('.nav-wrapper').background = 'rgba(0, 0, 0, 0.95)',
      nav.boxShadow = 'none';
    else
      Q(".dark-bg-overlay").classList.remove("show"),
      Q(".dark-bg-overlay").classList.add("hide"),
      setTimeout(() => S('.nav-wrapper').background = actualNavBgColor, 200);
  };



  //using this temporarily to move to home page for navigation purpose. May not be used in production
  if (Q('.nav-avatar'))
    Q('.nav-avatar').onmouseleave = function()
    {
      if (Q('.popover-body'))
        Q('.popover-body').onclick = () => window.location = "index.html";
    }
});



//for elements CSS styling. 'S' stands for Style
function S(element, index)
{ return (!index ? Q(element).style : QAll(element)[index].style); }