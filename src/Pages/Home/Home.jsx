import OurServices from '../Services/OurServices';
import Banner from './Banner';
import Blog from './Blog';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;