"use client"
import { useAuth } from "../auth/AuthContext";
import { useRouter } from "next/navigation";

function Profile() {
  const { user, setUser, loading } = useAuth();
  const router = useRouter();

  const handleRoleSelection = (role) => {
    if (!user) return console.error("User is not authenticated");

    fetch("http://localhost:5001/update-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update role");
        return res.json();
      })
      .then(() => {
        setUser((prevUser) => ({ ...prevUser, role }));
        router.push("/");
      })
      .catch((err) => console.error("Error updating role:", err));
  };

  return (
    <div className="w-[40%] mt-10 mx-auto p-6 border rounded-lg">
      {loading ? <p>Loading...</p> : user ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">Welcome {user.displayName}</h2>
          <p>Select your role:</p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => handleRoleSelection("renter")} className="bg-blue-500 text-white p-2 rounded-lg">
              Renter
            </button>
            <button onClick={() => handleRoleSelection("host")} className="bg-green-500 text-white p-2 rounded-lg">
              Host
            </button>
          </div>
        </>
      ) : (
        <p>User not found. Redirecting...</p>
      )}
    </div>
  );
}

export default Profile;
