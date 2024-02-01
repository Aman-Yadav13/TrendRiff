import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="black" />
      </div>
      <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="black" />
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
