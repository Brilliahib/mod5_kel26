import { useState } from "react";

export default function Profile() {
  const followers = [
    {
      id: 1,
      name: "Akhila Zahraa",
      nim: "21120122140150",
      html_url: "https://github.com/akhilazahraa",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4", // Ganti dengan URL gambar avatar
    },
    {
      id: 2,
      name: "Reyhan Zidany",
      nim: "21120122140151",
      html_url: "https://github.com/ReyhanZidany",
      avatar_url: "https://avatars.githubusercontent.com/u/654321?v=4", // Ganti dengan URL gambar avatar
    },
    {
      id: 3,
      name: "Muhammad Ahib Ibrilli",
      nim: "21120122140149", // Menambahkan diri sendiri sebagai follower
      html_url: "https://github.com/Brilliahib",
      avatar_url: "https://avatars.githubusercontent.com/u/119148205?v=4",
    },
    // Tambahkan follower lain sesuai kebutuhan
  ];

  const [followerCount] = useState(followers.length); // Menghitung jumlah followers

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-xl">Profile</h1>
        </div>
        <div className="text-white flex justify-center">
          <ul className="space-y-2">
            {followers.map((follower) => (
              <li key={follower.id} className="flex items-center gap-4">
                <img
                  src={follower.avatar_url}
                  alt={follower.name}
                  width={"50px"}
                  className="rounded-full"
                />
                <a
                  href={follower.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {follower.name} - {follower.nim}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
