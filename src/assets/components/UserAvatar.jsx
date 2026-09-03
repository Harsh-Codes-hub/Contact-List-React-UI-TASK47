const UserAvatar = ({name}) => {
  const avatarColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  const colorIndex = name.charCodeAt(0) % avatarColors.length;

  return (
    <div
      className={`aspect-square h-8 rounded-full flex items-center justify-center ${avatarColors[colorIndex]}`}
    >
      {name?.[0]?.toUpperCase()}
    </div>
  );
};

export default UserAvatar;
