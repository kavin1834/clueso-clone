import { Routes, Route } from "react-router-dom";

// Public
import Landing from "./public/landing";

// Auth
import Login from "./auth/login";
import Signup from "./auth/signup";
import Onboarding from "./auth/onboarding";

// App layout
import AppLayout from "./app/layout";

// Existing app pages
import FeedbackInbox from "./app/feedback";
import Insights from "./app/insights";
import Collect from "./app/collect";
import Settings from "./app/settings";

// Backend-connected pages
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* App */}
      <Route path="/app" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="feedback" element={<FeedbackInbox />} />
        <Route path="insights" element={<Insights />} />
        <Route path="collect" element={<Collect />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
