export const Input = ({ label, type, id, placeholder }) => {
    return (
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <label htmlFor={id} className="font-semibold capitalize">
            {label}
          </label>
        </div>
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
        />
      </div>
    )
  }

export default function Home() {
    return (
        <div className="container mt-5 text-center">
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="type your name..."
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="type your password..."
            />
          </div>
        </div>
      )
}