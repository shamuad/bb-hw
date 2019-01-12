// Write your JS here
const hero = {
    name: "expmlstring",
    heroic: true,
    inventory: [{
        type: 'gun',
        damage: 5
    }],
    health: 10,
    weapon: {
        type: "sword",
        damage: 2
    }
}

function rest(heroObj) {
    heroObj.health = 10;
    return heroObj;
}

function pickUpItem(heroLike, obj) {
    heroLike.inventory.push(obj);
}

function equipWeapon(heroLike) {
    if (heroLike.inventory.length === 0) {
        return false;
    } else {
        heroLike.weapon = heroLike.inventory[0];
    }
}

function clickImgRest() {
    const hereObj = hero;
    rest(hereObj);
}

function clickImgPickUpItem() {
    const weapon = {
        type: "dagger",
        damage: 2
    }
    pickUpItem(hero, weapon);
}

function clickImgEquipWeapon() {
    equipWeapon(hero);
}