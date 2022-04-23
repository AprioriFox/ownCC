import Cifras from "../cifras";
import MainBanner from "../mainBanner";
import TopSellers from "../topSellers";


const MainPage = () =>{
    return (
        <div>
            <MainBanner />
            <TopSellers />
            <Cifras />
        </div>
    )
}

export default MainPage;
