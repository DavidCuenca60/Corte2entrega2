function getCharacterIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function fetchCharacterDetails(id) {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
        .then(response => response.json())
        .then(data => renderCharacterDetails(data))
        .catch(error => console.error("Error al obtener el personaje:", error));
}

function renderCharacterDetails(character) {
    const container = document.getElementById("character-detail-container");

    container.innerHTML = `
    <div>
        <div>

            <header>
        
            <div class="encabezado">
  
            <div class="imagen">
            <img
              class="logo"
              src="pngfind.com-goku-ssj-dios-azul-4488863.png"
              alt=""     
            />
            </div>
  
            <div class="navegation">
            <ul class="nav-items">
              <li>
                <a href="Main_page.html">HOME</a>
              </li>
              <li>
                <a href="Perfil favoritos.html">MIS FAVORITOS</a>
              </li>
              <li>
                <a href="#miperfil">MI PERFIL</a>
              </li>
            </div>
  
            </div>
  
            </header>

            <div class="inicio">
      <div class="regreso">
        <div class="reg">
          <a href="Main_page.html"><img src="Arrow left-circle.png" alt="User Image" class="left-im"></a>
        </div>
        
      </div>

      <br>
      <br>
      <div class="NAME">
        <div class="gok">
          <h1>${character.name}</h1>
        </div>  
      </div>
    </div>

    <br>
      

      <div class="inf">

        <div class="recuadro">
          <div class="nom">
            <div class="nombre">
              <h2>INFORMACIÓN</h2>
            </div>
        </div>
        <div class="cuadro">
          
          
          
    
          <div class="tex">
            <div class="texto">
              <h3>
                ${character.name}<br>
                ${character.race} - ${character.gender}<br>
                Base KI: ${character.ki.toLocaleString()}<br>
                Total KI:<br>
                ${character.maxKi}<br>
                Afilliation: ${character.affiliation}
              </h3>
            </div>
            </div>
        </div>
        <br>
        <div class="bot">
          <div class="botoned">
            <h1>AGREGAR <br>
            A FAVORITOS</h1>
          </div>
        </div>
        
        <div class="bat">
          <label class="fav-label">
          <input type="checkbox" id="favCheckbox" class="fav-checkbox">
          <i class="fa fa-heart"></i></label>
        </div>


        
        </div>
  
  
        
        <div class="card-list-DOS">
                
          <div class="card-item-BULMA">
              <img src="${character.image}" alt="User Image" class="user-image-BULMA">
              <div class="navegation-BULMA">
                  
              </div>
          </div>

          <div class="recuadro-dos">
            <div class="nom-dos">
              <div class="nombre-dos">
                <h2>DESCRIPCIÓN</h2>
              </div>
          </div>
          <div class="cuadro-dos">
            
            
            
      
            <div class="tex-dos">
              <div class="texto-dos">
                <p>
                  ${character.description}
                </p>
              </div>
              </div>
          </div>
          <br>
        
  
        </div>
       
        <br>
  
        </div>
      </div>
            

            
            
            
        
    </div>
`;
}


function toggleFavorite(id, character) {
    const storedFavs = JSON.parse(localStorage.getItem("favoritos")) || [];

    const isFav = storedFavs.find(fav => fav.id == id);

    let updatedFavs;

    if (isFav) {
        updatedFavs = storedFavs.filter(fav => fav.id != id);
    } else {
        updatedFavs = [...storedFavs, character];
    }

    localStorage.setItem("favoritos", JSON.stringify(updatedFavs));
}

function fetchCharacterDetails(id) {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
        .then(response => response.json())
        .then(data => {
            renderCharacterDetails(data);
            document.getElementById("favCheckbox").addEventListener("change", () => {
                toggleFavorite(id, {
                    id: data.id,
                    name: data.name,
                    image: data.image
                });
            });

            
            const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
            const isFav = favs.some(fav => fav.id == id);
            document.getElementById("favCheckbox").checked = isFav;
        })
        .catch(error => console.error("Error al obtener el personaje:", error));
}







document.addEventListener("DOMContentLoaded", function () {
    const id = getCharacterIdFromUrl();
    if (id) {
        fetchCharacterDetails(id);
    }
});