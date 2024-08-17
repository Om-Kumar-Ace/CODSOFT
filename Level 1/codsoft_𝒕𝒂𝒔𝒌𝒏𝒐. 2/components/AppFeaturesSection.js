// components/Section.js
import { FaMapMarkerAlt, FaStar, FaCheckCircle, FaWrench, FaUsers, FaMobileAlt, FaHeadphones, FaArrowAltCircleRight } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const Section = ({ title, children }) => {
    return (
        <div className="p-6 w-full mx-auto my-4  text-blue-500 rounded-3xl ">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
};

const AppFeaturesSection = () => (
    <Section title="Our Features">
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">

        

            <FeatureCard
                icon={<FaStar className="text-yellow-500" />}
                title="Worker of the Month"
                description="Recognize and celebrate the best workers each month."
                />
              
            <FeatureCard
                icon={<FaMapMarkerAlt className="text-blue-500" />}
                title="Nearby Worker Location"
                description="Find workers near your location quickly and easily ."
            />
            <FeatureCard
                icon={<FaCheckCircle className="text-green-500" />}
                title="Skill Verification"
                description="Ensure workers have the necessary skills for the job."
            />
            <FeatureCard
                icon={<FaWrench className="text-red-500" />}
                title="Comprehensive Tool Support"
                description="Access a wide range of tools and equipment for your projects."
            />
            <FeatureCard
                icon={<FaUsers className="text-purple-500" />}
                title="Community Feedback"
                description="Get insights and reviews from our community."
            />
            <FeatureCard
                icon={<FaMobileAlt className="text-pink-500" />}
                title="Mobile App Integration"
                description="Use our mobile app for seamless integration and convenience."
            />
            <FeatureCard
                icon={<FaHeadphones className="text-orange-500" />}
                title="24X7 Customer support"
                description="Get help form us any time"
            />
           
           <FeatureCard
                icon={<FaArrowAltCircleRight className="text-rose-500" />}
                title="And Many More"
                description="Explore more features and benefits we offer."
            />
        </div>
    </Section>
);

export default AppFeaturesSection;
