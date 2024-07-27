export const navConfigs = [
  {
    id: 1,
    linkText: "Getting started",
    navContent: (
      <>
        <ul className="grid gap-3 p-6 w-[60vw]">
          <li className="row-span-3">
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
              <p className="text-sm leading-tight text-muted-foreground">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
              </p>
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    linkText: "Components",
    navContent: (
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        <p>Test</p>
      </ul>
    ),
  },
  {
    id: 3,
    linkText: "Documentation",
  },
];
