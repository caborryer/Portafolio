import './App.css';
import {Box} from "@material-ui/core";
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { Menu } from './components/ImageMenu';
import { NavigationButton } from './components/NavigationButton';
import { CenterButton } from './components/CenterButton';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Slider/>
    <CenterButton/>
    <Box component='div' display= 'flex' justifyContent='center'>
    <NavigationButton/>
    </Box>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
