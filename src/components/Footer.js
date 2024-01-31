
const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        // <footer>
        //     <div className="container-fluid border shadow-sm mt-5">
        //         <div className="p-3">
        //             <p>
        //                
        //             </p>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-body-tertiary text-center mt-5 shadow-sm border  border-1">
            <div className="text-center p-3" >
                Copyright &copy; {currYear} Made with 💗 by <strong><a className="text-body" href="https://github.com/Adarsh01208"></a> @Adarsh</strong>

            </div>
        </footer>
    )
};

export default Footer;