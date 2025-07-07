import Contact from "./Contact";
import About from "./About";
import CoverLetter from "./CoverLetter";

const Body = () => {
    return (
        <body className="bg-gray-50">
            <CoverLetter />
            <About />
            <Contact />
        </body>
    )
}

export default Body;