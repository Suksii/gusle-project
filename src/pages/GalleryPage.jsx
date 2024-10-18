import Guslar1 from '../assets/guslar1.jpg'
import Guslar2 from '../assets/guslar2.jpg'
import Guslar3 from '../assets/guslar3.jpg'
import Guslar4 from '../assets/guslar4.jpg'
import Guslar5 from '../assets/guslar5.jpg'
import Guslar6 from '../assets/guslar6.jpg'
import Guslar7 from '../assets/guslar7.jpg'
import Guslar8 from '../assets/guslar8.jpg'
import { motion } from 'framer-motion'


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

    return (
        <div className="gallery px-3 gap-3">
            {
                gallery.map((item, index) => (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="pics mb-3 cursor-pointer hover:filter hover:brightness-75" key={index}>
                        <img src={item.img} alt='' className="w-full object-cover" />
                    </motion.div>
                ))
            }
        </div>
    )
}

export default GalleryPage;