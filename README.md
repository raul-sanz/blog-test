# Blog build with Next.js and NextAuth.js

This blog shows how to implement a app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/) (frontend), [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It also demonstrates how to implement authentication using [NextAuth.js](https://next-auth.js.org/). The example uses an Postgres database.

Note that the app uses a mix of server-side rendering with `getServerSideProps` (SSR) and static site generation with `getStaticProps` (SSG). When possible, SSG is used to make database queries already at build-time (e.g. when fetching the [public feed](./pages/index.tsx)). Sometimes, the user requesting data needs to be authenticated, so SSR is being used to render data dynamically on the server-side (e.g. when viewing a user's [drafts](./pages/drafts.tsx)).

## Getting started

Clone this repository:

```
git clone git@github.com:raul-sanz/blog-test.git
```

Install npm dependencies:

```
cd blog-test
npm install
```

</details>

### 2. Create .env file

create a new `.env` file in the `/` of the project and paste your data

```
SECRET=
DATABASE_URL=
NEXTAUTH_URL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=
```

### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.
