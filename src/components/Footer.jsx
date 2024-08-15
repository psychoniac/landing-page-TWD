import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-primary-black to-dark-grey flex items-center justify-evenly min-w-full pt-2 pb-2'>
            <div>
                <h3 className='text-2xl font-bold font-title text-dark-grey shadow-md shadow-dark-red'>The Walking Dead</h3>
                <h4 className='text-xl text-white-brok font-title-secondary shadow-lg shadow-dark-red pt-5'>wwww.thewalkingdead.fr</h4>
            </div>
            <div>
                <img src="public/persos/rick-familly.jpg" className='max-h-[200px]' alt="photo de Rick, Lorie et Carl." />
            </div>
            <div>
                <ul className=' font-title-secondary text-xl flex flex-col gap-5'>
                    <li>
                        <a href="www.twitter.com" className='max-w-50% flex gap-10'>
                            <Twitter className='text-white-brok' />
                            <span className='text-dark-red'>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="www.facebook.com" className='max-w-50% flex gap-10'>
                            <Facebook className='text-white-brok'/>
                            <span className='text-dark-red'>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="www.instagram.com" className='max-w-50% flex gap-10'>
                            <Instagram className='text-white-brok' />
                            <span className='text-dark-red'>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;