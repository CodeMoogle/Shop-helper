module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
          @import "@/styles/variables.scss";
          @import "@/styles/utils.scss";
          @import "@/styles/base.scss";
        `,
			},
		},
	},
}
