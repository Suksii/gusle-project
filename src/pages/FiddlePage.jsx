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
      <div className="flex flex-col lg:flex-row p-4">
        <p className="w-[90%] lg:w-1/4 mx-auto flex items-center text-teal-100 text-center lg:text-start text-xl leading-9">
          Bošnjaci u Crnoj Gori koriste gusle da bi prenosili svoju istoriju,
          narodne pesme i priče koje često slave važne ličnosti i događaje iz
          njihove prošlosti. Gusle u bošnjačkom kontekstu često prenose poruke o
          otporu, borbi za pravdu i očuvanju vjere i tradicije, ali i o
          koegzistenciji sa drugim narodima u multietničkom okruženju.
        </p>
        <div className="">
          <img
            src={Gusle1}
            alt="Gusle"
            className="w-[100px] mx-auto lg:w-[140px] lg:h-full py-6"
            style={{ flex: 1 }}
          />
        </div>
        <p className="w-[90%] lg:w-1/4 mx-auto flex items-center text-teal-100 text-center lg:text-start text-xl leading-9">
          Za Bošnjake u Crnoj Gori, gusle su postale simbol nacionalnog
          identiteta jer su kroz ovaj instrument mogli da sačuvaju dio svoje
          kulturne i istorijske baštine, posebno tokom perioda kada su bili
          suočeni sa izazovima očuvanja svog identiteta u širem balkanskom
          kontekstu. Pored toga, gusle su korišćene u islamskim vjerskim
          pjesmama i sevdalinkama, što ih još više povezuje sa bošnjačkom
          tradicijom.
        </p>
      </div>
    </div>
  );
};

export default FiddlePage;
