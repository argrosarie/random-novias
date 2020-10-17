const messages = [
    "Gimena", 
    "Maiara",
    "Andrea",
    "Pochi",
    "Fernanda",
    "Carla",
    "Camila",
    "Milagros",
    "Lucre",
    "Fiama"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};
