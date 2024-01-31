
const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid border shadow-sm mt-5">
                <div className="p-3">
                    <p>
                        Copyright &copy; {currYear} Made with 💗 by <strong>Adarsh</strong>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;