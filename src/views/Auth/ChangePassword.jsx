import CardChangePassword from "components/Profile/CardChangePassword";
import SidebarProfile from "components/Sidebar/SidebarProfile";


function ChangePassword({user}) {
  return (
    <div class="container mx-auto flex bg-gray-200 my-8 rounded-xl shadow-md overflow-hidden">
      <SidebarProfile user={user} />
      <CardChangePassword />
    </div>
  );
}
export default ChangePassword;
