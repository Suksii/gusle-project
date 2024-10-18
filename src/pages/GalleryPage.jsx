import { useState } from 'react';
import Guslar1 from '../assets/guslar1.jpg';
import Guslar2 from '../assets/guslar2.jpg';
import Guslar3 from '../assets/guslar3.jpg';
import Guslar4 from '../assets/guslar4.jpg';
import Guslar5 from '../assets/guslar5.jpg';
import Guslar6 from '../assets/guslar6.jpg';
import Guslar7 from '../assets/guslar7.jpg';
import Guslar8 from '../assets/guslar8.jpg';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const GalleryPage = () => {

    const gallery = [
        {
            title: '',
            img: Guslar3,
            source: ''
        },
        {
            title: '',
            img: Guslar8,
            source: ''
        },
        {
            title: '',
            img: Guslar5,
            source: ''
        },
        {
            title: '',
            img: Guslar4,
            source: ''
        },
        {
            title: '',
            img: Guslar6,
            source: ''
        },
        {
            title: '',
            img: Guslar2,
            source: ''
        },
        {
            title: '',
            img: Guslar1,
            source: ''
        },
        {
            title: '',
            img: Guslar7,
            source: ''
        },
    ]

    const [fullImage, setFullImage] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);


    const handleImage = (index) => {
        setImageIndex(index);
        setFullImage(true);
    }

    const showPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setImageIndex(prevIndex => prevIndex === 0 ? gallery.length - 1 : prevIndex - 1);
            setIsTransitioning(false);
        }, 500);
    };

    const showNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setImageIndex(prevIndex => prevIndex === gallery.length - 1 ? 0 : prevIndex + 1);
            setIsTransitioning(false);
        }, 200);
    }

    return (
        <>
            <div className={`h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-teal-950 transition-all duration-300 ease-in-out transform ${fullImage ? 'opacity-100 visible scale-0.5' : 'opacity-0 invisible scale-0'} z-50`}>
                <div className="absolute right-0 top-0 text-teal-100 p-3 cursor-pointer" onClick={() => setFullImage(false)}>
                    <IoMdClose size={24} />
                </div>
                <div className="cursor-pointer text-teal-100 hover:text-teal-400 absolute top-1/2 -translate-y-1/2 left-0 p-4 duration-300" onClick={showPrev}>
                    <MdArrowBackIos size={50} />
                </div>
                <div className="cursor-pointer text-teal-100 hover:text-teal-400 absolute top-1/2 -translate-y-1/2 right-0 p-4 duration-300" onClick={showNext}>
                    <MdArrowForwardIos size={50} />
                </div>
                <img
                    src={gallery[imageIndex].img}
                    className={`w-auto max-w-full mx-auto h-auto max-h-screen py-4 duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
            <div className="gallery p-3 gap-3">
                {gallery.map((item, index) => (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="pics mb-3 cursor-pointer hover:filter hover:brightness-75"
                        key={index}
                        onClick={() => handleImage(index)}>
                        <img src={item.img} alt='' className="w-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default GalleryPage;