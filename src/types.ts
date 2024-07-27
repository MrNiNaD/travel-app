type NavConfigType = {
  id: number;
  linkText: string;
  navContent?: React.JSX.Element;
}

type NavTypes = {
  navConfigs: NavConfigType[],
}