import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";

const PageTemplate = ({ data, pageContext: { siteURL } }) => {
	return <Page data={data} siteURL={siteURL} />;
};

export default PageTemplate;

export const pageQuery = graphql`
	query($id: String!) {
		blogPost(id: { eq: $id }) {
			id
			title
			date(formatString: "MMMM DD, YYYY")
			author
			slug
			excerpt
			body
		}
	}
`;
