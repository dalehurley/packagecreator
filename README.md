# hero-ai-package-creator

Hi! I'm [Dale Hurley](https://dalehurley.com). [Sam Chahine](https://hero.page/samir) made [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator#hero-ai-package-creator) which generates a new AI package for you. I've created a basic front-end for it. You can use it to generate a new AI package for you. It's a work in progress, but it's a start.

This UI is a very basic front-end to be ran locally. It's not hosted anywhere. You'll need to run it locally.

## Getting Started

You will need to have the following:

* a GitHub account
* gh CLI tool installed
* to obtain your GitHub owner ID (details below)
* an OPENAI API key
* access to the GPT-4 model

## Configuration

Instead of inputting all of the configuration values in the UI, you can configure the app using environment variables.
You'll need to create a `.env.local` file in the root of the project. The `.env.local` file should contain the following environment variables:
```bash
NEXT_PUBLIC_AUTHOR_NAME=
NEXT_PUBLIC_AUTHOR_URL=
NEXT_PUBLIC_AUTHOR_ORG_NAME=
NEXT_PUBLIC_AUTHOR_ORG_URL=
NEXT_PUBLIC_GITHUB_USERNAME=
NEXT_PUBLIC_GITHUB_OWNER_ID=
NEXT_PUBLIC_REPO_VISIBILITY=
NEXT_PUBLIC_REPO_PREFIX=
NEXT_PUBLIC_SHOULD_PUBLISH_TO_NPM=
NEXT_PUBLIC_GPT4_KEY=
```

Just rename `.env.local.example` to `.env.local` and fill in the values.

Just remember to not commit the `.env.local` file to your repository as it contains sensitive information, or make it public.

## Obtaining your GitHub owner ID

To obtain your GitHub owner ID, follow these steps:

1. Install the `gh` CLI tool: `brew install gh`
2. Log in to your GitHub account: `gh auth login`
3. Run the following command, replacing "YOUR_GITHUB_USERNAME/ORG" with your actual GitHub username  `gh api graphql -f query='{ user(login:"YOUR_GITHUB_USERNAME") { id } }'` or organization name: `gh api graphql -f query='{ organization(login:"ORG") { id } }'`
4. Replace "NEXT_PUBLIC_GITHUB_OWNER_ID" with the owner ID obtained from the query.

## Contributing

Contributions and issues are welcome. However, please note that I may have limited time to fix issues and review contributions. Your help is appreciated!

## License

This project is licensed under the MIT License.
