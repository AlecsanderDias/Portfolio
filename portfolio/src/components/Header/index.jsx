import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";


function Header() {
    const linkedin = "https://www.linkedin.com/in/alecsandersantosdias/";
    const github = "https://github.com/AlecsanderDias";
    return (
        <nav className="flex justify-between items-center bg-blue-500 text-white px-3">
            <MoonIcon className="h-6 text-gray-100 block cursor-pointer" />
            <div className="flex justify-center items-center">
                <a href="/#" className="py-3 px-3 hover:bg-blue-700">Sobre Mim</a>
                <a href="/#tecnologias" className="py-3 px-3 hover:bg-blue-700">Tecnologias</a>
                <a href="/#projetos" className="py-3 px-3 hover:bg-blue-700">Projetos</a>
            </div>
            <div className="flex justify-center items-center gap-2 py-3">
                <a target="_blank" rel="noreferrer" href={github}>
                    <Github className="w-6 h-6 fill-white cursor-pointer"/>
                </a>
                <a target="_blank" rel="noreferrer" href={linkedin}>
                    <Linkedin className="w-8 h-8 fill-white cursor-pointer"/>
                </a>
            </div>
        </nav>
    );
}

export default Header;