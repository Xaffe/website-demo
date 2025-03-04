import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Span, Text, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section background="#1a21ff" padding="36px 0 36px 0" quarkly-title="Header" height="150px">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image
					height="auto"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22:55:12.812Z"
					width="100%"
					max-width="300px"
					background="rgba(2, 2, 2, 0)"
					border-color="#664e4e"
					position="relative"
					right="75px"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.Stock>
					<Override slot="link1" href="/stock">
						Stock
					</Override>
					<Override slot="link3" position="relative" right="45px" href="#33">
						Get in touch
					</Override>
					<Override slot="link2" />
				</Components.Stock>
			</Box>
		</Section>
		<Section background="#1a21ff" />
		<Section background="#1a21ff" />
		<Section background="#1a21ff" padding="36px 0 80px 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
			/>
			<Text margin="0px 0px 0px 0px">
				<Span
					display="inline"
					overflow-wrap="anywhere"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							<br />
						</Span>
					</Span>
				</Span>
			</Text>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="center"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
				flex-wrap="wrap"
				align-content="flex-start"
			>
				<Text
					font="normal 400 18px/1.5 --fontFamily-googleInter"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
					position="relative"
					left="50%"
					top="75%"
					text-align="center"
					width="200%"
					display="block"
					overflow-x="visible"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					overflow-wrap="anywhere"
					text-overflow="ellipsis"
					white-space="break-spaces"
					border-radius="1000px"
					border-width="1px"
					z-index="1"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						{"\n"}For over half a decade we've been buying,selling and investing in digital goods focusing on big Instagram & Twitter Accounts/Usernames but also domains & more.{"\n\n"}
						<br />
					</Span>
				</Text>
			</Box>
			<Text
				lg-text-align="left"
				lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
				margin="0px 0px 16px 0px"
				font="--headline1"
				color="--white"
				sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				text-align="center"
				user-select="auto"
				position="relative"
			>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					position="relative"
					right="50%"
				>
					We buy wonderful digital assets.
				</Span>
			</Text>
		</Section>
		<Section background="#1a21ff" />
		<Section background="#1a21ff" />
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0" background="#1a21ff">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" height="500px" />
			<Box
				width="40%"
				flex-direction="column"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					position="static"
					lg-left="0px"
					md-width="100%"
					border-radius="10px"
					lg-max-height="366px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20:41:04.959Z"
					left="-140px"
					max-width="100%"
					object-fit="cover"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/20945298.jpg?v=2025-03-02T20%3A41%3A04.959Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					/>
				</Box>
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="--lead">
					Before being actually able to sell it you'll talk to a bunch of scammers and unserious people for hours and hours.
					<br />
					<br />
					If you're really lucky and your deal closes, your bank account or crypto wallet gets a bit bigger...then you get to watch the new owner wreck the account you spent months building.
					<br />
					<br />
					After going through it way too many times ourselves, we started Xaffe to become the buyer we wish we could've sold to.
				</Text>
				<Text
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0"
					font="normal 700 35px/1.2 --fontFamily-googleInter"
					color="--light"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
					position="relative"
					bottom="445px"
					width="620px"
					padding="0 0px 0px 0px"
					right="40%"
					height="100px"
				>
					Selling your account can be brutal...
				</Text>
			</Box>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0" background="#1a21ff">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" height="500px" />
			<Box
				width="40%"
				flex-direction="column"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					position="static"
					lg-left="0px"
					md-width="100%"
					border-radius="10px"
					lg-max-height="366px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20:25:23.807Z"
					left="-140px"
					max-width="100%"
					object-fit="cover"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/3293514.jpg?v=2025-03-02T20%3A25%3A23.807Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					/>
				</Box>
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="--lead">
					When buying an account or username you will also talk to a bunch of scammers and people who refuse to use Middlemen or Escrow services to screw you over.
					<br />
					<br />
					If you're really lucky and you actually buy a legit account you can expect it to get it pulled back,shadowbanned or even worse - banned.
					<br />
					<br />
					It happened to us multiple times so we started Xaffe to become the sellers we wanted to get sold to by.
				</Text>
				<Text
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0"
					font="normal 700 35px/1.2 --fontFamily-googleInter"
					color="--light"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
					position="relative"
					width="665px"
					padding="0 0px 0px 0px"
					right="40%"
					height="100px"
					bottom="420px"
				>
					Buying an account can also be brutal...
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#1a21ff">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="normal 700 35px/1.2 --fontFamily-googleInter"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					position="relative"
					top="40px"
				>
					We give sellers dream exits
					<br />
					& buyers dream accounts
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="400px"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						big vouch Xaffe for $1.25k deal,two ig stats.Deal couldn't have gone smoother, ideal seller ❤️🤝
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01:37:23.412Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/pardi.jpg?v=2025-03-03T01%3A37%3A23.412Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Pardi
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								@pardihard on IG
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 15px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="400px"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						yooo I'm in.
						<br />
						<br />
						you're mad legiy
						<br />
						<br />
						Legit*
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" height="83px">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01:44:35.607Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/jav.jpg?v=2025-03-03T01%3A44%3A35.607Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Jav
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Telegram User
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="400px"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Vouch for Xaffe they sold me an Instagram account and I went first.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" height="83px">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01:48:38.367Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/abstract-initial-letter-wh-hw-logo-blue-color-isolated-white-background_388320-901-3285488894.jpg?v=2025-03-03T01%3A48%3A38.367Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Willem Holleeder
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Telegram User
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Vouch Xaffe sold them an Instagram username.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" height="83px">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01:54:27.224Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/master.png?v=2025-03-03T01%3A54%3A27.224Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								@Master
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								On Oguser.com
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0 100px 0" md-padding="60px 0 60px 0" background="#1a21ff">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				justify-content="center"
				align-items="flex-start"
				flex-direction="column"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Text
					margin="0px 0px 38px 0px"
					font="normal 700 33px/1.2 --fontFamily-googleInter"
					color="--light"
					md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="left"
					position="relative"
					left="25%"
				>
					We like to buy digital goods that are:
				</Text>
				<Hr
					border-style="solid"
					margin="0px 0px 0px 0px"
					height="0px"
					lg-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
			</Box>
			<Box
				flex-direction="column"
				justify-content="flex-start"
				border-width="0px 1px 0px 0px"
				md-padding="32px 16px 16px 16px"
				width="25%"
				max-height="265px"
				display="flex"
				align-items="center"
				sm-justify-content="flex-start"
				lg-justify-content="flex-start"
				md-align-items="center"
				border-color="rgba(66, 82, 207, 0.1)"
				height="100%"
				md-width="50%"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				margin="0px 0px 0px 0px"
				padding="16px 32px 16px 16px"
			>
				<Image
					object-fit="cover"
					border-radius="50%"
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19:53:11.181Z"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 17px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Instagram Stats
				</Text>
				<Text margin="0px 0px 0px 0px" font="400 15px/1.6 --fontFamily-googleInter" color="--light" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					20-100K Follower Stats
					<br />
					with good engagement{" "}
				</Text>
			</Box>
			<Box
				flex-direction="column"
				justify-content="flex-start"
				border-width="0px 1px 0px 0px"
				md-padding="32px 16px 16px 16px"
				width="25%"
				max-height="265px"
				display="flex"
				align-items="center"
				sm-justify-content="flex-start"
				lg-justify-content="flex-start"
				md-align-items="center"
				border-color="rgba(66, 82, 207, 0.1)"
				height="100%"
				md-width="50%"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				margin="0px 0px 0px 0px"
				padding="16px 32px 16px 16px"
			>
				<Image
					object-fit="cover"
					border-radius="50%"
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19:53:11.181Z"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f13bc7ebea986524e8_icon-chart.png?v=2025-03-03T19%3A53%3A11.181Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 17px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Cool Instagram Users
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="400 15px/1.6 --fontFamily-googleInter"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					Like @h0ri, @uploaad, @buut, etc.
				</Text>
			</Box>
			<Box
				padding="16px 32px 16px 32px"
				border-width="0px 1px 0px 1px"
				width="25%"
				md-align-items="center"
				align-items="center"
				flex-direction="column"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-border-width="0px 0px 0px 1px"
				md-justify-content="flex-start"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
				display="flex"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				height="100%"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				md-width="50%"
			>
				<Image
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20:01:05.734Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f179358d80c90cbdd4_icon-puzzle.png?v=2025-03-03T20%3A01%3A05.734Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text font="600 18px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center" margin="0px 0px 8px 0px">
					Twitter Stats
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--textBase"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					20-100K Follower NSFW
					<br />
					Stats with good engagement
				</Text>
			</Box>
			<Hr
				display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-style="solid"
				margin="0px 16px 32px 16px"
				md-margin="16px 16px 16px 16px"
				md-display="block"
				border-width="2px 0 0 0"
				height="0px"
			/>
			<Box
				border-color="rgba(66, 82, 207, 0.1)"
				md-justify-content="flex-start"
				sm-margin="0px 0px 30px 0px"
				padding="16px 32px 16px 32px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				sm-padding="32px 16px 16px 16px"
				border-width="0px 1px 0px 1px"
				lg-min-height="298px"
				md-border-width="0px 1px 0px 0px"
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				height="100%"
				width="25%"
				md-width="50%"
				lg-justify-content="flex-start"
				md-align-items="center"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
			>
				<Image
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19:54:26.710Z"
					object-fit="cover"
					border-radius="50%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f0b5093e9d72bdf6cb_icon-castle.png?v=2025-03-03T19%3A54%3A26.710Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 18px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Have unique advantage
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--textBase"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					Like a brand, community or niche
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20:16:15.293Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 18px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Cool Domains
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--textBase"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					Cool domains that are cheap.
					<br />
					Kinda like Xaffe.com :)
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20:16:15.293Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 18px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Cool Twitter Users
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--textBase"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					Like @blub, @gezz, @tacy, etc.
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21:08:11.257Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f1ba1986a78f036cc4_icon-coin.png?v=2025-03-03T21%3A08%3A11.257Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="0px 0px 8px 0px"
					font="600 18px/1.3 --fontFamily-googleInter"
					color="--light"
					sm-text-align="center"
					text-align="center"
				>
					Healthy Grow & Engagement
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--textBase"
					color="--light"
					lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					Good amount of Instagram/Twitter Engagement
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20:16:15.293Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/5f2c72f138d79c86a96ecf54_icon-mountain.png?v=2025-03-03T20%3A16%3A15.293Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="600 18px/1.3 --fontFamily-googleInter" color="--light" sm-text-align="center">
					Other Cool Stuff :)
				</Text>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" background="#1a21ff url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-gap="16px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-gap="0px"
				md-grid-template-columns="repeat(2, 1fr)"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				align-items="center"
				display="flex"
				min-height="320px"
				empty-min-height="64px"
				empty-border-style="solid"
				padding="0px 0px 60px 0px"
			>
				<Text
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
				>
					5M+
				</Text>
				<Text
					text-align="center"
					opacity="0.7"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--dark"
					font="--lead"
					margin="0px 0px 0px 0px"
					right="10px"
				>
					Combined Followers
					<br />
					Sold Between
					<br />
					Different Accs
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				min-height="320px"
				padding="0px 0px 60px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					right="10px"
				>
					15 Mins
				</Text>
				<Text
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					font="--lead"
					margin="0px 0px 0px 0px"
					text-align="center"
					opacity="0.7"
					position="relative"
					color="--dark"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					right="10px"
				>
					Until you get any
					<br />
					dream account
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				sm-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				justify-content="center"
				min-height="320px"
				md-margin="30px 0px 0px 0px"
				align-items="center"
				padding="0px 0px 60px 0px"
			>
				<Text
					margin="0px 15px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
				>
					1 Hour
				</Text>
				<Text
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					margin="0px 0px 0px 0px"
					text-align="center"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					color="--dark"
					font="--lead"
					right="10px"
				>
					Until money is in
					<br />
					your wallet
				</Text>
			</Box>
			<Box
				flex-direction="column"
				md-margin="30px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				display="flex"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				padding="0px 0px 60px 0px"
				sm-margin="0px 0px 0px 0px"
				min-height="320px"
				empty-border-width="1px"
				align-items="center"
				justify-content="center"
			>
				<Text
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
				>
					100+
				</Text>
				<Text
					lg-width="70%"
					width="70%"
					position="relative"
					z-index="1"
					color="--dark"
					text-align="center"
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					font="--lead"
					margin="0px 0px 0px 0px"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Usernames sold
				</Text>
			</Box>
		</Section>
		<Section
			lg-padding="60px 0 40px 0"
			padding="60px 0 100px 0"
			md-padding="30px 0 30px 0"
			background="#1a21ff"
			height="400px"
		>
			<Override slot="SectionContent" id="33" />
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--light"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
			>
				{"                                   "}Contact Us:
			</Text>
			<Box
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				padding="0px 0px 0px 0px"
				border-style="solid"
				display="flex"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				md-border-color="rgba(66, 82, 207, 0.1)"
			>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					justify-content="space-between"
					md-width="100%"
					md-padding="32px 30px 32px 0px"
					display="flex"
					flex-direction="column"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					left="250px"
				>
					<Text
						color="--light"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--headline4"
						text-align="center"
						position="relative"
						left="3%"
					>
						Instagram: @frup
						<br />
						Telegram: @CelinerBiz
						<br />
						Email: whyfibizz@gmail.com
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="#1a21ff" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
				position="relative"
				left="470px"
			>
				<Image
					src="https://uploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22:55:12.812Z"
					margin="0px 0px 24px 0px"
					max-width="171px"
					srcSet="https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c49c381b94b10024354f60/images/Pi7_xaffie%20png%20logo.png?v=2025-03-03T22%3A55%3A12.812Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});