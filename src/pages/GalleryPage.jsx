import { useEffect, useState } from "react";
import Guslar1 from "../assets/guslar1.jpg";
import Guslar2 from "../assets/guslar2.jpg";
import Guslar3 from "../assets/guslar3.jpg";
import Guslar4 from "../assets/guslar4.jpg";
import Guslar5 from "../assets/guslar5.jpg";
import Guslar6 from "../assets/guslar6.jpg";
import Guslar7 from "../assets/guslar7.jpg";
import Guslar8 from "../assets/guslar8.jpg";
import Guslar10 from "../assets/guslar10.jpg";
import Guslar11 from "../assets/guslar11.jpg";
import Guslar12 from "../assets/guslar12.jpg";
import Guslar13 from "../assets/guslar13.jpg";
import Gusle15 from "../assets/gusle15.jpg";
import Gusle16 from "../assets/gusle16.jpg";
import Gusle17 from "../assets/gusle17.jpg";
import Gusle18 from "../assets/gusle18.jpg";
import Gusle19 from "../assets/gusle19.jpg";
import Gusle20 from "../assets/gusle20.jpg";

import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useSwipeable } from "react-swipeable";

const GalleryPage = () => {
  const gallery = [
    {
      title: "Šućo Nurković",
      img: Guslar3,
      source: "",
    },
    {
      title: "Zahit Llaić",
      img: Guslar8,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar5,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar4,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar6,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar2,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar1,
      source: "",
    },
    {
      title: "Šućo Nurković",
      img: Guslar7,
      source: "",
    },
    {
      title: "Avdo Međedović",
      img: Guslar10,
      source: "",
    },
    {
      title: "Avdo Međedović",
      img: Guslar11,
      source: "",
    },
    {
      title: "Avdo Međedović",
      img: Guslar12,
      source: "",
    },
    {
      title: "Avdo Međedović",
      img: Guslar13,
      source: "",
    },
    {
      title: "",
      img: Gusle15,
      source: "Neir Čuturić",
    },
    {
      title: "",
      img: Gusle16,
      source: "Neir Čuturić",
    },
    {
      title: "",
      img: Gusle17,
      source: "Neir Čuturić",
    },
    {
      title: "",
      img: Gusle18,
      source: "Neir Čuturić",
    },
    {
      title: "",
      img: Gusle19,
      source: "Neir Čuturić",
    },
    {
      title: "",
      img: Gusle20,
      source: "Neir Čuturić",
    },
  ];

  const [fullImage, setFullImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImage = (index) => {
    setImageIndex(index);
    setFullImage(true);
  };

  const showPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const showNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setImageIndex((prevIndex) =>
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 200);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrev(),
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning]);

  return (
    <>
      <div
        {...handlers}
        className={`h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-teal-950 transition-all duration-300 ease-in-out transform ${
          fullImage
            ? "opacity-100 visible scale-0.5"
            : "opacity-0 invisible scale-0"
        } z-50`}
      >
        <div
          className="absolute right-0 top-0 text-teal-100 p-3 cursor-pointer"
          onClick={() => setFullImage(false)}
        >
          <IoMdClose size={24} />
        </div>
        <div
          className="cursor-pointer text-teal-100 hover:text-teal-400 absolute top-1/2 -translate-y-1/2 left-0 p-4 duration-300 z-40"
          onClick={showPrev}
        >
          <MdArrowBackIos size={50} />
        </div>
        <div
          className="cursor-pointer text-teal-100 hover:text-teal-400 absolute top-1/2 -translate-y-1/2 right-0 p-4 duration-300 z-40"
          onClick={showNext}
        >
          <MdArrowForwardIos size={50} />
        </div>
        <div className="relative">
          <img
            src={gallery[imageIndex].img}
            alt={gallery[imageIndex].title}
            className={`w-auto max-w-full mx-auto py-4 h-auto max-h-screen duration-300 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`absolute bottom-0 right-0 p-3 px-6 mb-4 bg-teal-600 bg-opacity-70 text-teal-100 font-semibold ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {gallery[imageIndex].title && <p>{gallery[imageIndex].title}</p>}
            {gallery[imageIndex].source && (
              <p className="flex flex-col justify-center items-center">
                <span>Izvor fotografije:</span>
                <span>{gallery[imageIndex].source}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="gallery p-3 gap-3">
        {gallery.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="pics relative mb-3 cursor-pointer hover:filter hover:brightness-75"
            key={index}
            onClick={() => handleImage(index)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 right-0 p-3 px-6 bg-teal-600 bg-opacity-70">
              {item.title && (
                <p className=" text-teal-100 font-semibold">{item.title}</p>
              )}
              {item.source && (
                <p className="flex flex-col items-center justify-center text-teal-100 font-semibold">
                  <span>Izvor fotografije: </span>
                  <span>{item.source}</span>
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
