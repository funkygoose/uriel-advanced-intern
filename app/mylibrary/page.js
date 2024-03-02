import SideBar from "@/components/modals/sidebar/page";
import SearchBar from "@/components/searchbar/page";

export default function Page() {
  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>
      <div className="w-[100%]">
        <div className="">
          <SearchBar />
        </div>
        <div className="w-full h-full px-6 md:ml-[200px] ">
          <div className="my__library--wrapper">
            <div className="saved__books--wrapper">
              <div className="saved__books--title">Saved Books</div>
              <div className="saved__items">0 items</div>
            </div>
            <div className="my__library--modal">
                <div className="favorites__modal--title">Save your favorite books!</div>
                <div className="favorites__modal--subtitle">When you save a book, it will appear</div>
            </div>
            <div className="finished__book--wrapper">
                <div>Finished</div>
                <div>11 items</div>
            </div>
            <div className="finished__lower--wrapper">
                <div className="finished__lower--books">
                    books
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
