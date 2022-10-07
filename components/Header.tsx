import { asset } from '$fresh/runtime.ts'

export default function Header() {
  return (
    <header class="flex gap-2 text-3xl font-semibold items-center mb-4">
      <img src={asset('/logo.svg')} alt="logo" />
      <h1>TODOS</h1>
    </header>
  )
}
