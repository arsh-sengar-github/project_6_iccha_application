import { useQueryContext } from "@/contexts/ideaContext";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { mannerismOptions, predictabilityOptions } from "@/helpers/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const IdeaDialog = ({ showIdeaDialog, setShowIdeaDialog, idea }) => {
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
    router.push("/name-idea");
  };
  return (
    <Dialog open={showIdeaDialog} onOpenChange={setShowIdeaDialog}>
      <DialogContent className="overflow-auto max-w-fit m-0 border-0 px-2! py-4! md:px-4!">
        <DialogTitle />
        <DialogDescription />
        <Tabs defaultValue="mannerism">
          <TabsList className="my-2 flex gap-2 bg-transparent">
            <TabsTrigger
              className="shadow-sm border text-lg text-gray-500 cursor-pointer hover:text-black data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
              value="mannerism"
            >
              Mannerism
            </TabsTrigger>
            <TabsTrigger
              className="shadow-sm border text-lg text-gray-500 cursor-pointer hover:text-black data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
              value="predictability"
            >
              Predictability
            </TabsTrigger>
            <TabsTrigger
              className="shadow-sm border text-lg text-gray-500 cursor-pointer hover:text-black data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
              value="quality"
            >
              Quality
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mannerism">
            <RadioGroup
              className="grid grid-cols-1 gap-2 md:grid-cols-3"
              defaultValue="Auto"
              onValueChange={submitMannerism}
            >
              {mannerismOptions.map((mannerism) => (
                <Label
                  className="border rounded p-2 flex items-center gap-2 cursor-pointer hover:shadow-sm"
                  key={mannerism.id}
                  htmlFor={mannerism.id}
                >
                  <RadioGroupItem
                    className="cursor-pointer"
                    id={mannerism.id}
                    value={mannerism.name}
                  />
                  <div>
                    <h3>{mannerism.name}</h3>
                    <p className="text-sm text-gray-500">
                      {mannerism.description}
                    </p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </TabsContent>
          <TabsContent value="predictability">
            <RadioGroup
              defaultValue="Easy"
              onValueChange={submitPredictability}
            >
              {predictabilityOptions.map((predictability) => (
                <Label
                  className="border rounded p-2 flex items-center gap-2 cursor-pointer hover:shadow-sm"
                  key={predictability.id}
                  htmlFor={predictability.id}
                >
                  <RadioGroupItem
                    className="cursor-pointer"
                    id={predictability.id}
                    value={predictability.name}
                  />
                  <div>
                    <h3>{predictability.name}</h3>
                    <p className="text-sm text-gray-500">
                      {predictability.description}
                    </p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </TabsContent>
          <TabsContent value="quality">
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
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default IdeaDialog;
