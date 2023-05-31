"use strict";var slide_hero=new Swiper(".slide-hero",{effect:"fade",pagination:{el:".slide-hero .main-area .area-explore .swiper-pagination"}}),btnCloseModal=document.querySelector(".js-close-modal-details-pokemon"),btnDropdownSelect=(btnCloseModal.addEventListener("click",closeDetailsPokemon),document.querySelector(".js-open-select-custom")),countPokemons=document.getElementById("js-count-pokemons"),areaPokemons=(btnDropdownSelect.addEventListener("click",function(){btnDropdownSelect.parentElement.classList.toggle("active")}),document.getElementById("js-list-pokemons"));function primeiraLetraMaiuscula(e){return e.charAt(0).toUpperCase()+e.slice(1)}function createCardPokemon(e,t,n,o){var a=document.createElement("button"),s=(a.classList="card-pokemon js-open-details-pokemon ".concat(t),a.setAttribute("code-pokemon",e),areaPokemons.appendChild(a),document.createElement("div")),c=(s.classList="image",a.appendChild(s),document.createElement("img")),o=(c.className="thumb-img",c.setAttribute("src",o),s.appendChild(c),document.createElement("div")),s=(o.classList="info",a.appendChild(o),document.createElement("div")),c=(s.classList="txt",o.appendChild(s),document.createElement("span")),a=(c.textContent=(e<10?"#00":"#0").concat(e),s.appendChild(c),document.createElement("h3")),e=(a.textContent=primeiraLetraMaiuscula(n),s.appendChild(a),document.createElement("div")),c=(e.classList="icon",o.appendChild(e),document.createElement("img"));c.setAttribute("src","assets/icon-types/".concat(t,".svg")),e.appendChild(c)}function listingPokemons(e){axios({method:"GET",url:e}).then(function(e){var t=document.getElementById("js-count-pokemons"),e=e.data,n=e.results,e=(e.next,e.count);t.innerText=e,n.forEach(function(e){e=e.url;axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};createCardPokemon(t.code,t.type,t.nome,t.image),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})})})})}function openDetailsPokemon(){document.documentElement.classList.add("open-modal");var e=this.getAttribute("code-pokemon"),t=this.querySelector(".thumb-img"),n=this.querySelector(".info .icon img"),o=this.querySelector(".info h3").textContent,a=this.querySelector(".info span").textContent,s=document.getElementById("js-image-pokemon-modal"),c=document.getElementById("js-modal-details"),s=(s.setAttribute("src",t.getAttribute("src")),document.getElementById("js-image-type-modal")),t=document.getElementById("js-name-pokemon-modal"),i=document.getElementById("js-code-pokemon-modal"),l=document.getElementById("js-height-pokemon"),m=document.getElementById("js-weight-pokemon"),r=document.getElementById("js-main-abilities");c.setAttribute("type-pokemon-modal",this.classList[2]),s.setAttribute("src",n.getAttribute("src")),t.textContent=o,i.textContent=a,axios({method:"GET",url:"https://pokeapi.co/api/v2/pokemon/".concat(e)}).then(function(e){e=e.data,console.log(e),e={mainAbilities:primeiraLetraMaiuscula(e.abilities[0].ability.name),types:e.types,weight:e.weight,height:e.height,abilities:e.abilities,stats:e.stats,urlType:e.types[0].type.url};l.textContent="".concat(e.height/10,"m"),m.textContent="".concat(e.weight/10,"kg"),r.textContent=e.mainAbilities;var o,a,t=document.getElementById("js-stats-hp"),n=document.getElementById("js-stats-attack"),s=document.getElementById("js-stats-defense"),c=document.getElementById("js-stats-sp-attack"),i=document.getElementById("js-stats-sp-defense"),d=document.getElementById("js-stats-speed");t.style.width="".concat(100<e.stats[0].base_stat?100:e.stats[0].base_stat,"%"),n.style.width="".concat(100<e.stats[1].base_stat?100:e.stats[1].base_stat,"%"),s.style.width="".concat(100<e.stats[2].base_stat?100:e.stats[2],"%"),c.style.width="".concat(100<e.stats[3].base_stat?100:e.stats[3].base_stat,"%"),i.style.width="".concat(100<e.stats[4].base_stat?100:e.stats[4].base_stat,"%"),d.style.width="".concat(100<e.stats[5].base_stat?100:e.stats[5].base_stat,"%"),console.log(e),(o=document.getElementById("js-types-pokemon")).innerHTML="",e.types.forEach(function(e){var t=document.createElement("li"),n=(o.appendChild(t),document.createElement("span"));n.classList="tag-type ".concat(e.type.name),n.textContent=primeiraLetraMaiuscula(e.type.name),t.appendChild(n)}),(a=document.getElementById("js-area-weak")).innerHTML="",axios({method:"GET",url:"".concat(e.urlType)}).then(function(e){e.data.damage_relations.double_damage_from.forEach(function(e){var t=document.createElement("li"),n=(a.appendChild(t),document.createElement("span"));n.classList="tag-type ".concat(e.name),n.textContent=primeiraLetraMaiuscula(e.name),t.appendChild(n)})})})}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");var areaTypes=document.getElementById("js-type-area"),areaTypesMobile=document.querySelector(".dropdown-select"),btnLoadMore=(axios({method:"GET",url:"https://pokeapi.co/api/v2/type"}).then(function(e){e.data.results.forEach(function(e,t){var n,o,a;t<18&&(o=document.createElement("li"),areaTypes.appendChild(o),(n=document.createElement("button")).classList="typer-filter ".concat(e.name),n.setAttribute("code-type",t+1),o.appendChild(n),(o=document.createElement("div")).classList="icon",n.appendChild(o),(a=document.createElement("img")).setAttribute("src","assets/icon-types/".concat(e.name,".svg")),o.appendChild(a),(o=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(o),a=document.createElement("li"),areaTypesMobile.appendChild(a),(n=document.createElement("button")).classList="typer-filter ".concat(e.name),n.setAttribute("code-type",t+1),a.appendChild(n),(o=document.createElement("div")).classList="icon",n.appendChild(o),(t=document.createElement("img")).setAttribute("src","assets/icon-types/".concat(e.name,".svg")),o.appendChild(t),(a=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(a),document.querySelectorAll(".typer-filter").forEach(function(e){e.addEventListener("click",filterByTypes)}))})}),document.getElementById("js-btn-load-more")),countPagination=10;function showMorePokemon(){listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=".concat(countPagination)),countPagination+=9}function filterByTypes(){var e=this.getAttribute("code-type"),t=document.getElementById("js-list-pokemons"),n=document.getElementById("js-btn-load-more"),o=document.querySelectorAll(".typer-filter"),a=document.getElementById("js-count-pokemons");t.innerHTML="",n.style.display="none";var s=document.querySelector(".s-all-info-pokemons").offsetTop;window.scrollTo({top:s+288,behavior:"smooth"}),o.forEach(function(e){e.classList.remove("active")}),this.classList.add("active"),e?axios({method:"GET",url:"https://pokeapi.co/api/v2/type/".concat(e)}).then(function(e){e=e.data.pokemon;a.textContent=e.length,e.forEach(function(e){e=e.pokemon.url;axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};t.image&&createCardPokemon(t.code,t.type,t.nome,t.image),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})})})}):(t.innerHTML="",listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"),n.style.display="block")}btnLoadMore.addEventListener("click",showMorePokemon);var btnSearch=document.getElementById("js-btn-search"),inputSearch=document.getElementById("js-input-search");function searchPokemon(){var e=inputSearch.value.toLowerCase();document.querySelectorAll(".typer-filter").forEach(function(e){e.classList.remove("active")}),axios({method:"GET",url:"https://pokeapi.co/api/v2/pokemon/".concat(e)}).then(function(e){areaPokemons.innerHTML="",btnLoadMore.style.display="none",countPokemons.textContent=1;var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};t.image&&createCardPokemon(t.code,t.type,t.nome,t.image),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})}).catch(function(e){e.response&&(areaPokemons.innerHTML="",btnLoadMore.style.display="none",countPokemons.textContent=0,exibirMensagemDeErro())})}function exibirMensagemDeErro(){Swal.fire({icon:"error",title:"Oops...",text:"Parece que não foram encontrados dados sobre o Pokémon pesquisado...",confirmButtonText:"Tente novamente"})}btnSearch.disabled=!0,btnSearch.addEventListener("click",searchPokemon),inputSearch.addEventListener("keyup",function(e){0<inputSearch.value.length?btnSearch.disabled=!1:btnSearch.disabled=!0,"Enter"===e.code&&searchPokemon()});var btnSweetAlert=document.getElementById("swal2-html-container");console.log(btnSweetAlert);