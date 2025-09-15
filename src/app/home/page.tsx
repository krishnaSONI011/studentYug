import MainContainer from "@/components/HomeComponets/MainContainer";
import SideBar from "@/components/HomeComponets/SideBar";
import RightChat from "@/components/HomeComponets/RightChat";
import TopNavbar from "@/components/TopNavbar";

export default function HomePage(){
  return(
    <>
    <TopNavbar />
    <div className="pt-20 mt-4"> {/* Add top padding to account for fixed navbar */}
      <SideBar />
      <MainContainer />
      <RightChat />
    </div>
    </>
  )
}
