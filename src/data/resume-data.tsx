import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sebastian Oltedal Thorp",
  initials: "ST",
  location: "Nesodden, Norway",
  locationLink: "https://www.google.com/maps/place/Oslo",
  about:
    "PhD stipendiat og konsulent for Østlyng & Bjerke.",
  summary:
    "Min karriere og utdanning har gitt meg med omfattende ferdigheter innen teknologi, psykologi, forskning og organisasjonsutvikling. Mine interesser ligger i skjæringspunktet mellom psykologi og teknologi, spesielt i anvendelsen av AI og teknologi få løse praktiske problemstillinger i organisasjoner. Jeg finner meg til rette i arbeidsmiljø hvor smidighet og høyt tempo er viktig. Som leder vektlegger jeg åpenhet, oppriktighet, samarbeid og kontinuerlig utvikling.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQGnEDQokH4eHA/profile-displayphoto-shrink_800_800/0/1712494802583?e=1718236800&v=beta&t=M_i0NY7SSC5XxuklfgHFK0gn0O5Pmnam3CPVM-qRtsc",
  personalWebsiteUrl: "https://sebastianthorp.com",
  contact: {
    email: "sebastian.thorp@outlook.com",
    tel: "+4741202571",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebastian-thorp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/blamereality",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
      degree: "Bachelor i psykologiy",
      start: "2016",
      end: "2019",
    },
      {
      school: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
      degree: "Master i arbeids- og organisasjonspsykologi",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
      link: "https://ntnu.no",
      badges: [""],
      title: "Ph.D stipendiat",
      logo: JojoMobileLogo,
      start: "2022",
      end: "Current",
      description:
        "Forsker på kunstig intelligens, spatial computing og psykologi. Veileder og foreleser for bachelor- og masterstudenter.",
    },
    {
      company: "Østlyng & Bjerke",
      link: "https://ostlyngbjerke.no",
      badges: [""],
      title: "Konsulent",
      logo: JojoMobileLogo,
      start: "2021",
      end: "Current",
      description:
        "Østlyng & Bjerke spesialiserer seg på ledelse- og medarbeiderutvikling, prosessledelse og organisasjonsutvikling. Jeg har gjennomført flere utviklingsprogram med statlige og offentlige organisasjoner. I tillegg har jeg ledet utviklingen og salget av digitale kurs, og designet selskapets nettside. Min ekspertise er i å utføre kvalitative og kvantitative innsiktsanalyser som bakrunn for prosessbasert utvikling.",
    },
    {
      company: "VRID",
      link: "",
      badges: [""],
      title: "Gründer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:
        "VRID tilbyr tjenester innen organisasjonsutvikling, kvantitativ innsiktsanalyse og digital transformasjon. VRID har designet, implementert og analysert en medarbeiderundersøkelse for 1 500 ansatte i Orkland kommune, i tillegg til å gjennomføre og evaluere en omfattende medarbeiderundersøkelse for de norske domstolene. VRID har også utviklet en produktstrategi for et Virtual Reality-prosjekt for å tilby opplæring i intervjuferdigheter.",
    },
    {
      company: "Norwegian University of Science and Technology (NTNU)",
      link: "https://www.ntnu.no",
      badges: [""],
      title: "Studentassistent",
      logo: NSNLogo,
      start: "2020",
      end: "2022",
      description: "Som studentassistent gjennomførte jeg omfattende laboratorieeksperimenter ved bruk av Virtual Reality og fysiologiske målinger, som inkluderte rekruttering, dataanalyse, eksperimentelt design og å skrive vitenskapelige artikler .",
    },
    {
      company: "2. Bataljon/Norwegian Armed Forces",
      link: "https://www.forsvaret.no/om-forsvaret/organisasjon/haeren/brigade-nord",
      badges: [""],
      title: "Lagfører og personallforvalter (adjutant)",
      logo: NSNLogo,
      start: "2013",
      end: "2015",
      description: "I managed the conscripts’, overseeing payroll, food provisioning in camps and fields, and transportation logistics. Additionally, I played a key role in the staff's planning and coordination of field exercises. My leadership responsibilities extended to guiding conscripts in both camp and field settings, where I led physical training, maintained equipment and vehicles, and lead our team during field operations.",
    },
  ],
  skills: [
    "Organizational Development",
    "Digital Development and and Transformations",
    "Business Management",
    "Facilitation",
    "Agile Methodology",
    "Process Improvement",
    "Quantitative Research Methods",
    "Qualitative Research Methods",
    "Recruitment",
  ],
  projects: [
    {
      title: "Comparative analysis of spatial ability in immersive and non-immersive virtual reality: the role of sense of presence, simulation sickness and cognitive load",
      techStack: ["Spatial Computing", "Immersion", "Spatial Ability", "Simulation Sickness", "Sense of Presence", "Cogntive Load"],
      description:  "Sebastian Oltedal Thorp, Lars Morten Rimol, Simon Lervik, Hallvard Røe Evensmoen, Simone Grassini, March 2024",
      logo: ConsultlyLogo,
      link: {
        label: "link",
        href: "https://www.frontiersin.org/articles/10.3389/frvir.2024.1343872/full",
      },
    },
    {
      title: "Overcoming the productivity paradox in the public sector by managing deliberate learning",
      techStack: ["Digital Transformations", "Deliberate Learning", "Public Sector", "Manegerial Dynamic Capabilities"],
      description:
        "Linn Slettum Bjerke-Busch, Sebastian Thorp, June 2023",
      logo: MonitoLogo,
      link: {
        label: "link",
        href: "https://www.tandfonline.com/doi/pdf/10.1080/14719037.2023.2225510",
      },
    },
    {
      title: "Association of the big five personality traits with training effectiveness, sense of presence, and cybersickness in virtual Reality",
      techStack: ["Virtual Reality", "Personality Traits", "Training Effectivness", "Sense of Presence", "Cybersickness"],
      description:
        "Sebastian Oltedal Thorp, Lars Morten Rimol, Simone Grassini, November 2022",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://www.mdpi.com/2414-4088/7/2/11",
      },
    },
    {
      title: "Temporal development of sense of presence and cybersickness during an immersive vr experience",
      techStack: ["Virtual Reality", "Sense of Presence", "Cybersickness"],
      description:
        "Sebastian Thorp, Alexander Sævild Ree, Simone Grassini, April 2022",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://www.mdpi.com/2414-4088/6/5/31",
      },
    },
    {
      title: "Evaluating the effect of multi-sensory stimulations on simulator sickness and sense of presence during HMD-mediated VR experience",
      techStack: ["Virtual Reality", "Simulation Sickness", "Sense of Presence", "Vibrations"],
      description: "Simone Grassini, Karin Laumann, Virginia de Martin Topranin, Sebastian Thorp, December 2021",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1941279",
      },
    },
    {
      title: "Using electrophysiological measures to evaluate the sense of presence in immersive virtual environments: An event‐related potential study",
      techStack: [
        "EEG",
        "Virtual Reality",
        "Immersion",
      ],
      description:
        "Simone Grassini, Karin Laumann, Sebastian Thorp, Virginia de Martin Topranin, August 2021",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://onlinelibrary.wiley.com/doi/full/10.1002/brb3.2269",
      },
    },
    {
      title: "User individual characteristics and perceived usability in immersive hmd vr: A mixed method explorative study",
      techStack: [
        "Spatial Computing",
        "Virtual Reality",
        "Personality Traits",
      ],
      description:
        "Simone Grassini, Mina Saghafian, Sebastian Thorp, Karin Laumann, July 2021",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://link.springer.com/chapter/10.1007/978-3-030-80091-8_19",
      },
    },
  ],
} as const;
