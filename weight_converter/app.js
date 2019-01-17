const stoneInput = document.querySelector('#stone > input');
const poundsInput = document.querySelector('#pounds > input');
const kilosInput = document.querySelector('#kilos > input');

const roundNum = (num) => {
    return Math.round(num*100)/100;
};

const stoneTopoundsAndKilos = () => {
    const sWeight = parseFloat(stoneInput.value);
    const pWeight = sWeight * 14;
    const kWeight = sWeight * 6.350293;
    poundsInput.value = roundNum(pWeight);
    kilosInput.value = roundNum(kWeight);
};

const poundsToStoneAndKilos = () => {
    const pWeight = parseFloat(poundsInput.value);
    const sWeight = pWeight/14;
    const kWeight = pWeight * 0.45359237;
    stoneInput.value = roundNum(sWeight);
    kilosInput.value = roundNum(kWeight);
};

const kilosToPoundsAndStone = () => {
    const kWeight = parseFloat(kilosInput.value);
    const sWeight = kWeight/6.35;
    const pWeight = kWeight * 2.20462;
    stoneInput.value = roundNum(sWeight);
    poundsInput.value = roundNum(pWeight);
};

const main = () => {
    stoneInput.addEventListener('input', stoneTopoundsAndKilos);
    poundsInput.addEventListener('input', poundsToStoneAndKilos);
    kilosInput.addEventListener('input', kilosToPoundsAndStone);
};

main();


