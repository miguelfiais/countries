import { MdOutlineDarkMode } from "react-icons/md";
import { Container } from "./styles"

const Header = () => {
  return (
    <Container>
        <h1>Where in the world?</h1>
        <button>
            <MdOutlineDarkMode />
            <span>Dark Mode</span>
        </button>
    </Container>
  )
}

export default Header