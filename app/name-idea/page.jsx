"use client";
import { useState, useRef, useEffect } from "react";
import { useQueryContext } from "@/contexts/ideaContext";
// note: outdated package.
// import { GoogleGenerativeAI } from "@google/generative-ai";
// note: updated package.
import { GoogleGenAI } from "@google/genai";
import { getNamesPrompt } from "@/helpers/functions";
import Sidebar from "@/components/custom/sidebar";
import DomainDialog from "@/components/custom/domainDialog";

const NameIdeaPage = () => {
  const [resubmit, setResubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { query, updateQuery } = useQueryContext();
  const [generatedNames, setGeneratedNames] = useState([]);
  const [page, setPage] = useState(1);
  const observeNextPage = useRef();
  const fetchIdeaNames = async () => {
    try {
      setLoading(true);
      // note: outdated code.
      // const genAI = new GoogleGenerativeAI(
      //   process.env.NEXT_PUBLIC_GEMINI_API_KEY
      // );
      // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      // const input = { ...query, generatedNames };
      // const prompt = getNamesPrompt(input);
      // const result = await model.generateContent(prompt);
      // note: updated code.
      const ai = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      });
      const input = { ...query, generatedNames };
      const prompt = getNamesPrompt(input);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      const responseText = response.text;
      const responseTextCleaned = responseText.replace(/```json|```/g, "");
      const responseData = JSON.parse(responseTextCleaned);
      if (responseData && responseData.names) {
        const newGeneratedNames = responseData.names;
        setGeneratedNames([...generatedNames, ...newGeneratedNames]);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setGeneratedNames([]);
    fetchIdeaNames();
  }, [resubmit]);
  useEffect(() => {
    fetchIdeaNames();
  }, [page]);
  const submitNextPage = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const [showDomainDialog, setShowDomainDialog] = useState(false);
  const [domain, setDomain] = useState();
  const getDomainAvailability = async (selectedName) => {
    const domain =
      selectedName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".com";
    setDomain(domain);
    setShowDomainDialog(!showDomainDialog);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(submitNextPage, {
      root: null,
      rootMargin: "-10px",
      threshold: [0, 0.5, 1],
    });
    if (observeNextPage.current) {
      observer.observe(observeNextPage.current);
    }
    return () => {
      if (observeNextPage.current) {
        observer.unobserve(observeNextPage);
      }
    };
  }, []);
  return (
    <div className="px-8 py-16 md:p-32">
      <h1 className="shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] border-b border-gray-200 pb-2 text-4xl text-center font-bold">
        Idea Name
      </h1>
      <div className="py-2 flex flex-col justify-center gap-2 md:py-8 md:flex-row md:gap-8">
        <div className="md:w-[25%]">
          <Sidebar resubmit={resubmit} setResubmit={setResubmit} />
        </div>
        <div className="md:w-[75%]">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
            {generatedNames &&
              generatedNames.length > 0 &&
              generatedNames.map((generatedName, index) => {
                return (
                  <div
                    className="shadow-sm border rounded-xl p-2 text-gray-500 cursor-pointer hover:bg-primary hover:text-white"
                    key={index}
                    onClick={() => getDomainAvailability(generatedName)}
                  >
                    {generatedName}
                  </div>
                );
              })}
          </div>
          {loading && (
            <div className="text-lg text-primary text-center font-semibold">
              Loading...
            </div>
          )}
          <div className="h-2" ref={observeNextPage} />
        </div>
      </div>
      <DomainDialog
        showDomainDialog={showDomainDialog}
        setShowDomainDialog={setShowDomainDialog}
        domain={domain}
      />
    </div>
  );
};

export default NameIdeaPage;
