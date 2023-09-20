import pfp from "@/lib/dhu.jpg";
import farmqowPic from "@/lib/FarmQOW_Logo.png"
import lihatinPic from "@/lib/LihatIn_Logo.png"
import goRestPic from "@/lib/Go-Restaurant.png"
import furrPic from "@/lib/Furrball Facts.png"
import analytic101 from "@/lib/analytics101.png"


export const profPic = pfp;
const fqLogo = farmqowPic;
const liLogo = lihatinPic;
const grPage = goRestPic;
const fbPage = furrPic;
const analyticsPic = analytic101;

export const mySkills = [
    "HTML","CSS","JS","Python","Flutter","Data Analytics","Data Science","Data Visualization","Machine Learning Engineer","Ms. Excel","Ms. Word"
]

export const projectsData = [
    {
        title: "Lihat.In",
        description:
            "A Computer Vision Projects that purposedly built to help Visually Disabled to Classify Rupiah Denomination. I Worked as Fullstack Android Developer, Data Engineer, Machine Learning Engineer",
        techs : ["Python","Tensorflow","Flutter",],
        imageUrl : liLogo,
        gitURL:"https://github.com/nuwbie-11/We_see"
    },
    {
        title: "Farm.QOW",
        description:
            "As Backend Developer, i've designed and implement the logics behind the app and as UI/UX designers i've collaborated with my team to design most effective UI/UX as possible",
        techs : ["Flutter"],
        imageUrl : fqLogo,
        gitURL:"https://github.com/nuwbie-11/Farm.QOW"
    },
    {
        title: "Go Restaurants",
        description:
            "React App capable to shows restaurants Using specific API. ",
        techs : ["React","TailwindCSS"],
        imageUrl : grPage,
        gitURL:"https://restaurants-nuwbie-11.vercel.app/?price=undefined&cate=undefined&isOpen=null"
    },
    {
        title: "Furrball Facts!",
        description:
            "My First NextJs App capable to shows facts around Cats. ",
        techs : ["NextJs","TailwindCSS"],
        imageUrl : fbPage,
        gitURL:"https://your-cat-dose.vercel.app/"
    },
    {
        title: "Data Analytics 101",
        description:
            "My Journey on Data and Machine Learning related stuff",
        techs : ["Python","Pandas","SQL","Excel","LookrStudio"],
        imageUrl : analyticsPic,
        gitURL:"https://github.com/nuwbie-11/Data-Analytics/"
    },
    
];
export const Links = [
    {
        name: "Home",
        targetHash: "#home",
    },
    {
        name: "About",
        targetHash: "#about",
    },
    {
        name: "Projects",
        targetHash: "#projects",
    },
    {
        name: "Skills",
        targetHash: "#skills",
    },
    // {
    //     name: "Contacts",
    //     targetHash: "#contacts",
    // },    
] as const;
