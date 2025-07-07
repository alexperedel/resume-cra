const Header = () => {
    return (
        <div className="bg-gray-50 flex pt-6 flex-col items-center relative">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold text-green-900">Alex Peredelskii</h1>
                <p className="text-gray-700 mt-2 text-lg">Creating better customer experiences</p>
            </header>

            {/* Dark slate gray separator */}
            <div className="w-full h-1 mt-6 bg-gray-700 rounded-full"/>
        </div>
    );
};

export default Header;