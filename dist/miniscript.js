let pokemonRepository=function(){let t=[];function n(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(n){t.imageUrl=n.sprites.front_default,t.height=n.height,t.weight=n.weight;let e=[];n.types.forEach(function(t){e.push(t.type.name)}),t.types=e.join(", ")}).catch(function(t){console.error(t)})}function e(){return t}function o(n){t.push(n)}let i=$(".modal");function a(t){let n=$(".modal-body"),e=$(".modal-title");n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),a=$('<img class="modal-image">');a.attr("src",t.imageUrl);let l=$("<p>Height: "+t.height+"</p>"),p=$("<p>Weight: "+t.weight+"</p>"),s=$("<p>Type: "+t.types+"</p>");i.addClass("show"),e.append(o),n.append(a),n.append(l),n.append(p),n.append(s)}function l(t){n(t).then(function(){a(t)})}return $(".modal-close-btn").on("click",function(){i.removeClass("show")}),{getAll:e,add:o,addListItem:function t(n){let e=$(".pokemon-list"),o=$('<li class="list-group-item"></li>'),i=$('<button class="pokemon-button btn btn-info" data-target="#pokemon-modal" data-toggle="modal">'+n.name+"</button>");o.append(i),e.append(o),i.on("click",function(){l(n)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){o({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:n,showDetails:l,showModal:a}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});