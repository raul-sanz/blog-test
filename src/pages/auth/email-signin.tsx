import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import { getCsrfToken } from "next-auth/react"

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h3 className="text-center mb-3 text-lg">Login</h3>
      <form method="post" action="/api/auth/signin/email" className="flex flex-col gap-2 w-64">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <input placeholder="Email" className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" id="email" name="email" />
        <button className="bg-primary text-white p-4 rounded-lg" type="submit">Sign in with Email</button>
      </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}