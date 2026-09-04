const ProfileToolbar = () => {
  const toolData = [
    {
      toolIcon: "ri-phone-fill",
      toolLabel: "call",
    },
    {
      toolIcon: "ri-chat-1-fill",
      toolLabel: "message",
    },
    {
      toolIcon: "ri-video-on-fill",
      toolLabel: "video",
    },
    {
      toolIcon: "ri-mail-fill",
      toolLabel: "email",
    },
  ];

  return (
    <ul className="flex items-center justify-center gap-3 mt-4">
      {toolData.map((tool, idx) => (
        <li key={`tool-${idx}`} className="flex items-center justify-center">
          <button type="button">
            <div className="border w-15 rounded-2xl border-slate-300">
              <i className={tool.toolIcon}></i>
            </div>
            <h4 className="text-sm capitalize mt-1">{tool.toolLabel}</h4>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProfileToolbar;
