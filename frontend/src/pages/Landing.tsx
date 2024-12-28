
import { Link } from 'react-router-dom';
import {PencilIcon, CloudIcon, BoltIcon } from 'lucide-react';
import { Appbar } from '../components/Appbar';

// Appbar component




// Features component
const Features = () => {
    const features = [
        {
            name: 'Easy Content Creation',
            description: 'Intuitive interface for writing and formatting your blog posts with ease.',
            icon: PencilIcon,
        },
        {
            name: 'Serverless Architecture',
            description: 'Enjoy unlimited scalability and reliability with our serverless backend.',
            icon: CloudIcon,
        },
        {
            name: 'Lightning Fast',
            description: 'Experience blazing-fast load times and smooth interactions throughout the platform.',
            icon: BoltIcon,
        },
    ];

    return (
        <div className="py-12 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to blog
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        InkLess provides a seamless blogging experience with powerful features designed for modern content creators.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

// Technologies component
const Technologies = () => {
    const technologies = [
        { name: 'React', description: 'A JavaScript library for building user interfaces' },
        { name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript' },
        { name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development' },
        { name: 'Hono', description: 'A small, simple, and fast web framework for Cloudflare Workers' },
        { name: 'Prisma', description: 'An ORM for Node.js and TypeScript' },
        { name: 'Cloudflare Workers', description: 'For serverless deployment' },
    ];

    return (
        <div className="bg-gray-100 py-12" id="technologies">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Technologies</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Built with modern tech stack
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        InkLess leverages cutting-edge technologies to provide a robust and efficient blogging platform.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="relative">
                                <dt>
                                    <p className="text-lg leading-6 font-medium text-gray-900">{tech.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{tech.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

// Testimonials component
const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Tech Blogger',
            image: '/placeholder.svg?height=100&width=100',
            quote: 'InkLess has revolutionized my blogging workflow. The serverless architecture ensures my content is always available, and the user interface is a joy to use.',
        },
        {
            name: 'Michael Chen',
            role: 'Software Developer',
            image: '/placeholder.svg?height=100&width=100',
            quote: 'As a developer, I appreciate the tech stack behind InkLess. It\'s fast, reliable, and scales effortlessly. Highly recommended for tech-savvy bloggers!',
        },
    ];

    return (
        <section className="bg-white py-12" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Loved by bloggers worldwide
                    </p>
                </div>
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name} className="bg-gray-50 rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                                    <div className="ml-4">
                                        <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                                        <div className="text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                                <p className="text-gray-500 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// CTA component
const CTA = () => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to start your blogging journey?</span>
                    <span className="block">Try InkLess today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-300">
                    Join thousands of content creators who have already discovered the power of serverless blogging.
                </p>
                <Link
                    to="/signup"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 sm:w-auto"
                >
                    Sign up for free
                </Link>
            </div>
        </div>
    );
};

// Footer component
const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <img
                            className="h-10"
                            src="/placeholder.svg?height=40&width=40"
                            alt="InkLess"
                        />
                        <p className="text-gray-400 text-base">
                            Making blogging effortless and powerful.
                        </p>
                        <div className="flex space-x-6">
                            {/* Add social media icons here */}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            API
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 text-base text-gray-300 hover:text-white">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-base text-gray-300 hover:text-white">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2023 InkLess, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Main Landing component
const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to InkLess</h1>
                        <p className="text-xl text-gray-700 mb-8">Your serverless blogging platform for effortless content creation.</p>
                    </div>
                </div>
                <Features />
                <Technologies />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;

