import SideBar from "@/components/modals/sidebar/page";
import SearchBar from "@/components/searchbar/page";
import SettingHome from "@/components/settingLogin/page";

export default function Settings() {
    return (
        <div className="flex ">
        <SideBar />
        <div className="w-[100%]">
          <div className="">
            <SearchBar />
          </div>
          <div className="w-full">
            <SettingHome />
          </div>
        </div>
      </div>
    )
}