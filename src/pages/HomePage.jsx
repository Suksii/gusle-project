import { useState } from "react";
// import construction from "../assets/images/construction.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const HomePage = () => {

    const songs = [
        {
            title: 'Ropstvo sedam Bajagića',
            strofe: [
                < span >
                    Dragi Bože, na svemu ti hvala, < br />
                    Od kako je svijet postanuo, < br />
                    Nije veća žalost nastupila, <br />
                    No kad nesta sedam Bajagića, <br />
                    Sedam brata - sedam potomaka, <br />
                    Najstariji Bajagić Alija, <br />
                    A najmlađi Ibro serhatlija, <br />
                    U Zadaru, zadraskome banu, <br />
                    Evo ima sedam godin' dana, <br />
                    Od kako su pali u robiju, <br />
                    Hladan zindan načinio bane, <br />
                    U dubini dvanaj'st aršina, <br />
                    Ispleo je lese rakitove, <br />
                    Mjesto poda u zindan stavio, <br />
                    A u njega vodu navrnuo, <br />
                    Pa kroz lesu trava proniknula, <br />
                    Uljegle se zmije i akrepi, <br />
                    Akrep peca, a krv guje piju, <br />
                    Ne vidahu sunca ni mjeseca, <br />
                    Nit' vidahu dana bijeloga, <br />
                    Te ne znaju kad im danak dođe,
                </span >,
                <span>
                    Niti znaju kad im noćca prođe,<br />
                    Pa ne znaju ni kada je zima,<br />
                    Nit' se oni raduju ljetima,<br />
                    Kako znaju kad im zima dođe -<br />
                    Grudvaju se djeca sokacima,<br />
                    Tako znaju da je došla zima, <br />
                    Uleti im po grud'a snijega,<br />
                    Na mazgale, gore pod tavane,<br />
                    Kako znaju da je ljeto došlo -<br />
                    Beru cvijeće, nose i mirišu,<br />
                    Pa im bace tubu3 kroz mazgalu,<br />
                    Tako znaju da je ljetnje vrijeme.<br />
                    No tamnica teška dodijala,<br />
                    Više braća durati ne mogu,<br />
                    Ni izdržat' ledena zindana,<br />
                    Zacviliše svija sedam brata, <br />
                    U zindanu, zadarskome banu,<br />
                    Oni pište i noću i danju, <br />
                    Te ne daju spavati banici,<br />
                    Ni njezinom sinu Nikolici,<br />
                    Godina mu bješe i po dana, <br />
                    Obadvoje više nema sana,<br />
                    Pa otide u odaju banu,<br />
                    I strašno ga gospođe napanu,<br />
                    Hoće oči da izvade banu,<br />
                    Zašto Turke drži u zindanu,<br />
                    Kako ude, ponoć navalila,<br />
                </span>,
                <span>
                    I ovako banu govorila:<br />
                    "Gospodare, od Zadara glavo, <br />
                    Jesi l' noćas bar ti štogod spav'o?<br />
                    Ja nijesam ni oka sklopila,<br />
                    Ljuto me je glava dohvatila,<br />
                    Više pisku tzrpet' ne mogu,<br />
                    Od Turaka u zindanu tvome,<br />
                    Što su oni Bogu zgriješili,<br />
                    Što ih držiš u tvome zindanu,<br />
                    Nit' su dužni tebi, ni narodu,<br />
                    Nego puštaj Turke na slobodu,<br />
                    Ne bojiš se ljuta taksirata,"<br />
                    Nit se bojiš haka od Turaka,<br />
                    Sedam godin❜ što su u tamnicu, <br />
                    Ne bojiš se za svog Nikolicu,<br />
                    I Bog vidi da to pravo nije,<br />
                    Što ih mjesec i sunce ne grije,<br />
                    Može doći vakat i vrijeme,<br />
                    Da im platiš glavom sa ramena, <br />
                    Podaj njima haka od robije,<br />
                    Da te njihna kletva ne ubije,<br />
                    Neka idu zavičaju svome,<br />
                    Da ja mirno živim domu mome.<br />
                    Ako nećeš mene poslušati,<br />
                    Grdno ćeš se, bane, pokajati,<br />
                    Ostavit ću i tebe i dvorje,<br />
                    Vratit ću se ćaći na Zago<br />
                </span>,
                <span>
                    Pa ti njivi malog Nikolicu,<br />
                    I drž' dalje Turke u tamnicu!"<br />
                    Tako ona banu zaprijeti,<br />
                    Da će teško da mu se osveti,<br />
                    To mu reče, natrag se povrati,<br />
                    A sad ću vi za bana kazati:<br />
                    On ostade u svoju odaju,<br />
                    Na muke se velike turio,<br />
                    Jer je sinu skoro isprosio,<br />
                    Marijanu, najstarijem sinu,<br />
                    Iz Knjeginje - knjeginjsku Ružicu,<br />
                    A sa dvora bana iz primorja,<br />
                    I svadbu vade osgodio,<br />
                    Do svadbe je mjesec i po dana,<br />
                    U duboke misli udario,<br />
                    Sam se sobom bane razgovara,<br />
                    Pa doziva Dura tamničara:<br />
                    "Deder, Duro, dodi do tvog bana,<br />
                    I donesi ključe od zindana!"<br />
                    U mlađega pogovora nema,<br />
                    Evo dođe banu u odaju,<br />
                    I donese ključe u naruč'e, <br />
                    Bane pozva još dva pratioca,<br />
                    Pod oružje što duvaju bana,<br />
                    Ban najprvi, pa Đuro za njima,<br />
                    A za njima idu dva soldata,<br />
                    Te dođoše zindanu na vrata,<br />
                    Prva vrata oni otključali,<br />
                    Izbrojali devet stepenica<br />,
                </span>,
                <span>
                    I na treća vrata silazili,<br />
                    Ta poslednja vrata otključaše,<br />
                    Zadnjih devet broje stepenica,<br />
                    Dok se njima ukaza tamnica, <br />
                    Upališe mume i čirake,"<br />
                    Ugledaše Turke u budžake,<br />
                    Kako bane u tamnicu sjede,<br />
                    Kod njih stade, pa im pomoć dade,<br />
                    Šest je brata pomoć prihvatilo,<br />
                    Sedmi ne htje glavu da okrene,<br />
                    Niti mrdnu rukom od ramena,<br />
                    Nit' pomjeri nogu od koljena,<br />
                    A valja ga reći po imenu:<br />
                    To gazija - Bajagić Alija,<br />
                    No mu veli od Zadara bane:<br />
                    "Još si azgin Ture sa Krajine,<br />
                    Zašto meni pomoć ne prihvati?"<br />
                    Alija mu na to odgovara:<br />
                    "Ne mogu ti pomoć prihvatiti,<br />
                    Jer nijesi, bane, zaslužio,<br />
                    Evo sedam punijeh godina,<br />
                    Kako mlađan trunim u zindanu,<br />
                    Još ni jednom nijesi navratio,<br />
                    Da pogledaš jesmo l' u životu,<br />
                    Il' da naše procijeniš glave,<br />
                    Ili da ih skineš sa ramena,<br />
                    I još ću ti nešto kazivati,
                </span>,
                <span>
                    Što ti neću pomoći primiti,<br />
                    Zadar mi je dinu i imanu,<br />
                    10 Pokorit' se krstu i dušmanu!"<br />
                    Na to njemu bane progovara:<br />
                    "Evo jutros dodo' u tamnicu,<br />
                    Da ve pitam što je vama krivo,<br />
                    Što cvilite u konaku mome,<br />
                    Koja vi je od Boga nevolja,<br />
                    Te pištite u ovu odaju,<br />
                    Ne date mi djeci da spavaju,<br />
                    Ili ste gladni ili vode žedni,<br />
                    Ili Bosne i Krajine željni?<br />
                    Ako ste se kuće zaželjeli,<br />
                    Jutros ću vi glave cijenjati,<br />
                    O Turčine, Bajagić Alija,<br />
                    Hoćeš dati što ću zaiskati,<br />
                    Da te s braćom pustim iz zindana?"<br />
                    Odgovara Bajagič Alija:<br />
                    "Hoću, bane, ada zašto neću,<br />
                    kako neću ja za svoju glavu,<br />
                    i za glavu do šest mojih brata?<br />
                    Veliko je bogastvo ostalo:<br />
                    Ostala su sela i čipčije,"<br />
                    A ostali hani i dućani,<br />
                    Osta blaga i za crna vraga!<br />
                    Sve ću blago i bogastvo dati,<br />
                    Što ćeš meni jutros zaiskati,
                </span>,
                <span>
                    Sal nas pusti iz ledna zindana,<br />
                    Da se i vi naspavate sana!"<br />
                    Sad ban stade da cijeni Turke:<br />
                    Prvo - traži tovar i po zlata<br />
                    Pa da pusti sedam milih brata,<br />
                    Drugo - traži vranca Alijina,<br />
                    Što ga nema cijela Krajina, <br />
                    Treće - traži njihovo oružje,<br />
                    Što su braća sa sobom nosili,<br />
                    Kad su u boj s Kaurima bili,<br />
                    A poslednje traži u tamnicu,<br />
                    Da mu dade sestru jedinicu,<br />
                    Kad sve stigne do Zadarskog bana,<br />
                    Onda će ih pustit' iz zindana!"<br />
                    Kad to začu Bajagić Alija,<br />
                    On se banu kroz zube nasmija,<br />
                    I govori svezan u zindanu:<br />
                    "Pridi bliže da se zagrlimo!"<br />
                    San mislaše, istina bijaše,<br />
                    Primače se bliže do Alije,<br />
                    Do Alije - careve gazije,<br />
                    U zindanu halke13 uzidane,<br />
                    A za halke ruke zavezane,<br />
                    Oko vrata sindžir - gvožđe teško,<br />
                    Ono mjeri četrdeset oka,<br />
                    A sindžir vezan na halkama,<br />
                    Šala nije zulum od dušmana,
                </span>
            ]
        }
    ]

    const [shownIndex, setShownIndex] = useState(0);

    const showNext = () => {
        if (shownIndex !== songs.length - 1) {
            setShownIndex(prev => prev + 1)
        } else {
            setShownIndex(0)
        }
    }
    const showPrev = () => {
        if (shownIndex !== 0) {
            setShownIndex(prev => prev - 1)
        } else {
            setShownIndex(titles.length - 1)
        }
    }

    const showIndex = (index) => {
        setShownIndex(index);
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900 bg-cover flex flex-col justify-center bg-center relative px-10">
            <MdArrowBackIos className="absolute top 1/2 translate-y-1/2 left-6 text-teal-100 cursor-pointer hover:text-teal-300 duration-300" size={38} onClick={showPrev} />
            <MdArrowForwardIos className="absolute top 1/2 translate-y-1/2 right-6 text-teal-100 cursor-pointer hover:text-teal-300 duration-300" size={38} onClick={showNext} />
            <motion.h2 key={shownIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }} className="relative text-teal-100 text-2xl font-bold py-8">{songs[shownIndex].title}</motion.h2>
            <div className="w-full mx-auto flex justify-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-12">
                    {songs[shownIndex].strofe.map((strofa, index) => (
                        <motion.p key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 1 }}
                            className="text-teal-100 text-lg md:text-xl leading-relaxed font-semibold border-l-4 border-teal-300 pl-4">
                            {strofa}
                        </motion.p>
                    ))}
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
                <div className="flex gap-1 items-center">
                    {songs.map((_, index) => (
                        <div className={`w-12 h-2 ${shownIndex === index ? 'bg-teal-950' : 'bg-teal-100'} cursor-pointer duration-1000`} key={index} onClick={() => showIndex(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;