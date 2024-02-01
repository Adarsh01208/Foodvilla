
const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center mt-5 border  border-2">
            <div className="text-center p-3 shadow-sm " >
                Copyright &copy; {currYear} Made with 💗 by <strong><a className="text-body" href="https://github.com/Adarsh01208"></a> @Adarsh</strong>
            </div>
        </footer>
    )
};
export default Footer;