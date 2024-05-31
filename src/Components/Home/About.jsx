
const About = () => {
    return (
        <>
            <h2 className="text-4xl poppinsFont font-bold text-center mb-10">About Eureka Craft and Art</h2>
        <div className="flex lg:flex-row flex-col lg:gap-20 p-8">
            <div>
                <img className="hover:scale-105 hover:border-secondary hover:border-2 hover:p-2 transition-all " src="https://i.ibb.co/q0v358c/Clay-made-Pottery.jpg" alt="" />
            </div>
            <div className="lg:w-1/2">
                <p className="lg:text-2xl text-xl  lg:block hidden mt-3 text-gray-500">As a team of four female founders, we started Aloisia Beauty to pursue a shared passion: creating clean, effective, affordably luxurious skincare that leads to real results. We believe in high-performing formulas that can be used on all skin types, while also targeting individual concerns to help everyone and anyone achieves their dream skin.
We took the leap to develop our own brand after spending our careers building others across the fashion, celebrities, science wellness industries. As fate would have it, our friend Jacob, a scientist from South Korea, was interested in joining our mission as a founding partner and introduced us to the Korean Beauty Philosophy. Representing various ethnicities.</p>
                <p className="text-xl lg:hidden block p-2 text-gray-500">As a team of four female founders, we started Aloisia Beauty to pursue a shared passion: creating clean, effective, affordably luxurious skincare that leads to real results. We believe in high-performing formulas that can be used on all skin types, while also targeting individual concerns to help everyone and anyone achieves their dream skin.</p>
            </div>
            </div>
        </>
        
    );
};

export default About;