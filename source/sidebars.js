module.exports = {
	docs: {
		Home: ["home/doc1", "home/doc2", "home/doc3"],
		Javascript: [
			//! s1
			"js/s1/doc-byb-js",
			"js/s1/doc-dj-node",
			{
				//? s1
				Preperations: [
					"js/s1/installings/doc-bot",
					"js/s1/installings/doc-bot-add",
					"js/s1/installings/doc-linter",
				],
			},
			//? s2
			{
				"Creating Your Bot": ["js/s2/installings/doc-bot-up"],
			},
		],
		Python: [
			//? s1
			"py/s1/doc-py-byb",
			{
				// Installation: [""],
			},
		],
		Java: [
			//? Java docs
			"java/s1/doc-byb-java",
			{},
		],
		TypeScript: [
			//? TypeScript docs
			"ts/s1/doc-byb-ts",
			{},
		],
	},
};
