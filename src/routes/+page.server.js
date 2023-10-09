import { gql } from 'graphql-request';
import { hygraph } from '$/hygraph.js';

export async function load() {
	let query = gql`
		query workinghomepage {
			homepages {
				werkvormen
				content {
					raw
					markdown
				}
				werkvormAfbeelding {
					url
					handle
					size
				}
			}
		}
	`;

	return await hygraph.request(query);
}
