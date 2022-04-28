import Cifras from "../cifras";
import MainBanner from "../mainBanner";
import TopSellers from "../topSellers";
import Colab from "../colab";


const MainPage = () =>{
    return (
        <div>
            <MainBanner />
            <TopSellers />
            <Colab />
            <Cifras />
        </div>
    )
}

export default MainPage;
