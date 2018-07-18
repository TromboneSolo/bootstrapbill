function showtext(){
    var mytext= $("#searchbox").val();
    $.getJSON('https://owapi.net/api/v3/u/' + mytext + '/blob', function(data) {
        //$("img").each(function(){
            //var src=$(this).attr("src", data.us.stats.quickplay.overall_stats.avatar);
        //});
        //$("#avatar").src = data.us.stats.quickplay.overall_stats.avatar;
       //alert(data.us.stats.quickplay.overall_stats.avatar);
          console.log(data);
    });
}