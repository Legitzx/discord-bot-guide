import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GoIcon from "react-icons/go";

export const SidebarData = [
	{
		title: "Introduction",
		path: "/introduction-start",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Getting Started",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Creating your bot",
		path: "/",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Name1",
		path: "/",
		icon: <GoIcon.GoArrowDown />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "name",
				path: "",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "name",
				path: "",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Team",
		path: "/",
		icon: <IoIcons.IoMdPeople />,
	},
	{
		title: "name3",
		path: "/",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "name",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
