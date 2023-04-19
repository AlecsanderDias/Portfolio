import {ReactComponent as Github} from "../../assets/images/github.svg";
import {ReactComponent as Linkedin}  from "../../assets/images/linkedin.svg";


function Footer() {
    return (
        <footer className="flex justify-center items-center gap-2 bg-blue-500 text-white py-3">
            <Github className="w-6 h-6 fill-white cursor-pointer"/>
            <Linkedin className="w-8 h-8 fill-white cursor-pointer"/>
            <p className="">Desenvolvido por Alecsander Dias</p>
        </footer>
    );
}

export default Footer;