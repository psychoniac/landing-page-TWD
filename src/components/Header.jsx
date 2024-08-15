const Header = () => {
    return(
        <header className="bg-gradient-to-b from-primary-black to-dark-grey text-dark-red  flex justify-around items-center pb-5 pt-5">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-4xl font-bold font-title">The Walking Dead</h1>
                <h2 className="text-3xl font-title-secondary">Tout connaître de la série</h2>
            </div>
            <div className="border-4 border-dark-red rounded-xl">
                <img src="public/persos/rick-familly.jpg" className="rounded-xl" alt="logo du site en lien avec la série" />
            </div>
        </header>
    );
};

export default Header;