import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <AiOutlineMenu size={20} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"#author"}>Author</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={"#overview"}>Overview</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link href={"#description"}>Description</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link href={"#conclusion"}>Conclusion</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Menu;
