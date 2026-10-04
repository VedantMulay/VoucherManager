import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  } from "@/components/ui/navigation-menu";

interface NavbarProps {
  session: unknown;
}

export function Navbar({ session }: NavbarProps) {
  return (
    <NavigationMenu className="mx-auto items-center justify-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href={"/"}>Home</NavigationMenuLink>
        </NavigationMenuItem>

        {session ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/user/dashboard"}>Vouchers</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href={"/user/account"}>Account</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/auth/logout"} className="text-red-500">
                Logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/auth/login"}>Login</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href={"/auth/register"}>Sign Up</NavigationMenuLink>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
  }