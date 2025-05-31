import Contact from '../Contact/Contact';
import OurServices from '../Services/OurServices';
import Banner from './Banner';
import Blog from './Blog';
import OurClients from './OurClients';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
            <OurClients></OurClients>
            <Blog></Blog>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;