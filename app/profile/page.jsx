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
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
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
    <div className="w-[40%] bg-rental_beige_3 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 border border-rental_beige_1 rounded-lg shadow-xl h-[40vh]">
      {loading ? <p>Loading...</p> : user ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">Welcome {user.displayName}</h2>
          <p className="text-md font-light">You are here to:</p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => handleRoleSelection("renter")} className="bg-rental_primary text-rental_beige_3 p-2 rounded-lg">
              Rent Apartments
            </button>
            <button onClick={() => handleRoleSelection("host")} className="bg-rental_beige_3 border border-rental_primary text-rental_primary p-2 rounded-lg">
              Host Apartment
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
