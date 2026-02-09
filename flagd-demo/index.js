import { FlagdProvider } from "@openfeature/flagd-provider";
import { OpenFeature } from "@openfeature/server-sdk";

const FLAG = "NEW_FLAG";

const provider = new FlagdProvider();

(async () => {
	await OpenFeature.setProviderAndWait(provider);
	const client = OpenFeature.getClient();
	const flag = await client.getBooleanValue(FLAG, false, {
		user: "rockeseat-user",
		group: "rockeseat-group",
	});
	const details = await client.getBooleanDetails(FLAG, false, {
		user: "rockeseat-user",
		group: "rockeseat-group",
	});
	console.log(flag);
	console.log(details);
})();
