
const SkilCard = ({ icon, name }) => {
    return (
        <div className="p-12 rounded-lg hover:cursor-pointer hover:bg-green-500 bg-[#262e37] text-center transition duration-950 ease-in-out">
            <strong className="flex items-center justify-center hover:scale-110 transition duration-950 ease-in-out">{icon}</strong>
            <span className="text-4xl font-bold flex justify-center items-center">{name}</span>
        </div>
    );
};

export default SkilCard;
