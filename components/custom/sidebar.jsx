"use client";
import { useQueryContext } from "@/contexts/ideaContext";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { mannerismOptions, predictabilityOptions } from "@/helpers/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Sidebar = ({ resubmit, setResubmit }) => {
  const { query, updateQuery } = useQueryContext();
  const submitMannerism = (mannerism) => {
    updateQuery({ mannerism });
  };
  const submitPredictability = (predictability) => {
    updateQuery({ predictability });
  };
  const submitQuality = (event) => {
    updateQuery({ [event.target.name]: event.target.value });
  };
  const router = useRouter();
  const nameIdea = () => {
    setResubmit(!resubmit);
  };
  return (
    <Card className="p-2">
      <CardContent>
        <div className="py-2">
          <h2 className="pb-2 text-lg font-semibold">Mannerism</h2>
          <RadioGroup
            value={query?.mannerism || "Auto"}
            onValueChange={submitMannerism}
          >
            {mannerismOptions.map((mannerism) => (
              <Label
                className="items-center gap-2 cursor-pointer"
                key={mannerism.id}
                htmlFor={mannerism.id}
              >
                <RadioGroupItem
                  className="cursor-pointer"
                  id={mannerism.id}
                  value={mannerism.name}
                />
                <h3 className="text-gray-500">{mannerism.name}</h3>
              </Label>
            ))}
          </RadioGroup>
        </div>
        <div className="py-2">
          <h2 className="pb-2 text-lg font-semibold">Predictability</h2>
          <RadioGroup
            value={query?.predictability || "Easy"}
            onValueChange={submitPredictability}
          >
            {predictabilityOptions.map((predictability) => (
              <Label
                className="items-center gap-2 cursor-pointer"
                key={predictability.id}
                htmlFor={predictability.id}
              >
                <RadioGroupItem
                  className="cursor-pointer"
                  id={predictability.id}
                  value={predictability.name}
                />
                <h3 className="text-gray-500">{predictability.name}</h3>
              </Label>
            ))}
          </RadioGroup>
        </div>
        <div className="py-2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-full flex flex-col gap-2">
              <Label>Idea</Label>
              <Input
                className="cursor-pointer"
                name="idea"
                value={query?.idea || ""}
                placeholder="Idea"
                onChange={submitQuality}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label>Description</Label>
              <Input
                className="cursor-pointer"
                name="description"
                value={query?.description || ""}
                placeholder="Description"
                onChange={submitQuality}
              />
            </div>
            <Button className="cursor-pointer" onClick={nameIdea}>
              Name Idea
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
