import { initialize } from "unleash-client";

const FLAG = "LOGIN_PAGE";

const unleash = initialize({
	url: "http://127.0.0.1:4242/api",
	appName: "unleash-demo",
	customHeaders: {
		Authorization:
			"*:development.ab8d4128a449fd937e0d6c5a5d9114a873bc1923b70a40e7912235cd",
	},
});

const verifyToggles = () => {
	const enabled = unleash.isEnabled(FLAG);
	console.log(enabled);

	if (enabled) {
		const variant = unleash.getVariant(FLAG);
		if (variant.enabled) {
			console.log(variant);
		}
	}

	setInterval(verifyToggles, 3000);
};

unleash.on("ready", verifyToggles);
