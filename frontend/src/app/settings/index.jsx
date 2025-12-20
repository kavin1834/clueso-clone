import { useState } from "react";

import SettingsTabs from "../../components/settings/SettingsTabs";
import ProfileSettings from "../../components/settings/ProfileSettings";
import WorkspaceSettings from "../../components/settings/WorkspaceSettings";
import ApiKeysSettings from "../../components/settings/ApiKeysSettings";
import DangerZone from "../../components/settings/DangerZone";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="p-6">

      {/* Page title */}
      <h1 className="text-2xl font-bold mb-4">
        Settings
      </h1>

      {/* Tabs */}
      <SettingsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Tab content */}
      {activeTab === "Profile" && <ProfileSettings />}
      {activeTab === "Workspace" && <WorkspaceSettings />}
      {activeTab === "API Keys" && <ApiKeysSettings />}
      {activeTab === "Danger Zone" && <DangerZone />}

    </div>
  );
}
