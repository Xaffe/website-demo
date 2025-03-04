import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Box } from "@quarkly/widgets";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
const defaultProps = {
	"md-z-index": "9"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-end",
			"md-flex-direction": "column",
			"md-margin": "40px 0px 13px 0px",
			"md-font": "--headline4"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"font": "normal 600 18px/1.5 --fontFamily-googleInter",
			"text-decoration-line": "initial",
			"color": "--white",
			"margin": "0px 20px 0px 20px",
			"md-margin": "0px 0px 13px 0px",
			"md-font": "--lead",
			"md-color": "--indigo",
			"children": "Home"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"transition": "opacity 0.3s ease 0s",
			"md-margin": "0px 0px 13px 0px",
			"href": "#about",
			"font": "--base",
			"text-decoration-line": "initial",
			"hover-opacity": "1",
			"md-font": "--lead",
			"md-color": "--indigo",
			"color": "--grey",
			"margin": "0px 20px 0px 20px",
			"opacity": "0.8",
			"children": "Application"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"color": "--grey",
			"margin": "0px 20px 0px 20px",
			"transition": "opacity 0.3s ease 0s",
			"md-margin": "0px 0px 13px 0px",
			"md-font": "--lead",
			"href": "#contact",
			"font": "--base",
			"text-decoration-line": "initial",
			"opacity": "0.8",
			"hover-opacity": "1",
			"md-color": "--indigo",
			"children": "Health"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"hover-opacity": "1",
			"md-font": "--lead",
			"md-color": "--indigo",
			"font": "--base",
			"color": "--grey",
			"opacity": "0.8",
			"transition": "opacity 0.3s ease 0s",
			"md-margin": "0px 0px 13px 0px",
			"href": "#testimonial",
			"text-decoration-line": "initial",
			"margin": "0px 8px 0px 20px",
			"children": "Reviews"
		}
	}
};

const Stock = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitMobileSidePanel {...rest}>
		<Override
			slot="Content"
			align-items="center"
			padding="16px 0px 16px 16px"
			md-background="--color-light"
			md-z-index="9"
			md-justify-content="flex-start"
			background="rgba(255, 255, 255, 0)"
			justify-content="center"
		/>
		<Override slot="Children" justify-content="center" display="flex" align-items="center" />
		<Override slot="Button Text" md-display="none" />
		<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
		<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
		<Override slot="Wrapper" md-z-index="9" />
		<Box {...override("box")}>
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
		</Box>
		{children}
	</QuarklycommunityKitMobileSidePanel>;
};

Object.assign(Stock, { ...QuarklycommunityKitMobileSidePanel,
	defaultProps,
	overrides
});
export default Stock;