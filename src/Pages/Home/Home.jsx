import OurServices from '../Services/OurServices';
import Banner from './Banner';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;