import { FaFacebook, FaXTwitter, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { IconType } from "react-icons";


export const navLinksdata = [
  {
    _id: 1001,
    title: "Acceuil",
    link: "home",
  },
  {
    _id: 1002,
    title: "À propos",
    link: "about",
  },
  {
    _id: 1003,
    title: "Projets",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Avis clients",
    link: "CustomerReviews",
  },
 
  {
    _id: 1005,
    title: "Contact",
    link: "contact",
  },
];

export type IcustommersRiviews = {
  _id: number
  rate: number
  description: string
  name: string
}

export const custommersRiviews = [
  {
    _id: 1,
    rate: 5.0,
    description: "Je suis vraiment contente de mon logo. Encore merci !",
    name: "Manuella KITTAVINY"
  },
  {
    _id: 2,
    rate: 5.0,
    description: "Échanges fluides. Après le premier contact pour déterminer mes attentes, j’ai très vite reçu des modèles convaincants. Après ajustement mon logo était prêt en 3 jours.",
    name: "Manuella KITTAVINY"
  },
  {
    _id: 3,
    rate: 4,
    description: "Je suis vraiment contente de mon logo. Encore merci !",
    name: "Manuella KITTAVINY"
  },
];

export type Isocials = {
  _id: number
  media: string
  name: string
  logo: IconType
  url: any
}

export const socials = [
  {
    _id: 1,
    media: "Instagram",
    name: "@al_desi_gn",
    logo: require("../assets/Images/instagram.png"),
    url: 'https://instagram.com/al_desi_gn?igshid=OGQ5ZDc2ODk2ZA==',
  },
  {
    _id: 2,
    media: "Facebook",
    name: "Al Design",
    logo: require("../assets/Images/facebook.png"),
    url: 'https://www.facebook.com/profile.php?id=61551486742711&locale=fr_FR',
  },
];



export const projectsPictures = [
  {
    _id: 1,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image1.png"),
  },
  {
    _id: 2,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image2.png"),
  },
  {
    _id: 3,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image3.png"),
  },
  {
    _id: 4,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image4.png"),
  },
  {
    _id: 5,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image5.png"),
  },{
    _id: 6,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image6.png"),
  },
  {
    _id: 7,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image7.png"),
  },
  {
    _id: 8,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image8.png"),
  },
  {
    _id: 9,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image9.png"),
  },
  {
    _id: 10,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image10.png"),
  },
  {
    _id: 11,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image11.png"),
  },
  {
    _id: 12,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image12.png"),
  },
  {
    _id: 13,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image13.png"),
  },
  {
    _id: 14,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image14.png"),
  },
  {
    _id: 15,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image15.png"),
  },
  {
    _id: 16,
    name: "@al_desi_gn",
    size: '',
    url: require("../assets/Images/projects/image16.png"),
  },
];

