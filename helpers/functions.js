export const getNamesPrompt = (input) => {
  const prompt = `Hello Gemini! Please, generate brand names for me. I will provide you with three aspects namely: Style of the name, Arbitrariness of the name, and Information relating the brand. Use the information relating the three aspects to generate brand names.


    ### Provided aspects: 
    - Style of the name: ${input?.mannerism || "Auto"}
    - Arbitrariness of the name: ${input?.predictability || "Easy"}
    - Information relating the brand: title: ${
      input?.idea || "E-commerce"
    }, and description:  ${
    input?.description || "A platform to buy, and sell products online."
  }


    ### Requirements:
    - Generate 20 unique brand names using the provided aspects.
    - Respond in JSON format, also include the following:
       - "mannerism": the style of the generated name.
       - "predictability": the arbitrariness of the generated name.
       - "idea": the provided title.
       - "description": the provided description.
       - "names": an array of generated names.


    ### Meaning of provided style, and arbitrariness:
    Style of the name:
    - Auto: Names of any style.
    - Descriptive: Names that tell directly what the entity does. Example: PayPal, BookMyShow, etc.
    - Invented: Names that are completely coined - original, phonetic, or hybrid. Example: Xerox, Kodak, etc.
    - Evocative: Names that suggest a feeling, idea, or story. Example: Amazon, Apple, etc.
    - Experiential: Names that captures the experience, or promise. Example: Uber, Airbnb, etc.
    - Lexical: Names built on wordplay, rhythm, or alteration - including puns, componds, and alliterations. Example: Coca-Cola, Dunkin' Donuts, etc.
    - Foundational: Names drawn from real words, mythology, geography, or personalities. Example: Tesla, Nike, etc.

    Arbitrariness of the name: 
    - Easy: Names that are simple to spell, pronounce, and remember.
    - Moderate: Names that strike a balance between uniqueness, and familiarity.
    - Hard: Names that are distinctive, and unconventional.


    ### Example of a response in JSON format:
    {
        "mannerism": "Descriptive",
        "predictability": "Easy",
        "idea": "E-commerce",
        "description": "A platform to buy, and sell products online.",
        "names": [
            "ShopEase",
            "BuyNGo",
            "QuickCart",
            "EasyBuy",
            "CartBuddy",
        ]
    }


    ### Instructions:
    - Ensure the response is valid JSON.
    - Tailor the names to fit the provided Style, and Arbitrariness.
    - Ensure the array "names" contain only uniqe values.
    - Tailor names of any one, or more of the mentioned styles if the provided style is "Auto".
    - Avoid generating names that are already in use.
       - Names in use: ${input.generatedNames || []}

    `;
  return prompt;
};
