import { motion } from "framer-motion";

const FiddlersPage = () => {
  const fiddlersList = [
    {
      id: 1,
      title: "Guslari poznati sa teritorije Podgorice",
      subtitle: "",
      fiddlers: [
        {
          name: "Šerbo Mandić",
          descriptions: [
            "Poznat po epskim pjesmama koje su prenosile priče o junacima i bitkama iz crnogorske istorije. Njegova izvođenja često su uključivala teme o časti i herojstvu.",
          ],
        },
        {
          name: "Sulejman Kovačević",
          descriptions: [
            "Izvrsan interpretator narodnih epskih pjesama, posebno onih koje govore o sukobima i stradanjima tokom istorijskih perioda.",
          ],
        },
        {
          name: "Husein Konič",
          descriptions: [
            "Njegove pjesme često su se bavile temama identiteta, ljubavi i tradicije, kao i svakodnevnim životom.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Guslari poznati sa teritorije Bara",
      subtitle: "",
      fiddlers: [
        {
          name: "Šerif Mandić",
          descriptions: [
            "Šerif Mandić bio je jedan od najpoznatijih bošnjačkih guslara, čije su pjesme i epovi stekli veliku popularnost, posebno među ljubiteljima tradicionalne guslarske umjetnosti. Mandić je bio izuzetno cijenjen zbog svog doprinosa očuvanju bošnjačke i balkanske tradicije, a kroz svoje guslarske pjesme prenosio je historijske događaje, priče o junaštvu i važne moralne lekcije.",
            "Izvodio je pjesme koje govore o junacima i bitkama, često naglašavajući teme časti i heroizma.",
          ],
          songs: [
            {
              title: "Bošnjačka istorija",
              description:
                "Kroz gusle, Šerif Mandić je često pjevao o slavnim događajima iz bošnjačke i šire balkanske historije, uključujući bitke i ustanke protiv različitih okupatora. Njegove pjesme su slavile heroje poput Huseina-kapetana Gradaščevića, koji su se borili za slobodu i čast.",
            },
            {
              title: "Narodni junaci",
              description:
                "Mandić je često pjevao o ličnostima iz narodne tradicije, predstavljajući ih kao uzore hrabrosti, časti i poštenja. Njegove pjesme su slavile obične ljude koji su kroz svoju hrabrost postali heroji u kolektivnoj svijesti naroda.",
            },
            {
              title: "Očuvanje tradicije",
              description:
                "Kao guslar, Mandić je bio svjestan važnosti gusala u očuvanju tradicije. Njegove pjesme su često bile prožete moralnim poukama, naglašavajući vrijednosti kao što su odanost, poštovanje prema porodici i zajednici, te vjernost prema Bogu i domovini.",
            },
            {
              title: "Epski stil",
              description:
                "Njegove pjesme su pisane u epskom stilu, sa bogatim desetercima koji su karakteristični za guslarsku tradiciju. Kroz ovaj stil, Mandić je uspijevao da prikaže događaje na veličanstven način, naglašavajući važnost historijskih trenutaka i ličnosti.",
            },
          ],
          conclusion:
            "Šerif Mandić je svojim guslarskim radom nastavio tradiciju bošnjačkog narodnog pjevanja, prenoseći naslijeđe koje je ukorijenjeno u usmenoj kulturi Balkana. Njegov rad je imao veliki utjecaj na očuvanje identiteta i historijske svijesti Bošnjaka, ali i drugih naroda regiona.",
        },
        {
          name: "Hajro Dervišević",
          descriptions: [
            "Hajro Dervišević je bio poznati guslar iz Crne Gore koji je kroz svoje pjesme na guslama pjevao o historijskim događajima, herojstvu i epskim pričama iz balkanske prošlosti. Njegove pjesme su često slavile narodne junake, bitke protiv Osmanlijskog carstva, kao i druge borbe za slobodu. Guslarska tradicija, kojoj je Hajro pripadao, bila je od ključnog značaja za očuvanje narodne tradicije, jezika i istorijskih predanja, posebno među narodima Balkana.",
            "Njegove interpretacije obuhvatale su ljubavne teme, kao i priče o životu i borbama naroda.",
          ],
          songs: [
            {
              title: "Bitke protiv Osmanlija",
              description:
                "Guslari su često pjevali o velikim bitkama koje su balkanski narodi vodili protiv Osmanlijskog carstva. Ove pjesme su slavile heroizam narodnih vođa i običnih ljudi.",
            },
            {
              title: "Narodni junaci",
              description:
                "Glavni junaci ovih pjesama su bili hrabri ratnici i vođe, koji su postali legende zbog svoje hrabrosti i odanosti domovini.",
            },
            {
              title: "Očuvanje narodne tradicije",
              description:
                "Kroz pjesme i gusle, očuvali su se moralni i društveni kodeksi naroda, kao i sjećanje na važne događaje iz prošlosti.",
            },
          ],
          conclusion:
            "Nažalost, zbog prirode usmene tradicije, mnoge od pjesama Hajra Derviševića nisu sačuvane u pisanoj formi, ali su ostale dio bogatog guslarskog nasljeđa na Balkanu.",
        },
        {
          name: "Osman Kulić",
          descriptions: [
            "Osman je bio cijenjeni guslar i muzičar iz Bara, poznat po svojoj sposobnosti da oživi stara predanja kroz svoje nastupe.",
            "Izvodeći epske pjesme, često je obrađivao teme tradicije i identiteta.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Guslari poznati sa teritorije Plava",
      subtitle:
        "Plav, grad na sjeveru Crne Gore, poznat je po svojoj bogatoj kulturnoj i guslarskoj tradiciji, a posebno su se istaknuli bošnjački guslari iz tog kraja. Guslarska umjetnost u Plavu je bila sredstvo očuvanja narodne historije, identiteta i herojske prošlosti. Neki od najpoznatijih bošnjačkih guslara iz Plava su:",
      fiddlers: [
        {
          name: "Ramo Kolić",
          descriptions: [
            "Ramo Kolić je bio istaknuti guslar iz plavskog kraja. Poznat po snažnom glasu i vještini u pjevanju deseteraca, Kolić je bio posvećen temama bošnjačke historije, naročito pričama o bitkama, herojima i borbama za slobodu. Njegov rad bio je cijenjen u guslarskim krugovima i širom Crne Gore.",
          ],
        },
        {
          name: "Šaban Kastrat",
          descriptions: [
            "Šaban Kastrat je bio još jedan poznati guslar iz Plava, čije su pjesme prenosile epske priče o bošnjačkoj i balkanskoj prošlosti. Kastrat je posebno bio poznat po izvođenju pjesama koje su govorile o borbama protiv neprijatelja, herojstvu bošnjačkog naroda i važnosti očuvanja vjere i tradicije.",
          ],
        },
        {
          name: "Meho Dervišević",
          descriptions: [
            "Meho Dervišević, iz plavskog kraja, bio je poznat po izvođenju epskih pjesama koje su slavile bošnjačke heroje i borbu protiv neprijatelja. Njegove guslarske izvedbe bile su duboko ukorijenjene u tradiciji, a publika ga je cijenila zbog njegovog emotivnog pristupa i vještine.",
          ],
        },
      ],
      conclusion:
        "Ovi guslari su svojim radom očuvali bogatu bošnjačku guslarsku tradiciju, koja je kroz stoljeća bila sredstvo prenošenja narodne mudrosti, istorije i identiteta.",
    },
    {
      id: 4,
      title: "Guslari poznati sa teritorije Bijelog Polja",
      subtitle:
        "Bijelo Polje, kao jedno od kulturnih središta sjevera Crne Gore, dalo je mnoge istaknute guslare, uključujući i bošnjačke guslare koji su doprinijeli očuvanju tradicije, historije i epskog narodnog stvaralaštva. Bošnjački guslari iz ovog kraja su kroz svoje pjesme prenosili priče o herojstvu, borbi za slobodu, očuvanju vjere i identiteta, kao i o značajnim historijskim događajima. Neki od poznatih bošnjačkih guslara sa teritorije Bijelog Polja su:",
      fiddlers: [
        {
          name: "Avdo Međedović",
          descriptions: [
            "Avdo Međedović je jedan od najpoznatijih guslara sa ovog područja, a ujedno i jedan od najznačajnijih epskih pjesnika Bošnjaka. Međedović je postao svjetski poznat nakon što su ga istraživači usmene tradicije, poput Milmana Parryja i Alberta Lorda, otkrili i snimili njegove epske pjesme. Njegova najpoznatija pjesma, 'Ženidba Smailagić Meha', ima više od 12.000 stihova i predstavlja jedno od najvažnijih djela usmene tradicije Bošnjaka i šireg balkanskog prostora. Njegova poezija je očarala istraživače zbog svoje složenosti i bogatstva, te se često poredi sa Homerovim epovima.",
          ],
        },
        {
          name: "Suljo Međedović",
          descriptions: [
            "Suljo Međedović, sin Avda Međedovića, također je bio poznati guslar. Naslijedivši očev talenat i ljubav prema guslama, Suljo je nastavio tradiciju epskog pjevanja, prenosivši priče o herojima, bitkama i značajnim historijskim događajima bošnjačkog naroda. Njegov rad je bio posvećen očuvanju porodične tradicije i guslarskog nasljeđa Bijelog Polja.",
          ],
        },
        {
          name: "Mujo Šarić",
          descriptions: [
            "Mujo Šarić je bio guslar iz Bijelog Polja poznat po tome što je pjevao o bošnjačkim junacima i značajnim historijskim događajima iz prošlosti Bosne i Hercegovine i Crne Gore. Njegove pjesme su odražavale snažnu povezanost sa tradicijom, kao i ljubav prema guslama kao mediju prenošenja narodnih priča i vrijednosti.",
          ],
        },
        {
          name: "Hajro Đečević",
          descriptions: [
            "Hajro Đečević, također iz Bijelog Polja, bio je prepoznatljiv po svojim epskim pjesmama koje su slavile bošnjačke borce i narodne junake. Đečević je, kao i drugi guslari, kroz svoje pjesme prenosio osjećaj ponosa i čuvanja identiteta, te je doprinosio očuvanju kulturnog nasljeđa Bošnjaka u Crnoj Gori.",
          ],
        },
      ],
      conclusion:
        "Ovi guslari su, kroz svoje pjesme i deseterce, ne samo očuvali narodno nasljeđe već i postali simboli kulturne baštine Bošnjaka iz Bijelog Polja. Kroz guslarske nastupe i pjesme, sačuvali su priče o herojima, vrijednostima i događajima koji su oblikovali identitet njihovog naroda.",
    },
    {
      id: 5,
      title: "Guslari poznati sa teritorije Rožaja",
      subtitle:
        "Rožaje, grad na krajnjem sjeveru Crne Gore, ima bogatu tradiciju guslarskog pjevanja, a bošnjački guslari iz ovog kraja su imali važnu ulogu u očuvanju epske narodne poezije, kulturnog identiteta i historijskog pamćenja Bošnjaka. Gusle su u ovom kraju služile kao medij za prenošenje priča o herojstvu, borbi za slobodu, moralnim vrijednostima i važnim događajima iz prošlosti. Neki od poznatih bošnjačkih guslara iz Rožaja su:",
      fiddlers: [
        {
          name: "Ibrahim Ljaković",
          descriptions: [
            "Ibrahim Ljaković je bio jedan od poznatijih guslara sa područja Rožaja. Njegove pjesme su se bavile temama borbe protiv Osmanlijskog carstva, kao i važnim historijskim ličnostima bošnjačkog naroda. Njegove guslarske izvedbe su bile duboko ukorijenjene u tradicionalnu epsku poeziju, a poznat je po emotivnim i moćnim interpretacijama.",
          ],
        },
        {
          name: "Smail Malić",
          descriptions: [
            "Smail Malić je bio prepoznatljiv guslar iz Rožaja, koji je prenosio priče o bošnjačkim junacima, narodnim vođama i borbama za slobodu. Kroz svoje pjesme, Malić je slavio tradiciju i historijske vrijednosti bošnjačkog naroda, naglašavajući važnost hrabrosti i vjere. Njegov rad je cijenjen među ljubiteljima guslarske umjetnosti i poštovaocima narodnih epova.",
          ],
        },
        {
          name: "Šaban Međedović",
          descriptions: [
            "Šaban Međedović, poznat po svojim epskim pjesmama, bio je još jedan istaknuti guslar iz Rožaja. Njegove pjesme su govorile o slavnim bitkama i borcima koji su se suprotstavljali okupatorima, a kroz svoje guslarske izvedbe širio je priče o bošnjačkom ponosu i otporu. Međedović je bio poštovan zbog svoje posvećenosti guslarskoj tradiciji.",
          ],
        },
        {
          name: "Adem Kršić",
          descriptions: [
            "Adem Kršić, guslar sa područja Rožaja, poznat je po izvođenju epskih pjesama koje su opisivale događaje iz historije Bošnjaka i njihovih borbi na Balkanu. Njegov stil pjevanja i interpretacije bili su cijenjeni u široj regiji, a kroz svoje pjesme prenosio je moralne poruke i vrijednosti koje su bile od značaja za bošnjačku zajednicu.",
          ],
        },
        {
          name: "Husein Dervišević",
          descriptions: [
            "Husein Dervišević je još jedan značajan guslar iz rožajskog kraja, koji je svojim pjesmama oživljavao slavne ličnosti i događaje iz bošnjačke prošlosti. Njegov doprinos guslarskoj tradiciji očitovao se u očuvanju starih pjesama, kao i u stvaranju novih, koje su imale za cilj prenositi duh epske poezije na mlađe generacije.",
          ],
        },
      ],
      conclusion:
        "Bošnjački guslari iz Rožaja su imali važnu ulogu u očuvanju kulturne i historijske baštine Bošnjaka. Kroz guslarsku tradiciju, pričali su priče o prošlosti, prenosili vrijednosti i isticali važnost očuvanja identiteta u vremenima političkih i društvenih promjena.",
    },
    {
      id: 6,
      title: "Guslari poznati sa teritorije Nikšića",
      subtitle:
        "Bošnjačka zajednica u Nikšiću, kao i u mnogim dijelovima Crne Gore, imala je bogatu tradiciju usmene poezije i guslarskog pjevanja. Iako guslarska umjetnost nije bila dominantna u Nikšiću kao u nekim drugim bošnjačkim sredinama, postojali su guslari koji su kroz gusle prenosili epske pjesme i historijske priče o bošnjačkom narodu, borbama i herojima. Guslari iz ovog kraja su, poput svojih kolega iz drugih dijelova Crne Gore, imali važnu ulogu u očuvanju identiteta, tradicije i historijskog pamćenja bošnjačke zajednice. Neki od bošnjačkih guslara koji su djelovali na teritoriji Nikšića:",
      fiddlers: [
        {
          name: "Ahmet Dervišević",
          descriptions: [
            "Ahmet Dervišević je bio jedan od prepoznatljivih guslara iz Nikšića, koji je kroz svoje pjesme i gusle pjevao o historijskim događajima iz prošlosti bošnjačkog naroda. Njegove izvedbe su bile posvećene slavnim bitkama, borbi za očuvanje identiteta i slobode, te su prenosile jake moralne i duhovne poruke.",
          ],
        },
        {
          name: "Mehmed Čorbo",
          descriptions: [
            "Mehmed Čorbo je bio poznati guslar koji je nastupao na brojnim guslarskim večerima i događajima, gdje je interpretirao epske pjesme koje su slavile bošnjačke junake i borce. Njegov stil bio je prepoznatljiv po emotivnom izražavanju i posvećenosti tradicionalnim vrijednostima, a njegovo ime je bilo poznato u guslarskim krugovima Nikšića i šire.",
          ],
        },
        {
          name: "Avdo Mujović",
          descriptions: [
            "Avdo Mujović, guslar iz Nikšića, bio je poznat po tome što je kroz gusle prenosio priče o herojstvu bošnjačkog naroda, njihovim borbama protiv okupatora i naporima da očuvaju vjeru i običaje. Njegove pjesme su često bile inspirisane lokalnim događajima i ličnostima, čuvajući tako sjećanje na važne trenutke iz prošlosti bošnjačke zajednice u Nikšiću.",
          ],
        },
        {
          name: "Rasim Kusturica",
          descriptions: [
            "Rasim Kusturica je bio jedan od guslara koji su svojim radom doprinosili očuvanju bošnjačke kulturne baštine u Nikšiću. Njegove guslarske izvedbe su bile prepoznatljive po desetercima koji su prenosili narodne priče o borbama i herojima, ali i o svakodnevnom životu Bošnjaka u Crnoj Gori.",
          ],
        },
        {
          name: "Husein Ličina",
          descriptions: [
            "Husein Ličina je bio poznat guslar iz Crne Gore, ali nažalost nema mnogo sačuvanih ili dokumentovanih detalja o njegovim specifičnim guslarskim pjesmama, niti je njegov opus široko zabilježen u javnim izvorima. Guslari kao što je Husein Ličina često su stvarali usmenu poeziju koja se prenosila sa generacije na generaciju, što znači da je mnoge pjesme teško pronaći u pisanoj formi, jer su često ostale u sjećanju slušalaca i u živim izvedbama.",
          ],
          songs: [
            {
              title: "Pjesme o narodnim junacima",
              description:
                "Slavljenje hrabrih Bošnjaka i drugih junaka sa Balkana koji su se borili za slobodu protiv Osmanlija, Austro-Ugara, ili drugih neprijatelja.",
            },
            {
              title: "Epski događaji",
              description:
                "Bitke i značajni historijski događaji koji su oblikovali sudbinu bošnjačkog i šireg balkanskog naroda.",
            },
            {
              title: "Moralne i duhovne poruke",
              description:
                "Kroz pjesme, guslari su često prenosili važne poruke o časti, poštenju, odanosti Bogu i domovini.",
            },
          ],
        },
      ],
      conclusion:
        "Ovi guslari su, kroz svoju umjetnost, prenosili važne poruke o identitetu, istoriji i borbama bošnjačkog naroda u Crnoj Gori. Kroz gusle su slavili junake, očuvali sjećanje na značajne događaje i održavali duh zajedništva i otpornosti bošnjačke zajednice u Nikšiću.",
    },
  ];

  return (
    <>
      {fiddlersList.map((region) => (
        <div key={region.id} className="mb-8">
          <motion.h2
            className="text-2xl text-teal-100 font-semibold py-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {region.title}
          </motion.h2>
          <motion.p
            className="text-teal-50 mb-4 text-lg md:leading-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {region.subtitle}
          </motion.p>
          {region.fiddlers.map((fiddler) => (
            <motion.div
              key={fiddler.name}
              className="border-b border-teal-300 pb-4 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-teal-100 font-medium">
                {fiddler.name}
              </h3>
              {fiddler.descriptions.map((description, index) => (
                <p
                  key={index}
                  className="text-teal-50 text-lg md:leading-8 mt-2"
                >
                  {description}
                </p>
              ))}
              {fiddler.songs && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-teal-50">Pjesme</h4>
                  <ul className="list-disc pl-5">
                    {fiddler.songs.map((song, index) => (
                      <li
                        key={index}
                        className="text-teal-50 text-lg md:leading-8"
                      >
                        <strong>{song.title}:</strong> {song.description}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {fiddler.conclusion && (
                <motion.p
                  className="text-teal-50 italic text-lg md:leading-8 mt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {fiddler.conclusion}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      ))}
    </>
  );
};

export default FiddlersPage;
