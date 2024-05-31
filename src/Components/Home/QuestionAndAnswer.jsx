import { useState } from "react";

const QuestionAndAnswer = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'Whats the difference between painting and drawing?', color: 'green', 
        description: 'Drawing uses lines and shading with pencils, while painting involves applying pigment with brushes.'},
        { title: 'What basic materials do I need?', color: 'sky', description: 'Drawing: pencils, paper, erasers. Painting: brushes, paint, canvas'},

        { title: 'How do I choose colors?', color: 'purple', description: 'Consider mood and color theory. Start with a limited palette.'},

        { title: 'How do I price my artwork? ', color: 'amber', description: 'Consider materials, time, size, and market demand. Research similar pieces. '},
        { title: 'How do I overcome creative blocks?', color: 'red', description: 'Take breaks, try new subjects or mediums, seek inspiration, and dont fear mistakes.'},
        { title: 'How do I get noticed?', color: 'green', description: 'Build an online presence, participate in exhibitions, network with other artists.'}
    ];

    
    return (
       <div className="bg-blue-200 pt-10 mt-20 rounded-xl pb-10 px-10">
          <h2 className="mx-auto text-center text-4xl lg:my-20 poppinsFont font-bold">Question and Answer</h2>
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  md:p-6 px-10  mt-10">
         <div>
                <img src="https://i.ibb.co/1Jb4RgY/faq.png" alt="faq_image" />
            </div>
            <div className="space-y-8 ">
            {datas?.map((data, idx) => (
                <div key={idx} className="md:mt-5">
                    {/* header / Title */}
                    <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${ idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'} border-l-[3px] cursor-pointer`}>
                        <div className="flex items-center">
                            <span>
                                <svg className={`mr-4 ${ idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900': 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                            </span>
                            <h4
                                className={`${ idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl`}>
                                {data.title}
                            </h4>
                        </div>
                    </div>
                    {/* body / content  */}
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${ idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-50 border-red-500' : 'text-orange-900 bg-orange-50 border-orange-500'} `}>
                                {data?.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
            
        </div>
       </div>
    );
};

export default QuestionAndAnswer;