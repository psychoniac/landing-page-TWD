const Header = () => {
    return(
        <header className="min-w-[400px] bg-gradient-to-b from-primary-black to-dark-grey text-dark-red flex flex-col items-center gap-5 pt-2 pb-2  md:flex-row justify-around">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold font-title text-center md:text-4xl">The Walking Dead</h1>
                <h2 className="text-white-brok text-sm font-extralight text-center shadow-sm shadow-dark-red font-text-primary md:text-2xl">Tout connaître de la série</h2>
            </div>
            <div>
                <img src="public/persos/rick-familly.jpg" alt="logo du site en lien avec la série" />
            </div>
        </header>
    );
};

export default Header;