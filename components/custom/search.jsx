"use client";
import { useState } from "react";
import { useQueryContext } from "@/contexts/ideaContext";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import IdeaDialog from "./ideaDialog";

const Search = () => {
  const [idea, setIdea] = useState("");
  const submitIdea = (event) => {
    setIdea(event.target.value);
  };
  const { query, updateQuery } = useQueryContext();
  const [showIdeaDialog, setShowIdeaDialog] = useState(false);
  const ideaModal = () => {
    if (!idea) {
      return toast.error("Please enter an idea.");
    }
    updateQuery({ idea });
    setShowIdeaDialog(!showIdeaDialog);
  };
  return (
    <div className="m-2 flex justify-center items-center md:m-4">
      <div className="w-[75%] flex items-center gap-2 md:gap-4">
        <Input
          className="shadow-sm h-8 border-primary cursor-pointer"
          placeholder="Idea..."
          onChange={submitIdea}
        />
        <Button
          className="shadow-sm h-8 text-lg cursor-pointer"
          onClick={ideaModal}
        >
          Get Names
        </Button>
      </div>
      <IdeaDialog
        showIdeaDialog={showIdeaDialog}
        setShowIdeaDialog={setShowIdeaDialog}
        idea={idea}
      />
    </div>
  );
};

export default Search;
