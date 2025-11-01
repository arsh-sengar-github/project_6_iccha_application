"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DomainDialog = ({ showDomainDialog, setShowDomainDialog, domain }) => {
  const [loading, setLoading] = useState(false);
  const [selectedDomainAvailability, setSelectedDomainAvailability] =
    useState();
  useEffect(() => {
    const getDomainAvailability = async () => {
      if (domain) {
        try {
          setLoading(true);
          const response = await fetch(
            `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.NEXT_PUBLIC_DOMAIN_AVAILABILITY_API_KEY}&domainName=${domain}&credits=DA`
          );
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          const currDomainAvailability = data.DomainInfo.domainAvailability;
          setSelectedDomainAvailability(currDomainAvailability);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    getDomainAvailability();
  }, [domain]);
  return (
    <Dialog open={showDomainDialog} onOpenChange={setShowDomainDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold">
            Availability
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-center">
            Is the name available as a domain?
          </DialogDescription>
          {loading ? (
            <div className="py-2 text-lg text-primary text-center font-semibold">
              Loading...
            </div>
          ) : selectedDomainAvailability === "AVAILABLE" ? (
            <div className="py-2 text-center">
              {domain} is{" "}
              <span className="p-2 rounded bg-green-500 text-lg text-white font-semibold">
                {selectedDomainAvailability}
              </span>
            </div>
          ) : (
            <div className="py-2 text-center">
              {domain} is{" "}
              <span className="p-2 rounded bg-red-500 text-lg text-white font-semibold">
                {selectedDomainAvailability}
              </span>
            </div>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DomainDialog;
