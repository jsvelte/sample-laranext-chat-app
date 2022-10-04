import Head from 'next/head'
import { useState } from 'react'
import type { NextPage } from 'next'

const Index: NextPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [messages, setMessages] = useState<string[]>([])

  return (
    <>
      <Head>
        <title>Sample Chat App with Laravel Pusher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center overflow-hidden bg-gray-200 text-center">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-1 flex-col rounded-3xl bg-slate-100 py-3 px-5">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-left">
              username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full border border-gray-300 py-2 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col justify-start overflow-y-auto bg-blue-50 p-3 text-left">
            <div className="flex gap-4">
              <div>
                <strong className="font-semibold">Username</strong>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi repellendus
                deleniti ut iste, veritatis sunt at dignissimos molestias magnam praesentium iure
                esse aliquid incidunt pariatur quas beatae. Doloremque, perferendis?
              </div>
            </div>
          </div>
          <form className="mt-auto flex flex-col">
            <label htmlFor="username" className="text-left">
              Message
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 py-2 px-4"
              placeholder="Message"
            />
          </form>
        </div>
      </main>
    </>
  )
}

export default Index
