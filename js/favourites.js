$(function(){

    $(".turn-type").click(function(){
        $(".turn-type").removeClass("active");
        $(this).addClass("active");
        $(".clone-container").empty();
        type = $(this).attr("type");
        showContent(type, storage, $cloneTemplate);
    });

    var storage = window.localStorage,
        type = $(".turn-type.active").attr("type"),
        $cloneTemplate = $(".feed-item").clone();
    $(".feed-item").addClass("clone").removeClass("feed-item").css({"display": "none"});

    if(storage){
        showContent(type, storage, $cloneTemplate);
    }
    else{
        alert("Ваш браузер не поддерживает localStorage!");
    }


});

function showContent(type, storage, $cloneTemplate){
    var nameSpaceKey = "Lab1",
        storageData = JSON.parse(storage.getItem(nameSpaceKey));

    if(storageData){
        var i,
            len = storageData.length;
        if(type == "all"){
            for(i= len-1; i>= 0; i--){
               createNodes($cloneTemplate, storageData[i]);
            }
        }
        else{
            for(i= len-1; i>= 0; i--){
                if(storageData[i].type == type){
                    createNodes($cloneTemplate, storageData[i]);
                }
            }
        }

    }
}

function createNodes($cloneTemplate, storageDataItem){
    var $clone,
        href = storageDataItem.favourite.href,
        title = storageDataItem.favourite.title,
        imgSrc = storageDataItem.favourite.imgSrc,
        created_at = storageDataItem.favourite.created_at,
        description = storageDataItem.favourite.description;
    $clone = $cloneTemplate.clone();
    $clone.appendTo(".clone-container");
    $clone = $(".clone-container").find(".feed-item:last");
    $clone.find(".news-title").append(title);
    $clone.find(".news-title").attr("href", href);
    $clone.find(".description").append(description);
    $clone.find(".created_at").append(created_at);
    $clone.find(".img-news").attr("src", imgSrc);
}