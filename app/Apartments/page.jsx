"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from '../assets/apart.jpeg';
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
};

function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHost, setIsHost] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingApartment, setEditingApartment] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/auth/user", {
          withCredentials: true,
        });
        setUser(data);
        setIsHost(data?.role === "host");
      } catch (err) {
        console.error("Error fetching user:", err);
        setUser(null);
      }
    };


    const fetchApartments = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/apartments", {
          withCredentials: true,
        });
        setApartments(data);
      } catch (err) {
        console.error("Error fetching apartments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchApartments();
  }, []);

  const handleAddApartment = async (newApartment) => {
    try {
      const token = localStorage.getItem("token") || getCookie("token");
  
      if (!token) {
        console.error("User is not authenticated. Please log in.");
        alert("You need to log in to add an apartment.");
        return;
      }
  
      await axios.post("http://localhost:5001/apartments/create", newApartment, {
        withCredentials: true,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      // Fetch updated list of apartments
      const { data } = await axios.get("http://localhost:5001/apartments", {
        withCredentials: true,
      });
      setApartments(data);
      setShowModal(false);
    } catch (err) {
      console.error("Error adding apartment:", err);
    }
  };  

  const handleUpdateApartment = async (id, updatedApartment) => {
    try {
      await axios.put(`http://localhost:5001/apartments/${id}`, updatedApartment, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      const { data } = await axios.get("http://localhost:5001/apartments", {
        withCredentials: true,
      });
      setApartments(data);
      setShowModal(false);
      setEditingApartment(null);
    } catch (err) {
      console.error("Error updating apartment:", err);
    }
  };

  const handleDeleteApartment = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/apartments/${id}`, {
        withCredentials: true,
      });

      setApartments((prevApartments) => prevApartments.filter((apartment) => apartment.id !== id));
    } catch (err) {
      console.error("Error deleting apartment:", err);
    }
  };

  const handleBooking = (id) => {
    console.log("Booking apartment:", id);
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="spinner">Loading...</div></div>;

  return (
    <div className="min-h-[100vh]">
      {!user ? (
        <div className="relative w-full flex-shrink-0 h-[40vh]">
        <Image
          src={bgImage}
          alt="Apartment background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-rental_black/65 flex items-center">
          <h2 className="text-rental_beige_3 font-semibold text-3xl text-center mx-auto">Login to see your apartments.</h2>
        </div>
      </div>
      ) : isHost ? (
        <div>
            <div className="relative w-full flex-shrink-0 h-[40vh]">
            <Image
              src={bgImage}
              alt="Apartment background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-rental_black/65 flex items-center">
              <h2 className="text-rental_beige_3 font-semibold text-3xl text-center mx-auto">Your Apartments</h2>
            </div>
          </div>
          {apartments.length > 0 ? (
            apartments
              .filter((apartment) => apartment.hostId === user.id)
              .map((apartment) => (
                <div key={apartment.id} className="border p-4 rounded-lg shadow-md mb-4">
                  <h3 className="text-lg font-semibold mt-2">{apartment.title}</h3>
                  <p className="text-gray-600">${apartment.pricePerNight} per night</p>
                  <p className="text-gray-500">{apartment.location}</p>
                  <div className="mt-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => setEditingApartment(apartment)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDeleteApartment(apartment.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-lg text-gray-400 text-center mt-4">You don't host any apartment for now.</div>
          )}
         <button onClick={() => setShowModal(true)} className="mt-4 ml-6 bg-rental_primary flex gap-1 items-center text-[17px] text-rental_beige_3 px-4 py-2 rounded">
         <FaPlus /> Add New Apartment
          </button>
          {showModal && (
            <ApartmentForm
              onSubmit={editingApartment ? handleUpdateApartment : handleAddApartment}
              initialData={editingApartment}
              onClose={() => {
                setShowModal(false);
                setEditingApartment(null);
              }}
            />
          )}
        </div>
      ) : (
        <div>
        <h2 className="text-xl font-bold">Available Apartments</h2>
        {apartments.length > 0 ? (
          apartments.map((apartment) => (
            <div key={apartment.id} className="border p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold">{apartment.title}</h3>
              <p className="text-gray-600">${apartment.pricePerNight} per night</p>
              <p className="text-gray-500">{apartment.location}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleBooking(apartment.id)}
              >
                Book
              </button>
            </div>
            ))
          ) : (
            <div>No available apartments at the moment</div>
          )}
        </div>
      )}
    </div>
  );
}

// Apartment form 
function ApartmentForm({ onSubmit, initialData, onClose }) {
  const [apartmentData, setApartmentData] = useState(
    initialData || {
      title: "",
      description: "",
      pricePerNight: "",
      location: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApartmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      onSubmit(apartmentData.id, apartmentData);
    } else {
      onSubmit(apartmentData);
    }
  };

  return (
    <div className="fixed inset-0 bg-rental_black bg-opacity-85 flex justify-center items-center z-50">
    <div className="bg-white w-3/5 p-4 rounded-lg shadow-lg backdrop-blur-xl">
      <form onSubmit={handleFormSubmit} className="space-y-4 flex flex-col gap-2">
        <input
          type="text"
          name="title"
          value={apartmentData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="description"
          value={apartmentData.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="pricePerNight"
          value={apartmentData.pricePerNight}
          onChange={handleInputChange}
          placeholder="Price Per Night"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={apartmentData.location}
          onChange={handleInputChange}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <div className="flex justify-between gap-3">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {initialData ? "Update" : "Add"} Apartment
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Apartments;
