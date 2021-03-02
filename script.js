//api

/*https://restcountries.eu/rest/v2/all?fields=name;population;flag*//*API*/

const searchInput=document.getElementById('search');
const results=document.getElementById('results');

let countries;
let searchTerm="";//linput qui ira chercher les pays

//API REQUEST

const fetchCountries = async()=>{//function qui va chercher les pays

    countries=await fetch(
'https://restcountries.eu/rest/v2/all?fields=name;population;flag'


    ).then(res=>res.json());

    //console.log(countries)
};
//fetchCountries();

//fonction montre moi les pays

const showCountries=async()=> {

    await fetchCountries();


results.innerHTML=(

countries
.filter (country=>country.name.toLowerCase().includes(searchTerm.toLowerCase()  //chaque elements de contries s'appelera country et onn ramene tous les en minuscule

))

.map(country=>(//map =for each countrty=chaque pays on va les afficher 
`

<li class="country-item">
<img class="country-flag" src="${country.flag}"/>
<h3 class="country-name">"${country.name}"</h3>
<div class="country-info>
<h2 class="country-population">${numberWithSpace(country.population)}</h2>
<h5 class="country-popumation-text">Habitants</h5>
</div>
</li>


`


)).join('')//pour eviter les virgules

);

};

showCountries();

// INPUT SETUP/search
//avec l"evenment on recupere la valeur de l'input
searchInput.addEventListener('input',(e)=> {searchTerm= e.target.value
//console.log(e.target.value)
//des qu'on tape quelque chose dans l'input on nrelance la recherche
showCountries()
})//e.target.value=a ce quon tape dans linput

function numberWithSpace(x){

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' , ');// tous les 3 chiffres on met une virgule
}
