const Navbar = () => {

    const navMenu = [
        'Pjesme',
        'Guslari',
        'Galerija'
    ]

    return (
        <div className="flex justify-center gap-12 py-4">
            {navMenu.map((menu, index) => (
                <p className="text-xl uppercase text-teal-100 font-semibold hover:text-teal-400 cursor-pointer duration-300">{menu}</p>
            ))}
        </div>
    )
}

export default Navbar;