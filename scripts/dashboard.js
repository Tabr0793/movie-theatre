var buildCollectionItemTemplate = function() {
     var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="images/movie_covers.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> Movie Title </a>'
   + '      <br/>'
   + '      <a href="album.html"> Length & Rating </a>'
   + '      <br/>'
   + '      Release Date'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
      return $(template);
 };
   $(window).load(function() {

     var $collectionContainer = $('.album-covers');
      $collectionContainer.empty();
     // #3
     for (var i = 0; i < 12; i++) {
       var $newThumbnail = buildCollectionItemTemplate();
       // #5
       $collectionContainer.append($newThumbnail);
     }
 });
