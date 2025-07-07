const Contact = () => {
    return (
        <section className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md sm:p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-900 text-center sm:text-left">
                Contact
            </h2>
            <p className="text-gray-900 leading-relaxed text-base sm:text-lg tracking-wide mb-4">
                I’d love to be a part of your team! Please feel free to reach out via phone or email.
            </p>
            <ul className="text-gray-800 space-y-2 text-base sm:text-lg">
                <li>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:0430 086 457" className="text-green-700 hover:underline">
                        0430 086 457
                    </a>
                </li>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:alex.peredelskii@outlook.com" className="text-green-700 hover:underline">
                        alex.peredelskii@outlook.com
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;