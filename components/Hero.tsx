import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <section>
      <NavigationMenu />
      <div className="py-16 px-12 flex justify-between">
        <div className="flex flex-col mt-16 ml-10 max-w-[480px]">
          <h1 className="text-4xl tracking-light text-gray-900 font-medium flex flex-col">
            Helping You Help Others!
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
          <div className="mt-6">
            <button className="text-red-600 text-lg">Learn More!</button>
          </div>
        </div>
        <div className="w-[560px] h-[320px] bg-black rounded-3xl ">
          <img
            src="https://images.unsplash.com/photo-1616680214452-df6901ae5727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>
      {/* <Partners /> */}
    </section>
  );
}

function NavigationMenu() {
  return (
    <div className="h-16 border-b flex items-center px-4 justify-between">
      <div>Logo</div>
      <div className="flex gap-4 divide-x">
        <div className="flex items-center">
          <MagnifyingGlassIcon className="w-4" />
        </div>
        <div className="space-x-4 pl-4">
          <button className="font-medium text-red-600">Sign in</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Create your account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
