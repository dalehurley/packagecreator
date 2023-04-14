import { useEffect, useState } from "react";

export default function Home() {
  // using useState create the variables for the config
  const [authorName, setAuthorName] = useState("");
  const [authorUrl, setAuthorUrl] = useState("");
  const [authorOrgName, setAuthorOrgName] = useState("");
  const [authorOrgUrl, setAuthorOrgUrl] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [githubOwnerId, setGithubOwnerId] = useState("");
  const [repoVisibility, setRepoVisibility] = useState("");
  const [repoPrefix, setRepoPrefix] = useState("");
  const [shouldPublishToNpm, setShouldPublishToNpm] = useState(false);
  const [gpt4Key, setGpt4Key] = useState("");

  // set the default values for the config
  useEffect(() => {
    console.log(process.env);
    process.env.NEXT_PUBLIC_AUTHOR_NAME &&
      setAuthorName(process.env.NEXT_PUBLIC_AUTHOR_NAME);
    process.env.NEXT_PUBLIC_AUTHOR_URL &&
      setAuthorUrl(process.env.NEXT_PUBLIC_AUTHOR_URL);
    process.env.NEXT_PUBLIC_AUTHOR_ORG_NAME &&
      setAuthorOrgName(process.env.NEXT_PUBLIC_AUTHOR_ORG_NAME);
    process.env.NEXT_PUBLIC_AUTHOR_ORG_URL &&
      setAuthorOrgUrl(process.env.NEXT_PUBLIC_AUTHOR_ORG_URL);
    process.env.NEXT_PUBLIC_GITHUB_USERNAME &&
      setGithubUsername(process.env.NEXT_PUBLIC_GITHUB_USERNAME);
    process.env.NEXT_PUBLIC_GITHUB_OWNER_ID &&
      setGithubOwnerId(process.env.NEXT_PUBLIC_GITHUB_OWNER_ID);
    process.env.NEXT_PUBLIC_REPO_VISIBILITY &&
      setRepoVisibility(process.env.NEXT_PUBLIC_REPO_VISIBILITY);
    process.env.NEXT_PUBLIC_REPO_PREFIX &&
      setRepoPrefix(process.env.NEXT_PUBLIC_REPO_PREFIX);
    process.env.NEXT_PUBLIC_SHOULD_PUBLISH_TO_NPM &&
      setShouldPublishToNpm(process.env.NEXT_PUBLIC_SHOULD_PUBLISH_TO_NPM);
    process.env.NEXT_PUBLIC_GPT4_KEY &&
      setGpt4Key(process.env.NEXT_PUBLIC_GPT4_KEY);
  }, []);

  // using useState create the variables for the ideas
  const [prompt, setPrompt] = useState("");
  const [numberOfFunctions, setNumberOfFunctions] = useState("");
  const [namePrefix, setNamePrefix] = useState("");

  // create an array of objects with the label and value
  const inputs = [
    {
      label: "Author Name",
      value: authorName,
      onChange: setAuthorName,
    },
    {
      label: "Author URL",
      value: authorUrl,
      onChange: setAuthorUrl,
    },
    {
      label: "Author Org Name",
      value: authorOrgName,
      onChange: setAuthorOrgName,
    },
    {
      label: "Author Org URL",
      value: authorOrgUrl,
      onChange: setAuthorOrgUrl,
    },
    {
      label: "Github Username",
      value: githubUsername,
      onChange: setGithubUsername,
    },
    {
      label: "Github Owner ID",
      value: githubOwnerId,
      onChange: setGithubOwnerId,
    },
    {
      label: "Repo Visibility (PUBLIC or PRIVATE)",
      value: repoVisibility,
      onChange: setRepoVisibility,
    },
    {
      label: "Repo Prefix",
      value: repoPrefix,
      onChange: setRepoPrefix,
    },
    {
      label: "GPT4 Key",
      value: gpt4Key,
      onChange: setGpt4Key,
    },
    {
      label: "Prompt",
      value: prompt,
      onChange: setPrompt,
    },
    {
      label: "Number of Functions",
      value: numberOfFunctions,
      onChange: setNumberOfFunctions,
    },
    {
      label: "Name Prefix",
      value: namePrefix,
      onChange: setNamePrefix,
    },
  ];

  const config = {
    AUTHOR_NAME: authorName,
    AUTHOR_URL: authorUrl,
    AUTHOR_ORG_NAME: authorOrgName,
    AUTHOR_ORG_URL: authorOrgUrl,
    GITHUB_USERNAME: githubUsername,
    GITHUB_OWNER_ID: githubOwnerId,
    REPO_VISIBILITY: repoVisibility,
    REPO_PREFIX: repoPrefix,
    SHOULD_PUBLISH_TO_NPM: shouldPublishToNpm,
    GPT4_KEY: gpt4Key,
  };

  const ideas = [
    {
      prompt: prompt,
      number_of_functions: numberOfFunctions,
      name_prefix: namePrefix,
    },
  ];

  // the handler that will call the creator API
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call the creator API
    const response = await fetch("/api/creator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ config, ideas }),
    });
    // get the response
    const result = await response.json();
    // log the result
    console.log(result);
  };

  return (
    <main className="container p-6 mx-auto">
      <h1 className="text-3xl">Hero AI Package Creator</h1>
      <form className="my-2">
        {inputs.map((input, index) => (
          <div key={index} className="flex flex-col py-2">
            <label>{input.label}</label>
            <input
              type="text"
              value={input.value}
              onChange={(e) => input.onChange(e.target.value)}
              className="px-4 py-2 border rounded"
            />
          </div>
        ))}
      </form>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </main>
  );
}
