import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='flex items-center justify-evenly min-w-full'>
            <div>
                <h3 className='pb-5 text-2xl font-bold'>The Walking Dead</h3>
                <h4 className='text-xl '>wwww.thewalkingdead.fr</h4>
            </div>
            <div>
                <img src="public/persos/rick-familly.jpg" className='max-h-[200px]' alt="photo de Rick, Lorie et Carl." />
            </div>
            <div>
                <ul>
                    <li>
                        <a href="www.twitter.com" className='max-w-50% flex gap-10'>
                            <Twitter />
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="www.facebook.com" className='max-w-50% flex gap-10'>
                            <Facebook />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="www.instagram.com" className='max-w-50% flex gap-10'>
                            <Instagram />
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;