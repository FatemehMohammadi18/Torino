"use clinet";
import ProfileDropDown from "./ProfileDropDown";

function UserBtn({ user, setUser }) {
  return (
    <>
      {user ? (
        <ProfileDropDown user={user}  setUser={setUser}/>
      ) : (
        <button className="flex justify-between items-center cursor-pointer text-sm lg:text-lg font-semibold text-primary py-1.5 px-3 gap-1">
          loading
        </button>
      )}
    </>
  );
}

export default UserBtn;
