const sanityClient = require("@sanity/client");
const client = sanityClient({
	projectId: "", // INSERT SANITY TOKEN HERE
	dataset: "production",
	token: "",
	useCdn: true
});

export default client;
