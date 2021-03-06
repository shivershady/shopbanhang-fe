import SettingProfile from "components/Profile/SettingProfile";
import SidebarProfile from "components/Sidebar/SidebarProfile";


function Profile(props) {
  const { user } = props;
  return (
    <div class="container mx-auto flex bg-gray-200 my-8 rounded-xl shadow-md overflow-hidden">
      <SidebarProfile user={user} />
      <SettingProfile user={user}/>
    </div>
  );
}
export default Profile;
