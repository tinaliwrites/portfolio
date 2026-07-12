import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import WritingArchive from "./pages/WritingArchive";
import MoreAbout from "./pages/MoreAbout";
import ResumePage from "./pages/ResumePage";
import Poetry from "./pages/Poetry";
import PoetryArchive from "./pages/PoetryArchive";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing-archive" element={<WritingArchive />} />
          <Route path="/more-about" element={<MoreAbout />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/poetry-archive" element={<PoetryArchive />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
