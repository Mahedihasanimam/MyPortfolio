
const SkilCard = ({ icon, name }) => {
    return (
        <div className="lg:p-12 md:p-10 p-8 dark:border-2 dark:border-gray-400  rounded-lg hover:cursor-pointer hover:bg-black bg-[#262e37] text-center transition duration-1000 ease-in-out" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <strong className="flex items-center justify-center hover:scale-110 transition duration-950 ease-in-out">{icon}</strong>
            <span className="lg:text-4xl md:text-3xl text-2xl font-bold flex justify-center items-center">{name}</span>
        </div>
    );
};

export default SkilCard;
