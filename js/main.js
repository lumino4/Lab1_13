$(function(){
    var storage = window.localStorage,
        type = $("body").attr("type");

    if(storage){
        var nameSpaceKey = "Lab1";
        var storageData = JSON.parse(storage.getItem(nameSpaceKey));
        console.log('Браузер поддерживает localStorage');
        $('.favourite').each(function(){
            var $this = $(this),
                itemId = $($(this).closest('.feed-item')[0]).attr("id");

            if(checkInStorage(storageData, type, itemId)){
                addFavourite($this);
            }
            else{
                addNotFavourite($this);
            }
        });

    }
    else{
        alert('Ваш браузер не поддерживает localStorage!');
    }

    $(".favourite").click(function(){
        var key = nameSpaceKey,
            value = [],
            $feedItem = $($(this).closest('.feed-item')[0]),
            localkey = $feedItem.attr("id"),
            storageObjectArr = JSON.parse(storage.getItem(key)),
            href = $feedItem.find(".news-title").attr("href"),
            title = $feedItem.find(".news-title").text(),
            description = $feedItem.find(".description").text(),
            imgSrc = $feedItem.find(".img-news").attr("src"),
            created_at = $feedItem.find(".created_at").text();
            jItem = {
                type: type,
                favourite: {
                    'id': localkey,
                    'href': href,
                    'title': title,
                    'imgSrc': imgSrc,
                    'description': description,
                    'created_at': created_at
                }
            };

        if(storageObjectArr){
            var i = 0,
                len = storageObjectArr.length;
            for(i; i< len; i++){
                if(storageObjectArr[i].type == type && storageObjectArr[i].favourite.id == localkey){
                    storageObjectArr.splice(i, 1);
                    console.log(storageObjectArr);
                    storage.removeItem(key);
                    if(len!=1){ // Если в storage не оставался всего 1 элемент, который мы удалили, то запишем в ключ данные
                        storage.setItem(key, JSON.stringify(storageObjectArr));
                    }
                    addNotFavourite($(this));
                    return true;
                }
            }
            value = storageObjectArr;
        }
        value.push(jItem);
        storage.setItem(key, JSON.stringify(value));
        addFavourite($(this));
    });
});

function addNotFavourite($elem){
    $elem.addClass("not-favourite").removeClass("is-favourite");
}

function addFavourite($elem){
    $elem.addClass("is-favourite").removeClass("not-favourite");
}

function checkInStorage (array, type, id){
    if(array){
        var i = 0,
            len = array.length;
        for(i; i< len; i++){
            if(array[i].type == type && array[i].favourite.id == id){
                return true;
            }
        }
    }
    return false;
}