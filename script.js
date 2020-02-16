var t=0,resizing=false;
  function _reload()
  {
    resizing=false;
    window.location.reload(true);
  }
  window.addEventListener('resize',function(){
    if(!resizing){
      resizing=true;
      t=setTimeout(_reload, 2000);
    }
  });
