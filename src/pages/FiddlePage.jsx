import { motion } from "framer-motion";
import Gusle1 from "../assets/gusle14.png";

const FiddlePage = () => {
  return (
    <div className="">
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-teal-100 text-2xl font-bold p-4 uppercase"
      >
        Gusle kao simbol bosnjacke nacije u crnoj gori
      </motion.h2>
      <motion.p
        className="w-[90%] lg:w-1/3 mx-auto py-8 flex items-center text-teal-100 text-center text-xl leading-9"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Gusle, tradicionalni balkanski gudački instrument, ima duboko ukorenjenu
        simboliku u narodnoj kulturi Crne Gore, kao i kod Bošnjaka. Iako je
        gusle često povezivana sa epovima i epskom tradicijom Srba i Crnogoraca,
        ona je značajna i za Bošnjake u Crnoj Gori, gjde se koristi kao simbol
        njihove kulturne baštine i identiteta.
      </motion.p>
      <div className="flex flex-col lg:flex-row p-4">
        <motion.p
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] lg:w-1/4 mx-auto flex items-center text-teal-100 text-center lg:text-start text-xl leading-9"
        >
          Bošnjaci u Crnoj Gori koriste gusle da bi prenosili svoju istoriju,
          narodne pesme i priče koje često slave važne ličnosti i događaje iz
          njihove prošlosti. Gusle u bošnjačkom kontekstu često prenose poruke o
          otporu, borbi za pravdu i očuvanju vjere i tradicije, ali i o
          koegzistenciji sa drugim narodima u multietničkom okruženju.
        </motion.p>
        <div className="py-2 md:py-0">
          <img
            src={Gusle1}
            alt="Gusle"
            className="w-[100px] mx-auto lg:w-[140px] lg:h-full"
          />
        </div>
        <motion.p
          className="w-[90%] lg:w-1/4 mx-auto flex items-center text-teal-100 text-center lg:text-start text-xl leading-9"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Za Bošnjake u Crnoj Gori, gusle su postale simbol nacionalnog
          identiteta jer su kroz ovaj instrument mogli da sačuvaju dio svoje
          kulturne i istorijske baštine, posebno tokom perioda kada su bili
          suočeni sa izazovima očuvanja svog identiteta u širem balkanskom
          kontekstu. Pored toga, gusle su korišćene u islamskim vjerskim
          pjesmama i sevdalinkama, što ih još više povezuje sa bošnjačkom
          tradicijom.
        </motion.p>
      </div>
      <motion.p
        className="w-[90%] lg:w-1/3 mx-auto py-8 flex items-center text-teal-100 text-center text-xl leading-9"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Iako je gusle uopšteno više poznata kao simbol crnogorske i srpske
        tradicije, u bošnjačkom narodu Crne Gore ona je alat kojim se čuva i
        izražava kulturni i nacionalni identitet, pokazujući njenu univerzalnost
        i značaj za različite etničke grupe.
      </motion.p>
    </div>
  );
};

export default FiddlePage;
