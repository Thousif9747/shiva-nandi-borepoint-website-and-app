# React + Vite

## BorePoint admin setup

Open `/admin/` on the Netlify site to edit site photos, service card prices, and Instagram videos in Decap CMS. Editors sign in with their own GitHub accounts. Publishing commits the edited content to `main`, then Netlify builds and deploys the updated public site.

1. In [GitHub OAuth Apps](https://github.com/settings/developers), register a BorePoint OAuth app. Set the homepage to the live BorePoint URL and the authorization callback to `https://api.netlify.com/auth/done`. Generate a client secret.
2. In the Netlify project serving the BorePoint domain, go to **Project configuration → Security → OAuth → Authentication providers**. Install GitHub and enter that app's Client ID and Client Secret there. [Netlify OAuth setup](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/)
3. In the [BorePoint repository settings](https://github.com/Thousif9747/shiva-nandi-borepoint-website-and-app/settings/access), invite each editor as a GitHub collaborator with write access. They must accept the invitation before signing in. The repository must allow their commits to `main` for one-click publishing. [Decap GitHub backend](https://decapcms.org/docs/github-backend/)
4. Open the live `/admin/` page, choose **Login with GitHub**, then open **Website content**. Publish a change and check the Netlify Deploys page for the successful production deployment before refreshing the public site.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
