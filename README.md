Lab1_13
=======
##Инструкция##
* `git clone https://github.com/lumino4/Lab1_13.git`

##Использование сторонних библиотек в рамках ЛР##
* BootStrap (cdn): `http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css`
* jQuery (yandex-cdn): `http://yandex.st/jquery/2.0.3/jquery.min.js`

##Описание основных деталей реализации##
###HTML+CSS###
* Страницы сверстаны с использованием Bootstrap 3 (блочная верстка с 12 колоночной сеткой). 
* Каждая html-страница состоит из двух логических блоков-контейнеров для меню:
`<div class='col-xs-3' id='sidebar-wrapper'>` и ленты новостей: `<div class='col-xs-9'>`
* Структура каждого элемента ленты новостей (`'.feed-item'`):
`<div class="row feed-item">
<div class='col-xs-2 img-news-container'>
<img class="img-news">
</div>
<div class='col-xs-10'>
<h4 class="title">
<a class="news-title"></a>
</h4>
<div>
<p class="description">
</p>
</div>
<div class="feed-item-footer">
<span class="created_at"></span>
</div>
<hr class="bs-docs-separator">
</div>
</div>`
* 
