// get all the fields in the variables we need to render on ui;
// add event listener on sraech button;
// on click - 
// get the input value set it as end point of the fetch url;
// if we got respnonse, covvert the response in to data,
// render the data on Ui, 
// else - no rsponse, 
// alert data not found

const searchInput = document.getElementById('search-input');
const sraechBtn = document.getElementById('search-button');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const crWeight = document.getElementById('weight');
const crheight = document.getElementById('height');
const types = document.getElementById('types');
const specialName = document.getElementById('special-name');
const specialDesc = document.getElementById('special-description');
const HP = document.getElementById('hp');
const attack = document.getElementById('attack');
const spAttack = document.getElementById('special-attack');
const defense = document.getElementById('defense');
const spDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const getData = async () => {
    let nameOrID = searchInput.value.toLowerCase();
    try {
        const respnonse = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrID}`);
        if (!respnonse.ok) throw new Error('Not found');

        const data = await respnonse.json();
        console.log(data);
        // rendering data on dom
        creatureName.textContent = `${data.name}`;
        creatureId.textContent = `#${data.id}`;
        crWeight.textContent = `Weight: ${data.weight}`;
        crheight.textContent = `Height: ${data.height}`;
        
        types.innerHTML = '';
        if (data.types.length === 1) {
            types.innerHTML = `<span class="type">${data.types[0].name}</span>`
        } else {
            types.innerHTML = `<span class="type">${data.types[0].name}</span><span class="type">${data.types[1].name}</span>`;
        }
        specialName.textContent = `${data.special.name}`;
        specialDesc.textContent = `${data.special.description}`;
        HP.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        spAttack.textContent = `${data.stats[3].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        spDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;
        //clean prvious types and input
        searchInput.value = '';
    } catch (error) {
        alert('Creature not found');
    }
}

sraechBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
})