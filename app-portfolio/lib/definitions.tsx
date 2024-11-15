export type PostsType = {
    id: string;
    title: string;
    href: string;
    date: string;
    text: string;
};

export type SideNavItem = {
	id?: string;
	title: string;
	path: string;
	icon?: JSX.Element;
	submenu?: boolean;
	subMenuItems?: SideNavItem[];
};

export type MenuItemWithSubMenuProps = {
	item: SideNavItem;
	toggleOpen: () => void;
};