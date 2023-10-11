import { gql } from 'graphql-request'
import { hygraph, hygraphHP } from '$lib/Utils/hygraph'

export async function load() {
	let query = gql`
		query Assets {
			werkvormen {
				beschrijving
				korteBeschrijving
				link
				studiejaar
				contactpersonen {
					email
				}
				opleiding {
					titel
				}
				tags {
					... on Tag {
						id
						titel
					}
				}
				title
			}
		}
	`
	const data = await hygraph.request(query)

	return data
}
