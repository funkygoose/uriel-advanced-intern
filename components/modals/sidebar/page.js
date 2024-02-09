export default function SideBar() {
  return (
    <div className="hidden md:flex bg-[#f7faf9] min-h-screen flex-col w-54  sidebar-enter  ">
      <figure className="p-4">
        <img
          className="w-32 h-auto"
          src="/assets/logo.png"
          alt="Summmarist Logo"
        />
      </figure>
      <div className="flex flex-col justify-between flex-grow">
        <ul className="space-y-4 p-4">
          <li className="flex items-center space-x-2">
            <i></i>
            <span>For you</span>
          </li>
          <li className="flex items-center space-x-2">
            <i></i>
            <span>My Library</span>
          </li>
          <li className="flex items-center space-x-2">
            <i></i>
            <span>Highlights</span>
          </li>
          <li className="flex items-center space-x-2">
            <i></i>
            <span>Search</span>
          </li>
        </ul>
        <ul className="space-y-4 p-4">
          <li className="flex items-center space-x-2">
            <i></i>
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2">
            <i></i>
            <span>Help & Support</span>
          </li>
          <li className="flex items-center space-x-2">
            <i></i>
            <span>Login</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
