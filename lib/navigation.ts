type NavigationChild = {
  id: number;
  name: string;
  href: string;
};

type NavigationItem = {
  id: number;
  name: string;
  href: string;
  children?: NavigationChild[];
};

export const Navigations: NavigationItem[] = [
  {
    id: 0,
    name: "Hjem",
    href: "/",
  },
  {
    id: 2,
    name: "Om Oss",
    href: "/omoss",
   
  },
  {
    id: 4,
    name: "Donation",
    href: "/donation",
    // children: [
    //   {
    //     id: 41,
    //     name: "Donation Via Paypal",
    //     href: "/donation/donation-via-paypal",
    //   },
    //   {
    //     id: 42,
    //     name: "Donation Via Swish",
    //     href: "/donation/donation-via-swish",
    //   },
    //   {
    //     id: 43,
    //     name: "Donation Via Bank",
    //     href: "/donation/donation-via-bank",
    //   },
    // ],
  },
  {
    id: 5,
    name: "Nyheter",
    href: "/nyheter",
  },
  {
    id: 6,
    name: "Bilder",
    href: "/bilder",
  },
  {
    id: 7,
    name: "Videos",
    href: "/videos",
  },
  {
    id: 8,
    name: "Kontakt",
    href: "/kontakt",
  },
];
