import { useState } from "react";

interface UserCardProps {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  isOnline: boolean;
  avatar: string;
  bio?: string; // Optional property
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  role,
  isOnline,
  avatar,
  bio,
}) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  // Define background colors based on role
  const roleColors: Record<UserCardProps["role"], string> = {
    admin: "bg-red-100",
    user: "bg-blue-100",
    guest: "bg-gray-100",
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${roleColors[role] || "bg-white"}`}
    >
      <div className="flex items-center gap-4">
        {/* Profile Picture with Online Indicator */}
        <div
          className={`w-14 h-14 rounded-full overflow-hidden border-2 ${
            isOnline ? "border-green-500" : "border-gray-300"
          }`}
        >
          <img src={avatar} alt={name} className="object-cover w-full h-full" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>
        </div>

        {/* Follow Button */}
        <button
          onClick={() => setIsFollowed(!isFollowed)}
          className={`px-3 py-1 rounded-md text-white ${
            isFollowed ? "bg-gray-500" : "bg-blue-500"
          }`}
        >
          {isFollowed ? "Followed" : "Follow"}
        </button>
      </div>

      {/* More Info Dropdown */}
      <button
        onClick={() => setShowMoreInfo(!showMoreInfo)}
        className="mt-3 text-sm text-blue-600 underline"
      >
        {showMoreInfo ? "Hide Info" : "More Info"}
      </button>

      {showMoreInfo && (
        <div className="p-2 mt-2 bg-white rounded-md shadow-md">
          <p className="text-sm">
            <strong>Email:</strong> {email}
          </p>
          {bio && (
            <p className="text-sm">
              <strong>Bio:</strong> {bio}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserCard;
