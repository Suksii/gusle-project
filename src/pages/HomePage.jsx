import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const HomePage = () => {

    const songs = [
        {
            title: 'Ropstvo sedam Bajagića',
            author: 'Šućo Nurković',
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
                </span>,
                <span>
                    Tako drži sedam godin' dana,<br />
                    Škripe njemu zubi u vilice,<br />
                    A drhte mu ruke i mišice,<br />
                    Vjeđe guste na obraz spustio,<br />
                    A krvave oči zamutio,<br />
                    Pod brkove zube iskesio,<br />
                    Da ban pride samo malo bolje,<br />
                    On zubima šćaše da ga kolje!<br />
                    Kad Alija takvog bana vide,<br />
                    On ne smjede dalje da mu pride,<br />
                    Gleda bane careve gazije,<br />
                    Al' ne smije prići do Alije,<br />
                    Alija se trže iz julara,<br />
                    Da dohvati bana od Zadara,<br />
                    Iako su ruke zavezane,<br />
                    On zubima htjede zaklat' bana,<br />
                    Sad ovako njemu progovara:<br />
                    "Kaurine, primakni se bliže,<br />
                    Da ti dam što si zatražio,<br />
                    Sve ću dati što si zatražio,<br />
                    Ne dam Ajku za života moga,<br />
                    A znaš, Vlahu, ne znala te majka, <br />
                    Da hrišćanu ne pripada Ajka,<br />
                    Nit' je bilo, niti biti može,<br />
                    Da pogazim dina i imana,<br />
                    I da dadem sestru za dušmana,<br />
                    Nek mi ode sa ramena glava,<br />
                    Ja svakako moram umrijeti,<br />
                    Al'Akjunu ti nećeš uzeti!"
                </span>
            ]
        },
        {
            title: 'Đerzelez Alija',
            author: 'Šućo Nurković',
            strofe: [
                <span>
                    Rodi majka sina jedihnika,<br />
                    Pa sakupi hodže i hadžije,<br />
                    Te momčetu ime nadjenuše, <br />
                    I ezana hodže izučiše,<br />
                    Uz ezan mu ime govorahu,<br />
                    Alija ga po imenu zvahu.<br />
                    Hrani majka sina jedihnika,<br />
                    Hranila ga punih osam ljeta,<br />
                    I deveto, pa se razbolješe,<br />
                    Bolovaše tri mjeseca dana,<br />
                    Tada Aljo ostade bez baba,<br />
                    Druge hefte umrije i mati,<br />
                    Osta Aljo siroče da pati.<br />
                    Jesti mora, a hljeba ne ima,<br />
                    Naćve62 su mu zelena planina,<br />
                    Lov lovio, po gori hodio,<br />
                    A sve lovi srne i košute,<br />
                    Sam se hrani bez baba i majke,<br />
                    Kroz planinu prolaze hajduci,<br />
                    Il' prolaze brojni karavani,<br />
                    S tovarima silnih trgovaca,
                </span>,
                <span>
                    Te se Aljo skriva prolaznika,<br />
                    Čare nije, a ni milo nije,<br />
                    Trgovcima Aljo se pridruži,<br />
                    Put putuje, ali ne zna kuda.<br />
                    Kad dođoše Žirču i Klisuri,<br />
                    Tu svratiše kahvi i mehani,<br />
                    U mehani vinom se napili, <br />
                    I hajvane malo odmoriti. <br />
                    Pred mehanu dugačka dolina,<br />
                    Tu se trči pješačka košija,<br />
                    Baš nikako s Aljom sirotanom,<br />
                    Ne nada se aga Smail-aga,<br />
                    Da se Aljo Žirču vratit' neće,<br />
                    Da ostavlja braću i cvijeće, <br />
                    Da ostavlja kajmak i jaganjce,<br />
                    Da će begu čuvati magarce.<br />
                    Silne ate oba uzjahali,<br />
                    U Saraj'vu begu doplahali,<br />
                    Aljo begu za oko zapade,<br />
                    Pa beg Alja moli da ostane,<br />
                    Da s njim živi na bijele dvore,<br />
                    Da ga bego svojim sinom zove.<br />
                    Prevari se aga Smail-aga,<br />
                    Prevari se i sirotan Aljo,<br />
                    Prevari ih vreva i čaršija,<br />
                    I begova laka lakrdija,<br />
                    Dvije heftes Aljo umor vida,
                </span>,
                <span>
                    Treće hefte beg mu zapovijeda:<br />
                    "Ustaj, Aljo, na noge lahgane,<br />
                    Te dotjeraj drva na tovare,<br />
                    Ona štala što je kraj magaze,<br />
                    Tebe čeka samar i magare, <br />
                    Duga zima, drva omaljila,<br />
                    A vrućina begu dobro prija!"<br />
                    Ode Aljo gori i planini,<br />
                    Te dotjera drva na magarca,<br />
                    No kad prođe džadom kroz čaršiju,<br />
                    Arsuz djeca, pa ga zadirkuju:<br />
                    "Dobar momak, ćelava mu glava,<br />
                    Sa magarcem dva plaha hajvana!"<br />
                    Tijem halom 68 dođe i proljeće,<br />
                    Kroz planinu procvjetalo cvijeće,<br />
                    Sunce sija, Alija se znoji,<br />
                    Još više ga Žirču želja mori,<br />
                    Suze roni, magarcu govori:<br />
                    "Moj jarane, maleno magare!" <br />
                    Aljo začu djetinjega plača, <br />
                    Uši vrte Aljo i magare,<br />
                    Hoće znati sa koje je strane,<br />
                    Kad nekako stranu razaznaše,<br />
                    Aljo trči k'o da konja jaše,<br />
                    Jaran osta kraj naramka drva,<br />
                    Begova su neko da ih čuva.
                </span>,
                <span>
                    Na proplanku Aljo kad izađe,<br />
                    Uplakano on dijete nađe:<br />
                    Od sunca mu pjena na ustima,<br />
                    Od rođenja krila na leđima.<br />
                    Kune Aljo majku prokletnicu,<br />
                    Što makanju baci u planinu,<br />
                    Uze junak djete u naruče,<br />
                    Što od sunca i plača prepuče,<br />
                    Odnese ga do debela hlada,<br />
                    Pa djetetu poče da se jada:<br />
                    "I ja sam ti sirotan, dijete,<br />
                    Božji baksuz od glave do pete,<br />
                    Evo tebi sva moja odjeća,<br />
                    Jer je tebi ona sada preča,<br />
                    I hranu ću tebi pribaviti,<br />
                    Sa drveta mrezgu izguliti,<br />
                    Neki vakat to će ti pomoći,<br />
                    Može bit će tvoja majka doći, <br />
                    Ja ću sjutra opet navratiti,<br />
                    I tebe ću, bogme, posjetiti!"<br />
                    To mu reče, pa gorom uteče,<br />
                    Da tovari drva na hajvana,<br />
                    Na hajvana, magare-jarana,<br />
                    No kad drva natrpa jaranu,<br />
                    Ču se huka i jeka planine,<br />
                    Kod jarana doletješe vile,<br />
                    Od jarana pomoći mu nema,<br />
                    Sarajevo pa ga namučilo,<br />
                    Namučio bego i čaršija,
                </span>,
                <span>
                    Edepsuzi čaršijske kaldrme,<br />
                    Al' najviše golema stijena,<br />
                    Vrh planine de put započinje,<br />
                    Svaki put mu za tovar zakači,<br />
                    Te namuči Alja i magare,<br />
                    Po dva puta tovar da tovare.<br />
                    Progovara vila silovita:<br />
                    "Pridi, sinko, da te ja zadojim,<br />
                    Da junaka od tebe načinim,<br />
                    Dobar jesi, bićeš i kuvetli,<br />
                    Da se tobom svako ne šereti!"<br />
                    Pride Aljo, vila ga zadoji,<br />
                    Pa on snagu na stijeni proba,<br />
                    Podiže je do pojasa svoga,<br />
                    Od pojasa dalje ne mogaše. <br />
                    Progovara vila silovita:<br />
                    "Dođi sinko da to ponovimo".<br />
                    Pride Aljo još malo podoji,<br />
                    Pa on maši sa puta stijenu,<br />
                    Te je skrajnu šumi da ne smeta.<br />
                    Pita vila Alja sirotana:<br />
                    "Kazuj, sinko, šta bi još želio?"<br />
                    Aljo smišlja, pa joj odgovara:<br />
                    "Kad mi dade snagu i vrlinu, <br />
                    Daj mi konja kao gorsku vilu,<br />
                    Kunem ti se Bogom jedinijem,<br />
                    Da te brukat' nikada ne smijem,
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
        <div className="relative px-10">
            <MdArrowBackIos className="fixed top-1/2 md:left-6 left-0 text-teal-100 cursor-pointer hover:text-teal-300 duration-300" size={38} onClick={showPrev} />
            <MdArrowForwardIos className="fixed top-1/2 md:right-6 right-0 text-teal-100 cursor-pointer hover:text-teal-300 duration-300" size={38} onClick={showNext} />
            <motion.h2 key={shownIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }} className="relative text-teal-100 text-2xl font-bold py-4 uppercase">{songs[shownIndex].title}</motion.h2>
                            <motion.h2 key={shownIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }} className="absolute bottom-0 right-10 text-teal-100 text-2xl font-bold p-4">{songs[shownIndex].author}</motion.h2>
            <div className="w-full mx-auto flex justify-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-12 pb-4">
                    {songs[shownIndex].strofe.map((strofa, index) => (
                        <motion.p key={`${shownIndex}-${index}`}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 1 }}
                            className="text-teal-100 text-lg md:text-xl leading-relaxed font-semibold border-l-4 border-teal-300 pl-4">
                            {strofa}
                        </motion.p>

                    ))}
                </div>
            </div>
            <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full flex justify-center bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900 py-4">
                <div className="flex gap-1 items-center">
                    {songs.map((_, index) => (
                        <div className={`w-12 h-2 ${shownIndex === index ? 'bg-teal-100' : 'bg-teal-950'} cursor-pointer duration-1000`} key={index} onClick={() => showIndex(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;