/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2oWBHIXQfYl
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full px-4 py-12 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-medium mb-4 text-white">Type to find the best tacos in Chicago</h2>
        <div className="flex items-center bg-gray-700 shadow-md rounded-md">
          <div className="p-4">
            <svg
              className=" w-6 h-6 text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <Input
            className="border-none flex-grow px-2 text-white focus:outline-none bg-gray-700"
            placeholder="Search..."
            type="text"
          />
          <Button className="p-4" variant="ghost">
            <svg
              className=" w-6 h-6 text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}


